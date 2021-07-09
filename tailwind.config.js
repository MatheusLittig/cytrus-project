module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      gridTemplateRows: {
        'app': '80px auto'
      },
      gridTemplateColumns: {
        'app-content': '940px 340px'
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
