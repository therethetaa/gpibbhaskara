module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-gray": "#242424",
        "lighter-glass": "#242424E6",
        "dark-glass": "#242424A6",
        "darker-glass": "#242424D9",
        "dark-navy": "#28323F",
        "mid-navy": "#2B3443",
        "light-navy": "#53698f",
        "light-gray": "#2e2e2d",
        "snow-cream": "#fffcf7",
        "wood-cream": "#D5AD6D",
        "dark-gold": "#B99026",
        "darker-gold": "#9C781F",
        "mid-gold": "#E5BB4D",
        "rod-gold": "#ECBD44",
      },
      letterSpacing: {
        upnormal: "0.5em",
      },
      boxShadow: {
        gold: "0 0px 8px -1px #B99026",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  variants: {
    display: ["responsive", "dropdown"],
    extend: {},
    scrollbars: ["rounded"],
  },
  plugins: [require("tailwindcss-dropdown"), require("tailwind-scrollbar")],
};
