import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        amaryllis: {
          DEFAULT: '#C0396B',
          dark:    '#8B1A2A',
          light:   '#F5D0DC',
          muted:   '#E8A0B4',
          bg:      '#FFF8F9',
        },
      },
    },
  },
  plugins: [],
}

export default config
