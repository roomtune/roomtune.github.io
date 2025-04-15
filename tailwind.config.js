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
        primary: '#72b8dc', // Bright blue accent from the HI-FI text glow and waveform
        secondary: '#86c4e4', // Lighter variation of the accent blue
        dark: '#0f151e', // Dark navy background
        darker: '#081018', // Even darker version for contrast
        light: '#F8F8F8',  
        metal: '#8c9cb0', // Metallic silver/gray from the speaker rim and volume knob
        metalDark: '#414a57', // Darker metal accent
        black: '#000000', // Pure black for speaker elements
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
            textShadow: '0 0 8px rgba(114, 184, 220, 0.7)',
            filter: 'brightness(1)'
          },
          '50%': { 
            textShadow: '0 0 15px rgba(114, 184, 220, 0.9)',
            filter: 'brightness(1.2)'
          },
        },
      },
    },
  },
  plugins: [],
} 