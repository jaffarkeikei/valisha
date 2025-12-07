/**
 * Valisha Bead Printer - Main Firmware
 * 
 * Automated bead wristband printing system
 * 
 * @author Valisha Team
 * @version 0.1.0
 * @date December 2025
 */

#include <Arduino.h>
#include <WiFi.h>
#include <WebServer.h>
#include <ArduinoJson.h>
#include <AccelStepper.h>
#include <ESP32Servo.h>
#include <Wire.h>
#include <FastLED.h>

#include "config.h"
#include "motion/MotionController.h"
#include "sensors/SensorManager.h"
#include "bead/BeadHandler.h"
#include "communication/CommManager.h"
#include "ui/DisplayManager.h"
#include "print/PrintEngine.h"

// =============================================================================
// Global Objects
// =============================================================================

MotionController motion;
SensorManager sensors;
BeadHandler beadHandler;
CommManager comm;
DisplayManager display;
PrintEngine printEngine;

// State machine
enum SystemState {
    STATE_IDLE,
    STATE_MEASURING,
    STATE_PREPARING,
    STATE_PRINTING,
    STATE_PAUSED,
    STATE_COMPLETING,
    STATE_ERROR
};

volatile SystemState currentState = STATE_IDLE;
volatile bool emergencyStop = false;

// Task handles for FreeRTOS
TaskHandle_t motionTaskHandle = NULL;
TaskHandle_t sensorTaskHandle = NULL;
TaskHandle_t commTaskHandle = NULL;
TaskHandle_t uiTaskHandle = NULL;

// =============================================================================
// Interrupt Service Routines
// =============================================================================

void IRAM_ATTR onEmergencyStop() {
    emergencyStop = true;
    motion.stopAll();
    currentState = STATE_ERROR;
}

// =============================================================================
// FreeRTOS Tasks
// =============================================================================

/**
 * Motion control task - handles stepper and servo movements
 * Runs on Core 0 for timing precision
 */
void motionTask(void* parameter) {
    TickType_t xLastWakeTime = xTaskGetTickCount();
    const TickType_t xFrequency = pdMS_TO_TICKS(1); // 1ms loop
    
    for (;;) {
        if (!emergencyStop) {
            motion.update();
        }
        vTaskDelayUntil(&xLastWakeTime, xFrequency);
    }
}

/**
 * Sensor reading task - reads all sensors periodically
 */
void sensorTask(void* parameter) {
    TickType_t xLastWakeTime = xTaskGetTickCount();
    const TickType_t xFrequency = pdMS_TO_TICKS(50); // 50ms loop (20Hz)
    
    for (;;) {
        sensors.update();
        vTaskDelayUntil(&xLastWakeTime, xFrequency);
    }
}

/**
 * Communication task - handles WiFi, BLE, Serial
 */
void commTask(void* parameter) {
    for (;;) {
        comm.update();
        vTaskDelay(pdMS_TO_TICKS(10));
    }
}

/**
 * UI task - handles display and user input
 */
void uiTask(void* parameter) {
    for (;;) {
        display.update();
        vTaskDelay(pdMS_TO_TICKS(33)); // ~30 FPS
    }
}

// =============================================================================
// Setup
// =============================================================================

void setup() {
    // Initialize serial
    Serial.begin(115200);
    Serial.println("\n\n");
    Serial.println("╔══════════════════════════════════════╗");
    Serial.println("║       VALISHA BEAD PRINTER v0.1      ║");
    Serial.println("║     Automated Wristband Printing     ║");
    Serial.println("╚══════════════════════════════════════╝");
    Serial.println();
    
    // Initialize I2C
    Wire.begin(PIN_SDA, PIN_SCL);
    Wire.setClock(400000); // 400kHz
    
    // Initialize emergency stop
    pinMode(PIN_ESTOP, INPUT_PULLUP);
    attachInterrupt(digitalPinToInterrupt(PIN_ESTOP), onEmergencyStop, FALLING);
    
    // Initialize subsystems
    Serial.println("[INIT] Initializing display...");
    display.begin();
    display.showSplash();
    
    Serial.println("[INIT] Initializing motion system...");
    motion.begin();
    
    Serial.println("[INIT] Initializing sensors...");
    sensors.begin();
    
    Serial.println("[INIT] Initializing bead handler...");
    beadHandler.begin(&motion, &sensors);
    
    Serial.println("[INIT] Initializing print engine...");
    printEngine.begin(&motion, &sensors, &beadHandler);
    
    Serial.println("[INIT] Initializing communication...");
    comm.begin();
    
    // Create FreeRTOS tasks
    Serial.println("[INIT] Creating tasks...");
    
    xTaskCreatePinnedToCore(
        motionTask,
        "Motion",
        4096,
        NULL,
        2,  // High priority
        &motionTaskHandle,
        0   // Core 0
    );
    
    xTaskCreatePinnedToCore(
        sensorTask,
        "Sensors",
        4096,
        NULL,
        1,
        &sensorTaskHandle,
        1   // Core 1
    );
    
    xTaskCreatePinnedToCore(
        commTask,
        "Comm",
        8192,
        NULL,
        1,
        &commTaskHandle,
        1
    );
    
    xTaskCreatePinnedToCore(
        uiTask,
        "UI",
        4096,
        NULL,
        1,
        &uiTaskHandle,
        1
    );
    
    // Home all axes
    Serial.println("[INIT] Homing axes...");
    display.showStatus("Homing...");
    motion.homeAll();
    
    // Ready
    Serial.println("[INIT] System ready!");
    display.showStatus("Ready");
    currentState = STATE_IDLE;
}

