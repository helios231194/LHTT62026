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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Brand Colors
        'oxford-blue': '#002b57',
        'cyan-azure': '#00AEEF',
        'metallic-blue': '#205e8c',
        'dark-blue': '#051926',
        'blaze-orange': '#ff6801',
        'ice-white': '#EBEBF1',
        'light-gray': '#E2E8F0',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
