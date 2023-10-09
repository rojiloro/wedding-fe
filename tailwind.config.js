/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Birdeline Yashintta", "sans-serif"],
        custom3: ["Onions", "sans-serif"],
        custom4: ["Gilconish Matter", "sans-serif"],
        custom2: ["Identitad", "sans-serif"],
        monserat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
