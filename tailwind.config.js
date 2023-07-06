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
        'registerbg': "url('./src/image/leftside.jpg')",
        "profilebg" : "bg-url('./src/image/leftside.png')",
        "landing": "url('https://e0.pxfuel.com/wallpapers/76/902/desktop-wallpaper-techno-blue-cool-techno.jpg')"
      }
    },
  },
  plugins: [],
}