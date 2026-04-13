/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: { DEFAULT: '#ff6b00', light: '#ff8c33', dark: '#cc5500' },
        teal: { DEFAULT: '#00d4aa', light: '#33debb', dark: '#00a888' },
        surface: { DEFAULT: '#111111', card: '#161616' },
        border: { DEFAULT: '#222222' },
        txt: { DEFAULT: '#f0f0f0', muted: '#777777' },
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)',
        orange: '0 0 24px rgba(255,107,0,0.25)',
        teal: '0 0 24px rgba(0,212,170,0.2)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-medium': 'floatMedium 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(20px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-15px, 20px) scale(0.97)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-25px, -20px) scale(1.08)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
