// tailwind.config.js
module.exports = {
  darkMode: "class", // Ajoutez cette ligne
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        w: "#ffffff",
        main: "#373737",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