// =============================================================================
// Main Loop
// =============================================================================

void loop() {
    // Main state machine
    switch (currentState) {
        case STATE_IDLE:
            handleIdle();
            break;
            
        case STATE_MEASURING:
            handleMeasuring();
            break;
            
        case STATE_PREPARING:
            handlePreparing();
            break;
            
        case STATE_PRINTING:
            handlePrinting();
            break;
            
        case STATE_PAUSED:
            handlePaused();
            break;
            
        case STATE_COMPLETING:
            handleCompleting();
            break;
            
        case STATE_ERROR:
            handleError();
            break;
    }
    
    // Allow other tasks to run
    vTaskDelay(pdMS_TO_TICKS(10));
}

// =============================================================================
// State Handlers
// =============================================================================

void handleIdle() {
    // Check for new print job from communication
    if (comm.hasPendingJob()) {
        PrintJob job = comm.getPendingJob();
        printEngine.loadJob(job);
        currentState = STATE_MEASURING;
        display.showStatus("Place wrist in opening");
    }
    
    // Check for manual start button
    if (display.isStartPressed()) {
        currentState = STATE_MEASURING;
        display.showStatus("Place wrist in opening");
    }
}

void handleMeasuring() {
    display.showMeasurement();
    
    // Check if wrist is detected
    if (sensors.isWristPresent()) {
        delay(500); // Wait for stable reading
        
        float circumference = sensors.measureWristSize();
        
        if (circumference > MIN_WRIST_SIZE && circumference < MAX_WRIST_SIZE) {
            printEngine.setWristSize(circumference);
            display.showSize(circumference);
            
            Serial.printf("[MEASURE] Wrist size: %.1f mm\n", circumference);
            
            delay(1000);
            currentState = STATE_PREPARING;
        } else {
            display.showError("Invalid size. Try again.");
            delay(2000);
        }
    }
    
    // Allow cancel
    if (display.isCancelPressed()) {
        currentState = STATE_IDLE;
        display.showStatus("Ready");
    }
}

void handlePreparing() {
    display.showStatus("Preparing...");
    
    // Check bead levels
    if (!beadHandler.checkBeadLevels(printEngine.getRequiredColors())) {
        display.showError("Low bead levels!");
        currentState = STATE_ERROR;
        return;
    }
    
    // Check string
    if (!sensors.isStringPresent()) {
        display.showError("No string detected!");
        currentState = STATE_ERROR;
        return;
    }
    
    // Prepare threading mechanism
    beadHandler.prepareThreading();
    
    Serial.println("[PREPARE] Ready to print");
    currentState = STATE_PRINTING;
}

void handlePrinting() {
    if (!printEngine.isComplete()) {
        // Update progress display
        float progress = printEngine.getProgress();
        display.showProgress(progress);
        
        // Execute next bead placement
        if (!printEngine.executeNextStep()) {
            Serial.println("[ERROR] Print step failed");
            currentState = STATE_ERROR;
            return;
        }
        
        // Report progress via communication
        comm.sendProgress(progress);
    } else {
        currentState = STATE_COMPLETING;
    }
    
    // Check for pause
    if (display.isPausePressed()) {
        currentState = STATE_PAUSED;
        display.showStatus("Paused");
    }
}

void handlePaused() {
    // Wait for resume or cancel
    if (display.isResumePressed()) {
        currentState = STATE_PRINTING;
    }
    
    if (display.isCancelPressed()) {
        printEngine.cancel();
        motion.homeAll();
        currentState = STATE_IDLE;
        display.showStatus("Cancelled");
        delay(2000);
        display.showStatus("Ready");
    }
}

void handleCompleting() {
    display.showStatus("Finishing...");
    
    // Attach clasp
    beadHandler.attachClasp();
    
    // Cut string
    beadHandler.cutString();
    
    // Eject wristband
    beadHandler.eject();
    
    // Done!
    display.showComplete();
    comm.sendComplete();
    
    Serial.println("[COMPLETE] Wristband finished!");
    
    delay(3000);
    currentState = STATE_IDLE;
    display.showStatus("Ready");
}

void handleError() {
    display.showError(printEngine.getLastError());
    
    // Wait for acknowledgment
    if (display.isAnyButtonPressed()) {
        emergencyStop = false;
        motion.reset();
        motion.homeAll();
        currentState = STATE_IDLE;
        display.showStatus("Ready");
    }
}

