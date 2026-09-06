import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          200: '#A9AFC2',
          300: '#5B6277',
          500: '#1A1D28',
          600: '#14161D',
        },
        gradient: {
          pink: '#DE0BC94D',
          blue: '#1286F04D',
        },
        ink: '#150B1D',
        panel: '#241333',
        paper: '#F5F0F7',
        'grad-a': '#3B82F6',
        'grad-b': '#C026D3',
        accent: '#FF4D9D',
      },
      borderRadius: {
        panel: '2px',
      },
      fontFamily: {
        display: ['"Zen Kaku Gothic New"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        geomanist: ['Geomanist', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      fontSize: {
        sm: ['12px', '16px'],
        lt: ['13px', '16px'],
        md: ['16px', 'normal'],
        lg: ['18px', 'normal'],
        xl: ['20px', '30px'],
        '2xl': ['24px', 'normal'],
        '3xl': ['32px', 'normal'],
        '4xl': ['40px', 'normal'],
        '5xl': ['56px', 'normal'],
        '6xl': ['64px', 'normal'],
        '7xl': ['78px', '78px'],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.h1': {
          '@apply font-display sm:text-7xl text-5xl font-black tracking-[-0.02em]': {},
        },
        '.h2': {
          '@apply font-display sm:text-5xl text-4xl font-bold tracking-[-0.02em]': {},
        },
        '.h3': {
          '@apply font-display sm:text-4xl text-3xl font-bold tracking-[-0.02em]': {},
        },
        '.title1': {
          '@apply font-display sm:text-3xl text-2xl font-bold': {},
        },
        '.title2': {
          '@apply font-body sm:text-2xl text-xl font-medium': {},
        },
        '.txt-extra': {
          '@apply font-display sm:text-6xl text-3xl font-bold tracking-[-0.02em]': {},
        },
        '.caption1': {
          '@apply font-body sm:text-lg text-md font-normal': {},
        },
        '.caption2': {
          '@apply font-body sm:text-md text-lt font-normal': {},
        },
        '.body-large': {
          '@apply font-body sm:text-xl text-lg font-normal': {},
        },
        '.btn-caption': {
          '@apply font-display sm:text-lg text-md font-bold': {},
        },
        '.txt-input': {
          '@apply font-body sm:text-lg text-md font-normal': {},
        },
      });
    }),
  ],
};
