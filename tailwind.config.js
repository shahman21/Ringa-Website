/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blueprint: { DEFAULT: '#1d4ed8', light: '#3b82f6', dark: '#1e40af', deep: '#172554', tint: '#eff6ff', wash: '#dbeafe' },
        ink:    { DEFAULT: '#0f172a', soft: '#1f2937', muted: '#525252', faint: '#737373' },
        line:   { DEFAULT: '#e5e7eb', soft: '#eef2f7' },
        bg:     { DEFAULT: '#ffffff', tint: '#f8fafc', dark: '#0a0a0a' },
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
        btn: '10px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)',
        'card-hover': '0 2px 4px rgba(15,23,42,0.06), 0 18px 40px rgba(15,23,42,0.10)',
        blueprint: '0 12px 32px rgba(29,78,216,0.28)',
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
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
