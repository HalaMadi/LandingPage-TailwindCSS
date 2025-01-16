/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Inter: ['Inter', 'sans-serif']
    },
    extend: {
      screens: {
        "2md": "960px" //between medium and lg 
      },
      colors: {
        primary: '#7E3AF2',
        secondaryText: '#6B7280',
        mainText: '#111928'
      },
    },
  },
  plugins: [
  ]

}
