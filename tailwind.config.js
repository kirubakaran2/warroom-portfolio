/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'plusJakartaSans': ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'counter-spin': 'counterSpin 20s linear infinite',
        'pulse-thunder': 'pulseThunder 3s infinite',
      },
      keyframes: {
        counterSpin: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        pulseThunder: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
