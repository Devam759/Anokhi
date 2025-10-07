/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
          // Authentic Heritage Palette - Beige, Brown, Cream
          beige: {
            50: '#fdfcf8',
            100: '#faf8f0',
            200: '#f5f0e1',
            300: '#ede4c7',
            400: '#e1d4a3',
            500: '#d4c17a',
            600: '#c4a85a',
            700: '#a8894a',
            800: '#8a6f3f',
            900: '#6d5635',
            950: '#3d2f1a',
          },
          brown: {
            50: '#faf7f4',
            100: '#f3ede7',
            200: '#e6d9ce',
            300: '#d4c0b0',
            400: '#bfa08c',
            500: '#a8826b',
            600: '#936b52',
            700: '#785746',
            800: '#62473c',
            900: '#4f3a32',
            950: '#2a1f1a',
          },
          cream: {
            50: '#fefdf9',
            100: '#fdf9f0',
            200: '#faf1d9',
            300: '#f6e6b8',
            400: '#f0d490',
            500: '#e8be68',
            600: '#d9a448',
            700: '#b8873a',
            800: '#946c32',
            900: '#77572b',
            950: '#432f16',
          },
          heritage: {
            50: '#faf8f5',
            100: '#f3f0e8',
            200: '#e6dfd1',
            300: '#d4c9b4',
            400: '#c0b096',
            500: '#b09b7a',
            600: '#9c8565',
            700: '#816d52',
            800: '#6a5844',
            900: '#574939',
            950: '#2f261e',
          },
          // Traditional Indian Heritage Colors
          maroon: {
            50: '#fdf2f2',
            100: '#fce7e7',
            200: '#f9d2d2',
            300: '#f4b0b0',
            400: '#ec8080',
            500: '#e55a5a',
            600: '#d13a3a',
            700: '#b02d2d',
            800: '#8B4513', // Primary maroon
            900: '#7a2e2e',
            950: '#421717',
          },
          gold: {
            50: '#fffdf2',
            100: '#fffce7',
            200: '#fff7d2',
            300: '#ffefb0',
            400: '#ffe280',
            500: '#ffd55a',
            600: '#B8860B', // Primary gold
            700: '#b8860b',
            800: '#9a6f08',
            900: '#7d5a06',
            950: '#432f03',
          }
        },
      fontFamily: {
        heritage: ['Cinzel', 'serif'],
        traditional: ['Libre Baskerville', 'serif'],
        sans: ['Noto Sans Devanagari', 'sans-serif'],
        decorative: ['Cinzel', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'hover-lift': 'hoverLift 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        hoverLift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}

