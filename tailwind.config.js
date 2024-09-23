/** @type {import('tailwindcss').Config} */
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          '0%': { 'background-position': 'left', 'opacity': 1},
          '50%': { 'opacity': .5},
          '100%': {'background-position': 'right', 'opacity': 1},
         
        }
      },
      animation: {
        pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      }
    },
  },
  plugins: [
   tailwindScrollbarHide
  ],
}

