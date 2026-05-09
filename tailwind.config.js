/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#fff7e1',
          300: '#f7d88f',
          500: '#d4af37',
          700: '#a37f1a'
        }
      },
      boxShadow: {
        luxe: '0 10px 30px rgba(212, 175, 55, 0.25)'
      }
    }
  },
  plugins: []
};
