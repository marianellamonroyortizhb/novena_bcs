/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pink-cta": "#FF0077",
        "purple-cta": "#8144AF",
        "dark-blue-main": "#00014A",
        "blue-main": "#205ace",
        "blue-medium-main": "#3faaf4",
        "light-blue-main": "#dbedfc",
        "yellow-main": "#facb58",
        "pink-main": "#fa0379",
        "purple-main": "#8344af",
      },
      backgroundImage: (theme) => ({
        "home-pattern": "url('../public/img/HomeBg.svg')",
        "villancicos-pattern": "url('../public/img/VillancicosBg.svg')",
        "virgen-pattern": "url('../public/img/VirgenBg.svg')",
        "san-jose-pattern": "url('../public/img/SanJoseBg.svg')",
        "nino-jesus-pattern": "url('../public/img/NinoJesusBg.svg')",
        "gozos-pattern": "url('../public/img/GozosBg.svg')",
      }),
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        16: "4rem",
      },
      minHeight: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
