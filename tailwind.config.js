/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        surface: {
          50: '#080910',
          100: '#0B0D14',
          200: '#131624',
          300: '#1A1E2C',
        },
        ink: {
          50: '#10121C',
          100: '#161923',
          200: '#23283A',
          300: '#39405A',
          400: '#6A718A',
          500: '#8B93AC',
          600: '#AFB6CC',
          700: '#CCD2E2',
          800: '#E2E6F0',
          900: '#F4F5FA',
        },
        accent: {
          indigo: '#6366F1',
          violet: '#8B5CF6',
          amber: '#F59E0B',
          magenta: '#E11D74',
          cyan: '#22D3EE',
          green: '#10B981',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 2px 16px -4px rgba(0,0,0,0.55), 0 8px 24px -6px rgba(0,0,0,0.35)',
        'soft-md': '0 6px 28px -6px rgba(0,0,0,0.6), 0 14px 40px -8px rgba(0,0,0,0.4)',
        'soft-lg': '0 16px 50px -12px rgba(0,0,0,0.7), 0 30px 60px -10px rgba(0,0,0,0.45)',
        glow: '0 0 30px -6px rgba(124,58,237,0.45)',
        'glow-indigo': '0 0 35px -6px rgba(99,102,241,0.5)',
        'glow-cyan': '0 0 30px -6px rgba(34,211,238,0.4)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out 1s infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        fade: 'fade-up 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}