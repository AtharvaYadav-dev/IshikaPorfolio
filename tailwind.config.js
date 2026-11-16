/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#071524',
          900: '#102A43',
          850: '#15324D',
          800: '#1A365D',
          700: '#243B53',
          600: '#334E68',
          500: '#486581',
          400: '#627D98',
          300: '#829AB1',
          200: '#9FB3C8',
          100: '#F0F4F8',
          50: '#F7F9FA',
        },
        aqua: {
          50: '#E6FAF7',
          100: '#CCF5EF',
          200: '#99EBE0',
          400: '#20B2AA',
          500: '#00A896',
          600: '#008B7A',
          700: '#006E60',
          800: '#005247',
        },
        mint: {
          500: '#02C39A',
          600: '#02A884',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 25px -4px rgba(16, 42, 67, 0.06)',
        'card': '0 10px 30px -5px rgba(16, 42, 67, 0.08), 0 4px 6px -2px rgba(16, 42, 67, 0.03)',
        'float': '0 20px 40px -10px rgba(16, 42, 67, 0.16)',
        'aqua': '0 8px 25px -4px rgba(0, 168, 150, 0.45)',
        'aqua-hover': '0 12px 30px -4px rgba(0, 168, 150, 0.65)',
      }
    },
  },
  plugins: [],
}
