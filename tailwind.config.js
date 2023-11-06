/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dash-light': '#f1f4fb',
        'content-light': '#ffffff',
        'dash-dark': '#222131',
        'content-dark': '#39394b',
        'normal-font': ''

      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  darkMode: 'class',
  
}

