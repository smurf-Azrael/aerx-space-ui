module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B882E1',
        purple: '#6054F0',
        orange: '#FF7527',
        success: '#19C486',
        danger: '#DB3333',
        black: {
          DEFAULT:'#000000',
          light: '#1D1D1D',
          dark: '#0F0F0F'
        }
      }
    },
  },
  plugins: [],
}