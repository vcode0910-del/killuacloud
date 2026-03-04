/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pt-dark': '#101116',
        'pt-card': '#1b1d23',
        'pt-input': '#13151b',
        'pt-blue': '#3b82f6',
      },
    },
  },
  plugins: [],
}
