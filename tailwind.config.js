/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020A17',
          900: '#061A35',
          800: '#0A254A',
          700: '#0F3262',
          600: '#174785',
          500: '#2563EB',
          100: '#E6EDF7',
          50: '#F0F4FA',
        },
        blush: {
          50: '#FFF7F8',
          100: '#FDECEF',
          200: '#F9E0E5',
          300: '#F3C5CE',
          400: '#E8A3B2',
          500: '#D97A8F',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E4EDE5',
          200: '#CBDBCB',
          500: '#8BA88E',
          600: '#739477',
          700: '#5A7A5D',
        },
        gold: {
          50: '#FBF9F4',
          100: '#F5EFE3',
          400: '#C7AC7B',
          500: '#B59765',
          600: '#9C7F4E',
          700: '#816639',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 25px -4px rgba(6, 26, 53, 0.07)',
        'card': '0 10px 30px -5px rgba(6, 26, 53, 0.08), 0 4px 6px -2px rgba(6, 26, 53, 0.04)',
        'float': '0 20px 40px -10px rgba(6, 26, 53, 0.15)',
        'gold': '0 10px 25px -5px rgba(181, 151, 101, 0.3)',
      }
    },
  },
  plugins: [],
}
