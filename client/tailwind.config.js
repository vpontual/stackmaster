/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        banner: '#11111b',
        header: '#f9e2af',
      },
      //index card svg added for background of link selection
      backgroundImage: {
        'index': "url(./assets/card.svg)"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
