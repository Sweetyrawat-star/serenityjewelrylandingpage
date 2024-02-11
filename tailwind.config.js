module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          600: "#957461",
          900: "#4d1f08",
          "600_b2": "#957461b2",
          "900_01": "#552912",
        },
        amber: { 200: "#fde486" },
        white: { A700: "#ffffff" },
        black: { "900_b7": "#000000b7" },
        red: { 50: "#fff2eb" },
      },
      fontFamily: {
        cormorantgaramond: "Cormorant Garamond",
        poppins: "Poppins",
        playfairdisplay: "Playfair Display",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
