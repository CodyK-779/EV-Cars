/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        firstColor: 'hsl(219, 69%, 56%)',
        firstColorAlt: 'hsl(219, 69%, 52%)',
        titleColor: 'hsl(219, 8%, 95%)',
        textColor: 'hsl(219, 8%, 75%)',
        textColorLight: 'hsl(219, 4%, 55%)',
        whiteColor: '#fff',
        bodyColor: 'hsl(219, 4%, 4%)',
        containerColor: 'hsl(219, 4%, 7%)',
        greenBtn: 'hsl(158, 89%, 30%)',
        blurcolor: 'hsla(0, 0%, 100%, .1)',
      },
      backgroundImage: {
        featuredImg: "url('../src/assets/img/offer-bg.png')"
      }
    },
  },
  plugins: [],
}