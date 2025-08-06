/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['var(--font-cairo)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#1B2A41',
        secondary: '#C5A25A',
        background: '#F8F8F5',
        neutral: '#A3A3A3',
        accent: '#4A6345',
      },
    },
  },
  plugins: [],
}
