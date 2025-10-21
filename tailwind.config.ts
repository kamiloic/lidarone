import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'lidar-dark': '#19355D',
        'lidar-blue': '#116EAB',
        'lidar-teal': '#00FAC7',
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'cyber': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;