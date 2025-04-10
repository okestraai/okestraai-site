/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E6F3FF',    // Very light blue
          DEFAULT: '#3B82F6',   // Bright blue
          dark: '#1D4ED8',      // Dark blue
          darker: '#1E40AF',    // Deeper blue
          darkest: '#1E3A8A'    // Navy blue
        }
      }
    },
  },
  plugins: [],
} 