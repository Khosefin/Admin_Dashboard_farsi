/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { 
    extend:{

      fontFamily: {
        'kalame': ['kalame'],
        'kalameB': ['kalameB'],
      },
      colors: {
        'white': '#ffffff',
        'white-50': '#f0f0f0',
        'blum-100': '#471AAA',
        'blum-200': '#391588'
      },
    }
  },
  plugins: [],
};
