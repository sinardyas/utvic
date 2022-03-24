module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',

    },
    
    screens: {
      'sm': '320px',
      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '768px',
      // => @media (min-width: 768px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1024px) { ... }
      
      
    },
   
    extend: {
      
    },
  },
  plugins: [],
}