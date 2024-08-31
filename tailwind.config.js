/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'ph': '300px',    
      'tab': '530px',    
      'lap': '1191px',
      'com': '1255px',
        
    },
    extend: {},
  },
  plugins: [],
}
