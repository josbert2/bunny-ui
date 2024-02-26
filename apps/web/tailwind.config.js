/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/packages/material-tailwind-react/src/components/**/*.{js,ts,jsx,tsx}",
    "./src/packages/material-tailwind-react/src/theme/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx}",
    "./src/docs-content/**/*.{js,ts,jsx,tsx}",
    "./src/documentation/**/*.mdx",
    "./src/public/material-tailwind-html-v2.js",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: '#0c0c0c',
        border: '#171717',
        secondaryBlack: '#121212',
      },
    },
  },
  plugins: [],
});