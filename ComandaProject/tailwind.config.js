/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      railway: ["Raleway", "sans-serif"],
    },
    backgroundImage: {
      mainBanner: "url(assets/images/banner_main.png)",
      secondaryBanner: "url(assets/images/banner_secondary.png)",
    },
    screens: {
      md: "800px",
    },
    extend: {
      colors: {
        "main-white": "#FCF8F7",
        "main-black": "#000000",
        "main-orange": "#D8753A",
      },
    },
  },
  plugins: [],
};
