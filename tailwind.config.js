/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Inter"', 'sans-serif'], // Replace "Poppins" with your desired font
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

 