/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ms: {
          blue: '#0078D4',
          'blue-dark': '#005A9E',
          'blue-light': '#2B88D8',
          cobalt: '#104E92',
          navy: '#0F172A',
          teal: '#008272',
          terracotta: '#C87549',
          amber: '#FFB900',
          charcoal: '#1E293B',
          surface: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
        },
        lama: {
          ivory: '#F5F1E8',
          white: '#FFFFFF',
          navy: '#14243A',
          'navy-muted': '#526B8C',
          slate: '#626B78',
          gold: '#C5A46D',
          'gold-dark': '#B08E55',
          'gold-light': '#D6BC8C',
          beige: '#E5DFD3',
          terracotta: '#C87549',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"Inter"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'ms-card': '0 2px 8px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.12)',
        'ms-elevated': '0 12px 32px -4px rgba(0, 120, 212, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06)',
        'ms-glow': '0 0 30px rgba(0, 120, 212, 0.25)',
      }
    },
  },
  plugins: [],
}
