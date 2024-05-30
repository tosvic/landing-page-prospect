const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'neutralsilver': '#F5F7FA',
        'neutraldgray': '#4D4D4D',
        'brandprimary': '#4CAF4F',
        'neutralgray': '#717171',
      }
    },
  },
  plugins: [
    flowbite.content(),
],
}


