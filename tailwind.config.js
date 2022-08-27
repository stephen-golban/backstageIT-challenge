/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'miista-bg': '#F8F5EE',
        'miista-gray': '#3B3B3B',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/miista-hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
