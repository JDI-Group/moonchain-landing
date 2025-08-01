import { heroui } from '@heroui/theme'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
        merriweather: ['var(--font-merriweather)'],
        barlow: ['var(--font-barlow)'],
        spacex: ['spacex'],
      },
      screens: {
        xs: { min: '0' },
        sm: { min: '576px' },
        md: { min: '768px' },
        lg: { min: '992px' },
        xl: { min: '1200px' },
        xxl: { min: '1600px' },
        xxxl: { min: '1920px' },
      },
      container: {
        screens: {
          xs: '100%',
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          xxl: '1320px',
          xxxl: '1400px',
        },
      },
      keyframes: {
        levitate: {
          '0%': {
            transform: 'translateY(0)',
          },
          '30%': {
            transform: 'translateY(-10px)',
          },
          '50%': {
            transform: 'translateY(4px)',
          },
          '70%': {
            transform: 'translateY(-15px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [heroui()],
}

export default config
