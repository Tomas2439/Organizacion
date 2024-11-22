/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors:
      {
        azulAgua: '#6BF2F2',
        azul: '#22B7F2',
        verdeOscuro: '#42D93D',
        verdeAlto: '#C5F222',
        grisClaro: '#D3D3D3',
        grisOscuro: '#353940',
      }, 
      fontFamily:{
        Raleway:['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

