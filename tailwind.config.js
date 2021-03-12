module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': {
          100: '#A09FB1',
          300: '#1E213A',
          500: '#100E1D',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
