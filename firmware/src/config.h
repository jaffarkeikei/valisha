/**
 * Valisha Bead Printer - Configuration
 * 
 * Pin definitions, constants, and settings
 */

#ifndef CONFIG_H
#define CONFIG_H

// =============================================================================
// Version
// =============================================================================

#define FIRMWARE_VERSION "0.1.0"
#define DEVICE_NAME "Valisha"

// =============================================================================
// Pin Definitions
// =============================================================================

// Stepper Motor Pins (STEP/DIR for TMC2209)
#define PIN_CAROUSEL_STEP    32
#define PIN_CAROUSEL_DIR     33
#define PIN_LINEAR_X_STEP    25
#define PIN_LINEAR_X_DIR     26
#define PIN_LINEAR_Z_STEP    27
#define PIN_LINEAR_Z_DIR     14
#define PIN_PICKER_STEP      12
#define PIN_PICKER_DIR       13

// Stepper Enable (active LOW, shared)
#define PIN_STEPPER_ENABLE   4

// Servo Pins
#define PIN_SERVO_PICKER     16
#define PIN_SERVO_GRIPPER    17
#define PIN_SERVO_TENSION    2
#define PIN_SERVO_RELEASE    15

// I2C Pins
#define PIN_SDA              21
#define PIN_SCL              22

// Display SPI Pins (configured in platformio.ini)
#define PIN_TFT_CS           5
#define PIN_TFT_DC           17
#define PIN_TFT_RST          -1
#define PIN_TOUCH_CS         15

// Sensor Pins
#define PIN_SENSOR_XSHUT_1   34
#define PIN_SENSOR_XSHUT_2   35
#define PIN_SENSOR_XSHUT_3   36
#define PIN_SENSOR_XSHUT_4   39

// Limit Switch Pins
#define PIN_LIMIT_X_MIN      34
#define PIN_LIMIT_X_MAX      35
#define PIN_LIMIT_Z_MIN      36
#define PIN_LIMIT_Z_MAX      39
#define PIN_LIMIT_CAROUSEL   32
#define PIN_LIMIT_PICKER     33

// LED Strip
#define PIN_LED_STRIP        23
#define NUM_LEDS             30

// Buzzer
#define PIN_BUZZER           19

// User Input
#define PIN_ENCODER_A        18
#define PIN_ENCODER_B        5
#define PIN_ENCODER_BTN      0
#define PIN_BTN_START        34
#define PIN_BTN_PAUSE        35
#define PIN_BTN_STOP         39

// Emergency Stop (active LOW)
#define PIN_ESTOP            36

// Vacuum Pump
#define PIN_VACUUM_PUMP      2

// Vibration Motors (active HIGH)
#define PIN_VIBRATION_1      25
#define PIN_VIBRATION_2      26

// =============================================================================
// Motion Settings
// =============================================================================

// Stepper configuration
#define STEPS_PER_REV        200
#define MICROSTEPPING        16
#define STEPS_PER_MM         80.0  // For lead screw, adjust as needed

// Maximum speeds (steps/second)
#define MAX_SPEED_CAROUSEL   2000
#define MAX_SPEED_LINEAR     3000
#define MAX_SPEED_PICKER     1500

// Acceleration (steps/second^2)
#define ACCEL_CAROUSEL       1000
#define ACCEL_LINEAR         2000
#define ACCEL_PICKER         1000

// Homing speeds
#define HOMING_SPEED         500
#define HOMING_ACCEL         500

// =============================================================================
// Servo Settings
// =============================================================================

#define SERVO_PICKER_MIN     0
#define SERVO_PICKER_MAX     180
#define SERVO_PICKER_HOME    90

#define SERVO_GRIPPER_OPEN   30
#define SERVO_GRIPPER_CLOSE  120

#define SERVO_TENSION_MIN    0
#define SERVO_TENSION_MAX    90

// =============================================================================
// Bead Settings
// =============================================================================

// Supported bead sizes (mm)
#define BEAD_SIZE_4MM        4.0
#define BEAD_SIZE_6MM        6.0
#define BEAD_SIZE_8MM        8.0

// Default bead size
#define DEFAULT_BEAD_SIZE    BEAD_SIZE_6MM

// Number of color hoppers
#define NUM_HOPPERS          12

// Hopper positions (degrees from home)
#define HOPPER_SPACING       30  // 360 / 12 = 30 degrees

// =============================================================================
// Wrist Measurement
// =============================================================================

#define MIN_WRIST_SIZE       120.0  // mm
#define MAX_WRIST_SIZE       220.0  // mm

#define MEASUREMENT_STATION_WIDTH  100.0  // mm (distance between sensors)

// =============================================================================
// Communication
// =============================================================================

// WiFi (set via web config or hardcode for testing)
#define WIFI_SSID            ""
#define WIFI_PASSWORD        ""

// Access Point mode (used for initial setup)
// IMPORTANT: Change AP_PASSWORD before deploying to production!
#define AP_SSID              "Valisha-Setup"
#define AP_PASSWORD          "valisha2025setup"

// Web server port
#define WEB_SERVER_PORT      80

// Serial baud rate
#define SERIAL_BAUD          115200

// =============================================================================
// Display
// =============================================================================

#define TFT_WIDTH            480
#define TFT_HEIGHT           320
#define TFT_ROTATION         1

// Colors (RGB565)
#define COLOR_BG             0x0000  // Black
#define COLOR_PRIMARY        0x07FF  // Cyan
#define COLOR_SECONDARY      0xF800  // Red
#define COLOR_SUCCESS        0x07E0  // Green
#define COLOR_WARNING        0xFFE0  // Yellow
#define COLOR_TEXT           0xFFFF  // White

// =============================================================================
// Timing
// =============================================================================

#define BEAD_PICKUP_DELAY    50   // ms
#define BEAD_PLACE_DELAY     50   // ms
#define CAROUSEL_SETTLE_TIME 100  // ms

// =============================================================================
// Safety
// =============================================================================

#define MOTOR_TIMEOUT        5000  // ms - stop if no movement detected
#define MAX_PRINT_TIME       600   // seconds (10 minutes max per wristband)

// =============================================================================
// Debug
// =============================================================================

#define DEBUG_MOTION         1
#define DEBUG_SENSORS        1
#define DEBUG_BEAD           1
#define DEBUG_COMM           1

#endif // CONFIG_H

