/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF4500",     // Primary base
          light: "#FF6A33",       // Lighter variant
          dark: "#CC3700",        // Darker variant
        },
        secondary: {
          DEFAULT: "#1E90FF",     // Secondary base
          light: "#3CBFFF",       // Lighter variant
          dark: "#1C75D6",        // Darker variant
        },
        //#63C8FF
      },
    },
  },
  plugins: [],
}
