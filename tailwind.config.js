module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "dark-primary": "#111111",
        "dark-secondary": "#252525",
        "light-primary": "#FDDE24",
        "light-secondary": "#F0F0F0",
        white: "#FFFFFF",
      },
      backgroundImage: {
        "work-hero": "url('/workhero.jpg')",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
