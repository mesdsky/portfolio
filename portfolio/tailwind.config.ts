import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#faf8f5',
          100: '#f5f1eb',
          200: '#e8dfd5',
          300: '#d9ccc0',
          400: '#c9b3a0',
          500: '#b4956d',
          600: '#9d7f57',
          700: '#866a46',
          800: '#6f5537',
          900: '#2d2520',
          950: '#1a1512',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
}

export default config
