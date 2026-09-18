/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#12386f', light: '#1b4f9c', dark: '#0d2b57' },
        poster: {
          yellow: '#ffd233',
          cream: '#fdeaa7',
          blue: '#2e86d8',
          green: '#17a06a',
          orange: '#f4831f',
          purple: '#8b4fbf',
          pink: '#e8315f',
        },
        field: { light: '#a8dd7a', DEFAULT: '#63b74a' },
      },
      fontFamily: {
        display: ['Fredoka', 'Trebuchet MS', 'sans-serif'],
        hand: ['Kalam', 'Comic Sans MS', 'cursive'],
      },
      borderRadius: { card: '26px', bar: '30px' },
      boxShadow: {
        card: '0 10px 24px -12px rgba(16,42,80,.35)',
        'card-hover': '0 22px 36px -18px rgba(16,42,80,.5)',
      },
      backgroundImage: {
        poster:
          'linear-gradient(180deg,#8ed6f7 0%,#cdeeff 16%,#d9f0b8 30%,#a8dd7a 46%,#9ed77e 100%)',
      },
    },
  },
  plugins: [],
}
