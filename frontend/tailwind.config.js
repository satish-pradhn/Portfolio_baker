/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      //Defines custom breakpoints for responsive design.
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        background: "#FFFFFF",
        text: {
          primary: "#2E2E2E",
          secondary: "#5C5C5C",
          button: "#f8fafc",
          hover: "#FFFFFF",
          active: "#B0B0B0",
        },
        button: {
          DEFAULT: "#1F1F1F",
          hover: "#2B2B2B",
          active: "#161616",
        },
        border: "#E0E0E0",
        accent: "#9A9A9A",
        hover: {
          text: "#1A1A1A",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [typography, forms, aspectRatio],
};
