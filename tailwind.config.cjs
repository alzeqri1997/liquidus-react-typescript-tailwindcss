/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'box-shadow': '4px 4px 20px rgba(17, 36, 85, 0.06) '
      },
      screens: {
          'max-2xl': {'max': '1535px'},
          // => @media (max-width: 1535px) { ... }
    
          'max-xl': {'max': '1279px'},
          // => @media (max-width: 1279px) { ... }
    
          'max-lg': {'max': '1023px'},
          // => @media (max-width: 1023px) { ... }
    
          'max-md': {'max': '767px'},
          // => @media (max-width: 767px) { ... }
    
          'max-sm': {'max': '639px'},
          // => @media (max-width: 639px) { ... }
      }
    },
    colors: {
      primary: '#17E7D6',
      secondary: '#112455',
      white: '#ffffff',
      dark: '#040618'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '11.625rem',
      },
    }
  },
  plugins: [],
}

