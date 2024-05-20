/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        cardLogin: '0 0 64px rgba(0, 0, 0, 0.25)',
        cardProfile: '0 2px 10px rgba(0, 0, 0, 0.10)'
      },
      fontFamily: "Nunito",
      colors: {
        primary: "#02274F",
        secondary: "#FDCF00",
        background: "#FAFAFA",
        textColor: "#262626",
        white3: "#F1F1F1",
        gray6: "#999999",
        red: {
          light: "#e34242",
          regular: "#db0b0b",
        }
      },
      textColor: "#262626",
      height: {
        'percentage/100': '100vh',
      },
      width: {
        'percentage/100': '100vw',
      }
    },
  },
  plugins: [],
}

