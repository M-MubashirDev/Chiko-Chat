// tailwind.config.js

import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Paths to files using Tailwind classes
  theme: {
    extend: {}, // Extend the default theme if needed
  },
  plugins: [daisyui],
};
