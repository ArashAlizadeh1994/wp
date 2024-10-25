/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "yekanbakh-md": ["Yekanbakh-md"],
        "yekanbakh-light": ["Yekanbakh-light"],
      },
    },
  },
  plugins: [],
};
