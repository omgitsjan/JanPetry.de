import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "spring-green": {
          50: "#effef3",
          100: "#d8ffe6",
          200: "#b4fecf",
          300: "#7afbab",
          400: "#38ef7d",
          500: "#0fd85b",
          600: "#06b348",
          700: "#098c3c",
          800: "#0d6e33",
          900: "#0d5a2d",
          950: "#003316",
        },
      },
    },
  },
};
