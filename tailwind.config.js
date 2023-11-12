/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#27AEA1',
        secondary: '#E5BC40',
        danger: '#D83F31',
        dark: '#1E1E1E',
        light: '#F9F9F9',
      },
      fontFamily: {
        kufam: 'kufam',
        dmSans: 'dm-sans',
      },
    },
  },
  plugins: [],
};
