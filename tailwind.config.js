module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      gridTemplateRows: {
        'protected-routes': '80px auto'
      },
      gridTemplateColumns: {
        'protected-routes': 'auto 400px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
