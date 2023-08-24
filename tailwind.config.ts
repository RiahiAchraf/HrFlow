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
    },
  },
  plugins: [],
};
export default config;
