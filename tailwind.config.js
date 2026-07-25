/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./pages/**/*.html", "./js/**/*.js"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        brand: {
          orange: "#F5A623",
          "orange-dark": "#E09410",
        },
        hero: {
          yellow: "#FFB028",
        },
        badge: {
          cream: "#FFF6E5",
        },
        surface: {
          cream: "#FEFBF7",
          peach: "#FEEED6",
        },
        footer: {
          dark: "#1A1A1A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
