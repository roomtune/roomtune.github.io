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
        primary: '#00a8ff', // Brighter, more vibrant blue
        secondary: '#0097e6', // Slightly darker blue for contrast
        dark: '#1e272e', // Slightly lighter dark background
        darker: '#151b20', // Slightly lighter darker background
        light: '#ffffff', // Pure white for better contrast
        metal: '#a4b0be', // Lighter metallic color
        metalDark: '#57606f', // Lighter metal accent
        black: '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out forwards',
        fadeInDelayed: 'fadeIn 1.5s ease-in-out 0.8s forwards',
        glowPulse: 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { 
            textShadow: '0 0 10px rgba(0, 168, 255, 0.8)',
            filter: 'brightness(1)'
          },
          '50%': { 
            textShadow: '0 0 20px rgba(0, 168, 255, 1)',
            filter: 'brightness(1.3)'
          },
        },
      },
    },
  },
  plugins: [],
} 