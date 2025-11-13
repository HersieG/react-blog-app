/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false, // ← This disables Tailwind's CSS reset
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
