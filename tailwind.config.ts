import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "#0C111B",
        primary: "#FFFFFF",
        secondary: "#BFBFBF",
        accent: "#5D56AB",
        stroke: "#162138"
      },
      borderWidth: {
        '6': '6px',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite'
      }
    },
    plugins: [],
  }
}

export default config
