/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'lg': {'max': '1023px'},
      'sm': {'max': '639px'},
    },
    extend: {
      fontSize: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
      },
      colors:{
        'primary':'#fda3ff',
        'secondary':'#b0eeff',
        'tertiary':'#f7ed74',
        
      }
    },
  },
  plugins: [],
};
