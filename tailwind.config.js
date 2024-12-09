/** @type {import('tailwindcss').Config} */
module.exports = {
  
   darkMode: 'selector',
   darkMode: ['variant', [
    '@media (prefers-color-scheme: dark) { &:not(.light *) }',
    '&:is(.dark *)',
  ]],
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
