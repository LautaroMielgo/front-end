/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "bgjobsoffer": "url('./src/image/jobsearch.jpg')",
        'registerbg': "url('https://p4.wallpaperbetter.com/wallpaper/798/507/822/blue-numbers-techno-wallpaper-preview.jpg')",
        "profilebg" : "bg-url('https://i.pinimg.com/474x/91/73/17/917317596ff52c9d81ae909c08313784.jpg')",
        "landing": "url('https://e0.pxfuel.com/wallpapers/76/902/desktop-wallpaper-techno-blue-cool-techno.jpg')"
      }
    },
  },
  plugins: [],
}