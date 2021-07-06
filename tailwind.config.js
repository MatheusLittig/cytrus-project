module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      gridTemplateRows: {
        'protected-routes': '80px calc(100vh - 80px)',
        'app-sider': 'auto 1fr 80px'
      },
      gridTemplateColumns: {
        'protected-routes': 'auto 300px'
      },
      height: {
        'content': 'calc(100vh - 80px)'
      },
      margin: {
        'screen': '0 auto'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
