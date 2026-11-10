/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gordo: {
          yellow: '#fcb700',
          'yellow-dark': '#e0a200',
          black: '#0b0b0b',
          ink: '#161616',
          red: '#ff2a1f',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        vibrar: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(-2deg)' },
          '20%': { transform: 'translate(-1.5px, 1px) rotate(-4deg)' },
          '40%': { transform: 'translate(1.5px, -1px) rotate(0deg)' },
          '60%': { transform: 'translate(-1px, -1px) rotate(-3deg)' },
          '80%': { transform: 'translate(1px, 1px) rotate(-1deg)' },
        },
        sello: {
          '0%, 100%': { transform: 'rotate(-12deg) scale(1)' },
          '50%': { transform: 'rotate(-8deg) scale(1.06)' },
        },
      },
      animation: {
        wiggle: 'wiggle 2.4s ease-in-out infinite',
        vibrar: 'vibrar 0.3s linear infinite',
        sello: 'sello 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
