/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Clash Display', 'sans-serif'],
        'body': ['Satoshi', 'sans-serif'],
      },
      colors: {
        'valisha': {
          50: '#fef7ee',
          100: '#fdedd6',
          200: '#fad7ad',
          300: '#f6ba78',
          400: '#f19341',
          500: '#ee751c',
          600: '#df5a12',
          700: '#b94311',
          800: '#933616',
          900: '#772f15',
          950: '#401509',
        },
        'earth': {
          50: '#f7f6f4',
          100: '#edebe5',
          200: '#dbd6ca',
          300: '#c5bca9',
          400: '#ac9d86',
          500: '#9a886e',
          600: '#8d7962',
          700: '#766352',
          800: '#615247',
          900: '#50443c',
          950: '#2a231f',
        },
        'kente': {
          gold: '#FFD700',
          red: '#DC143C',
          green: '#228B22',
          black: '#1a1a2e',
          blue: '#0077B6',
        }
      },
      animation: {
        'bead-float': 'beadFloat 6s ease-in-out infinite',
        'bead-pulse': 'beadPulse 2s ease-in-out infinite',
        'string-wave': 'stringWave 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        beadFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        beadPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        stringWave: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'kente-pattern': `repeating-linear-gradient(
          90deg,
          #FFD700 0px,
          #FFD700 10px,
          #DC143C 10px,
          #DC143C 20px,
          #228B22 20px,
          #228B22 30px,
          #000000 30px,
          #000000 40px
        )`,
      }
    },
  },
  plugins: [],
}

