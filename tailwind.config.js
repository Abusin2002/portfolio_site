// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'typing': 'typing 3.5s steps(40, end)',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' }
        }
      }
    },
  },
  plugins: [],
}