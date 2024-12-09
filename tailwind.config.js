/** @type {import('tailwindcss').Config} */
module.exports = {
  
  darkMode: 'class', // Use 'class' to enable toggling dark mode

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      }, rotate: {
        '25': '25deg',
      }
    },
  },
   plugins: [
    require('daisyui'),
  ],
};
