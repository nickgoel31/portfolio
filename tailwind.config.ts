import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        "bebas":["Bebas Neue", "sans-serif"]
      },
      boxShadow:{
        "projectCards": "0px -15px 15.3px 0 #00000070",
        "contactLinks": "0px 0px 30px 5px #75c4e6",
      },
      animation:{
        "fade": "fade 0.3s ease",
      },
      keyframes:{
        "fade": {
          "0%": {"opacity": "0"},
          "100%": {"opacity": "1"}
        }
      },
      transitionProperty: {
        "custom":"shadow, color"
      }
    },
  },
  plugins: [],
};
export default config;
