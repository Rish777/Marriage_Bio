/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#FFFBF5',
          secondary: '#F7EFE5',
          accent: '#E3D5CA'
        },
        primary: {
          50: '#FAF3E0',
          100: '#F5E6BE',
          200: '#ECD08C',
          300: '#E4BA5A',
          400: '#DCA428',
          500: '#B8860B', // Dark Goldenrod
          600: '#946B09',
          700: '#705107',
          800: '#4C3705',
          900: '#281D02'
        },
        accent: {
          50: '#FDF2F2',
          100: '#FCE7E7',
          200: '#F9CFCF',
          300: '#F6B7B7',
          400: '#F39F9F',
          500: '#F08787', // Rose
          600: '#EC6F6F',
          700: '#E95757',
          800: '#E63F3F',
          900: '#E32727'
        },
        success: {
          500: '#10B981',
          600: '#059669'
        },
        warning: {
          500: '#F59E0B',
          600: '#D97706'
        },
        error: {
          500: '#EF4444',
          600: '#DC2626'
        },
        text: {
          primary: '#2D2327',
          secondary: '#6B5E62',
          muted: '#948B8E'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
};