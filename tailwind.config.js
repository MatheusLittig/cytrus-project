module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      gridTemplateRows: {
        'protected-routes': '80px auto',
        'app-sider': '260px 1fr 80px'
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
