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
        'side-block': '#483ffd',
        'side-icon': '#7f79fe',
        

      },
      width: {
        '.15': '15%',
        '.85': '85%'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  darkMode: 'class',
  
}

