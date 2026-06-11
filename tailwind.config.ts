import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          DEFAULT: '#2563eb',
        },
        surface: {
          900: '#0a0f1e',
          800: '#0f172a',
          700: '#1e293b',
          600: '#334155',
          500: '#475569',
        },
        neutral: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight:   '-0.015em',
      },
      lineHeight: {
        tight: '1.12',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-in':     'fadeIn 0.6s ease-out forwards',
        'slide-up':    'slideUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-right': 'slideRight 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-left':  'slideLeft 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'scale-in':    'scaleIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'pulse-slow':  'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':       'float 6s ease-in-out infinite',
        'shimmer':     'shimmer 2.5s linear infinite',
        'ping-slow':   'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ywa-ping':    'ywaPing 1.8s ease-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        ywaPing: {
          '0%':   { transform: 'scale(1)', opacity: '0.9' },
          '70%':  { transform: 'scale(2.4)', opacity: '0' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow':       'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.35), transparent 70%)',
        'glow-conic':      'conic-gradient(from 180deg at 50% 50%, #2563eb, #0a0f1e, #2563eb)',
        'card-shine':      'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)',
      },
      boxShadow: {
        'glow-blue':      '0 0 40px -8px rgba(37,99,235,0.55)',
        'glow-blue-lg':   '0 0 80px -12px rgba(37,99,235,0.4)',
        'glow-blue-sm':   '0 0 20px -4px rgba(37,99,235,0.4)',
        'card':           '0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)',
        'card-hover':     '0 16px 48px -8px rgba(0,0,0,0.6), 0 0 60px -20px rgba(37,99,235,0.15)',
        'inner-glow':     'inset 0 1px 0 rgba(255,255,255,0.06)',
        'premium':        '0 0 0 1px rgba(255,255,255,0.04), 0 20px 60px -12px rgba(0,0,0,0.7)',
      },
      borderColor: {
        'glow': 'rgba(37,99,235,0.4)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
