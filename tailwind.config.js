// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // Tambahkan ini
  theme: {
    extend: {
      fontFamily: {
        seasons: ['"The Seasons"', 'serif'],
        hoves: ['"TT Hoves"', 'sans-serif'],
      }, 
      keyframes: {
        typewriter: {
          '0%': { width: '0' },
          '50%': { width: '100%' },
          '100%': { width: '100%' } // tahan teks tetap tampil
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#fff' }
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        typewriter: 'typewriter 7s steps(30, end) infinite',
        blink: 'blink 0.7s step-end infinite', 
        fadeIn: 'fadeIn 0.8s ease-out both',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
  safelist: [
    'before:content-[""]',
    'before:absolute',
    'before:top-2',
    'before:left-[-10px]',
    'before:border-[10px]',
    'before:border-transparent',
    'before:border-r-blue-500',
    'animate-fadeIn',
  ],
};
