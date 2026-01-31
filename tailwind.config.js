/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Olio Siciliano
        'granite': {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#e8e4dc',
          300: '#d4cdc0',
          400: '#b8ad9a',
          500: '#9d8e78',
          600: '#5C6B4A', // Primary - Verde oliva
          700: '#4a5639',
          800: '#3d472f',
          900: '#333b28',
          950: '#1A1A1A', // Nero
        },
        'farina': {
          50: '#FFFEF9',
          100: '#FBF8F0', // Background principale - crema caldo
          200: '#f5efe5',
          300: '#ebe0d0',
          400: '#dccbb3',
          500: '#c9b08e',
        },
        'forno': {
          400: '#C9A227', // Oro olio
          500: '#B8922B',
          600: '#9A7B24',
        },
        'oliva': {
          50: '#f4f6f0',
          100: '#e6eadc',
          200: '#cfd8bc',
          300: '#b0c094',
          400: '#8fa76e',
          500: '#6B8E4E', // Verde oliva medio
          600: '#5C6B4A', // Verde oliva scuro
          700: '#4a5639',
          800: '#3d4730',
          900: '#343c2a',
        },
        'terra': {
          400: '#B87333', // Terracotta
          500: '#A66528',
          600: '#8B5523',
        },
        'whatsapp': {
          500: '#25D366',
          600: '#1da851',
        },
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'Georgia', 'serif'],
        'body': ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        'accent': ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-warm': 'linear-gradient(135deg, #FBF8F0 0%, #f5efe5 50%, #ebe0d0 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1A1A1A 0%, #2d2520 50%, #3d332a 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'warm': '0 4px 20px -2px rgba(92, 107, 74, 0.15)',
        'warm-lg': '0 10px 40px -10px rgba(92, 107, 74, 0.25)',
        'inner-warm': 'inset 0 2px 10px rgba(92, 107, 74, 0.1)',
      },
      borderRadius: {
        'organic': '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
    },
  },
  plugins: [],
};
