/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        xl: '1440px',
        md: '760px',
        sm: '300px',
      },
      colors: {
        primary: '#27AEA1',
        secondary: '#E5BC40',
        danger: '#D83F31',
        dark: '#1E1E1E',
        light: '#F9F9F9',
      },
      fontFamily: {
        kufam: ['kufam', 'system-ui'],
        dmSans: ['DM Sans', 'system-ui'],
      },
      fontSize: {
        h1: [
          '2.5rem',
          {
            fontWeight: '700',
          },
        ],
        h2: [
          '2rem',
          {
            fontWeight: '700',
          },
        ],
        h3: [
          '1.75rem',
          {
            fontWeight: '700',
          },
        ],
        h4: [
          '1.5rem',
          {
            fontWeight: '700',
          },
        ],
        h5: [
          '1.25rem',
          {
            fontWeight: '700',
          },
        ],
        h6: [
          '1rem',
          {
            fontWeight: '700',
          },
        ],
        sub: [
          '1.25rem',
          {
            fontWeight: '400',
          },
        ],
        label: [
          '1rem',
          {
            fontWeight: '700',
          },
        ],
        body: [
          '0.9375rem',
          {
            fontWeight: '400',
          },
        ],
      },
    },
  },
  plugins: [],
};
