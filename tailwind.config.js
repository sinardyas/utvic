module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      colors: {
        primary: "#FFCD00",
      },
      minWidth: {
        "11rem": "11.5rem",
      },
      spacing: {
        "2.35rem": "2.35rem",
      },
      flex: {
        "0-1": "0 1 100%",
        2: "2 2 0%",
        45: "0 1 45%",
        48: "0 1 48%",
        30: "0 1 30%",
      },
    },
  },
  plugins: [],
};
