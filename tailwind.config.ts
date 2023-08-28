import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        zinc: {
          // DEFAULT: '',
          z1: '#f4f4f5',
          z2: '#e4e4e7',
          z3: '#d4d4d8',
          z4: '#a1a1aa',
          z5: '#71717a',
          z6: '#52525b',
          z7: '#3f3f46',
          z8: '#27272a',
          z9: '#18181b',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;
