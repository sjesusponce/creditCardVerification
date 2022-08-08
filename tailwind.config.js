/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      'xs': '.875rem',
      'sm': '1rem',
      'tiny': '1rem',
      'base': '1.125rem',
      'lg': '1.25rem',
      'xl': '1.375rem',
      '2xl': '1.625rem',
      '3xl': '2rem',
      '4xl': '2.375rem',
      '5xl': '3.125rem',
      '6xl': '4.125rem',
      '7xl': '5.125rem',
    },
    extend: {
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"']
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
}
