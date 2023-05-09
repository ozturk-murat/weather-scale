/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      background: {
        'gradient-radial': 'radial-gradient(circle farthest-corner at 7.2% 13.6%, rgba(37,249,245,1) 0%, rgba(8,70,218,1) 90%)',
      },
    },
  },
  plugins: [],
}
