/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This includes all .js, .ts, .jsx, and .tsx files inside the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
