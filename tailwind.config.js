/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},

    colors:{
      customButton:{
        500:'#1B424C',
        400:'#b8fae6',
        300:'#E1E7E7',
        200:'#ECF3F3',
        100:'#E6F1F0'
      },

      fontFamily: {
        'body': ['Raleway',],
       
      },

      backgroundImage:{

        'footer': "url(./src/img/bg.jpg')",



      }
  

    }
  },
  plugins: [],
}

