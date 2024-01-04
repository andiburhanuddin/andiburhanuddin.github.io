/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#7DE5ED',
        dark: '#0f172a',
        secondary: '#64748b',
        ungu: '#5837D0',
        background: '#022C49',
        third: '#053759',
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        custom: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

