/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        motionComp: 'motionComp 2000ms ease forwards',
        motionUser: 'motionUser 2000ms ease forwards',
        scaleThings: 'scaleThings 10s ease-out ',
        compImages: 'compImages 2s infinite '
      },
      keyframes: {
        motionComp: {
          '0%': { transform: 'rotate(-15deg) ' },
          '80%': { transform: 'rotate(90deg) translateY(-80%) translateX(0%) ', position: 'relative'  }
        },
        motionUser: {
          '0%': { transform: 'rotate(15deg) ' },
          '80%': { transform: 'rotate(-90deg) translateY(-80%) translateX(40%)', position: 'relative'  }
        },
        scaleThings: {
          '0%': {transform: 'scale(0.1) '},
          '100%': {transform: 'scale(1) ' }
        },
        compImages: {
          '0%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(1.5)'},
          '100%': {transform: 'scale(1)'}
        }
      }
    },
  },
  plugins: [],
}