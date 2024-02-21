import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#212121',
        gray: '#979795',
        white: '#fcfffb',
        orange: '#ff5733',
      },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      normal: '0',
      wider: '.05em',
      widest: '.25em',
    },
    fontFamily: {
      main: 'Barlow, sans-serif',
    }
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
