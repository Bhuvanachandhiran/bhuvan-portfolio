module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#ff6600',
        'brand-primary': '#38bdf8'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.15)',
      }
    },
  },
  plugins: [],
};
