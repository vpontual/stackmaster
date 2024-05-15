/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        banner: '#11111b',
        header: '#f9e2af',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
