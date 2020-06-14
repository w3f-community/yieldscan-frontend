// tailwind.config.js
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        teal: {
          ...colors.teal,
          '300': '#45E2E2',
          '500': '#2BCACA',
          '700': '#20B1B1',
        },
        pink: {
          ...colors.pink,
          '300': '#FF9DC0',
          '500': '#FF7CAB',
          '700': '#EF6093',
        },
      }
    }
  },
  variants: {},
  plugins: [],
};
