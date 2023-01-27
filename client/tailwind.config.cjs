/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      xxs: "370px",
      // => @media (min-width: 370px) { ... }

      xs: "480px",
      // => @media (min-width: 480px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "800px",
      // => @media (min-width: 800px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "0.8rem",
        // xxs: '1rem',
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        xxl: "8rem",
      },
    },

    colors: {
      primary: "#",
      secondary: "#",
      tertiary: "#",

      neutral900: "#171717",
      neutral800: "#2E2E2E",
      neutral700: "#4E4E4E",
      neutral600: "#525252",
      neutral500: "#737373",
      neutral400: "#9D9D9D",
      neutral300: "#D4D4D4",
      neutral200: "#E5E5E5",
      neutral100: "#F5F5F5",
      neutral50: "#FAFAFA",
      neutral30: "#edf6f7",

      emerald900: "#064e3b",
      emerald800: "#065f46",
      emerald700: "#047857",
      emerald600: "#059669",
      emerald500: "#10b981",
      emerald400: "#34d399",
      emerald300: "#6ee7b7",
      emerald200: "#a7f3d0",
      emerald100: "#d1fae5",

      rose900: "#881337",
      rose800: "#9f1239",
      rose700: "#be123c",
      rose600: "#e11d48",
      rose500: "#f43f5e",
      rose400: "#fb7185",
      rose300: "#fda4af",
      rose200: "#fecdd3",
      rose100: "#ffe4e6",
      rose50: "#fff1f2",

      white: "#fff",
      black: "#000",

      light: "#f7f7f7",
      dark: "#121212",
    },

    extend: {},
  },
  plugins: [],
};
