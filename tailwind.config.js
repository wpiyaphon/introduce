/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  fontFamily: {
    sans: ["LineSeed"],
  },
  container: {
    center: true,
  },
};
export const plugins = [];
