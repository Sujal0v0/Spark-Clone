/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonGreen: "#CBED42",
        buttonHover: "#a0c313",
        textBlack: "#1D1F13",
        buttonBorder: "#e1e1e1",
        backgroundGray1: "#f7f7f7",
        backgroundGray2: "#F8F8F6",
        backgroundGray3: "#F9F9F9",
        hoverBackground: "#dcdcd2",
        textFooter: "#777871",
        backgroundContact: "#1C1E13",
        buttonContact: "#4A4B42",
      },
      screens: {
        xs: "420px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
