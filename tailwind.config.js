/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6ee7ff',
        secondary: '#7c3aed',
        dark: '#05070e',
        darker: '#0a0f1a',
        light: '#f8fbff',
        metal: '#9aa9c7',
        metalDark: '#5f6b84',
        black: '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      animation: {
        glowPulse: 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { 
            textShadow: '0 0 10px rgba(110, 231, 255, 0.7)',
            filter: 'brightness(1)'
          },
          '50%': { 
            textShadow: '0 0 20px rgba(110, 231, 255, 0.95)',
            filter: 'brightness(1.3)'
          },
        },
      },
    },
  },
  plugins: [],
} 