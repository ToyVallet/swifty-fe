import type { Config } from 'tailwindcss';

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-header':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.9) 8.5%, rgba(0, 0, 0, 0) 100%)',
        'gradient-hero-carousel':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 25%, #001235 100%)',
      },
      colors: {
        primary: '#0073E5',
        secondary: '#DD2DE7',
        ternary: '#00E7E7',
        // primary: '#C892EA',
        // primary: '#0262E9',
        gray: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A2A2A8',
          500: '#6E6E76',
          600: '#52525A',
          700: '#3F3F45',
          800: '#2E2E33',
          900: '#1D1D20',
        },
        bgBlack: '#000206',
      },
      fontFamily: {
        Pretendard: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar-hide')],
} satisfies Config;

export default config;
