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
          pine: '#0D281E',
          'pine-dark': '#081B14',
          'pine-light': '#163E30',
          alabaster: '#F7FAF8',
          sage: '#EEF4F1',
          'sage-border': '#D6E2DC',
          brass: '#C28E3A',
          'brass-dark': '#A8762B',
          'brass-light': '#D9A95C',
          charcoal: '#0A1A14',
          mineral: '#556961',
          white: '#FFFFFF',
          // backward compat aliases
          ivory: '#F7FAF8',
          navy: '#0D281E',
          'navy-muted': '#365347',
          slate: '#556961',
          gold: '#C28E3A',
          'gold-dark': '#A8762B',
          'gold-light': '#D9A95C',
          beige: '#D6E2DC',
          terracotta: '#C28E3A',
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
