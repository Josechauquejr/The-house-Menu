/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Outfit', 'system-ui', 'sans-serif'] },
      colors: { brand: '#FF0000' },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{ sabores: {
      'color-scheme': 'dark',
      primary: '#FF0000',
      'primary-content': '#FFFFFF',
      secondary: '#F4B942',
      accent: '#F4B942',
      neutral: '#191919',
      'base-100': '#090909',
      'base-content': '#FFFFFF',
    } }],
  },
};
