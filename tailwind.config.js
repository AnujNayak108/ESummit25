/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at left, var(--tw-gradient-stops))",
      },
      colors: {
        primaryGreen: "#00B25C",
        secondaryGreen: "#009E52",
        primaryText: "#EEEEEE",
        secondaryText: "#B6B6B6",
        primaryGrey: "#1A1A1A",
        secondaryGrey: "#121212",
        borderColor: "#616161",
      },
    },
  },
  plugins: [],
};
