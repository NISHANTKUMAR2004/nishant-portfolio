module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#8b5cf6",   // purple
        accent: "#ec4899",    // pink
        neon: "#a3e635",      // green
        dark: "#0f0f0f",
        glass: "rgba(255,255,255,0.08)"
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      backdropBlur: {
        glass: "12px"
      }
    },
  },
  plugins: [],
}
