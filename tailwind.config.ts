/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xss': '320px',
        'xs': '375px',
        'sm': '425px',
        'md': '768px', // default Tailwind
        'lg': '1024px', // default Tailwind
        'xl': '1280px', // default Tailwind
        '2xl': '1536px', // default Tailwind
        '3xl': '1680px',
        '4xl': '2200px',
    },
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
          60:  '#8bc53e',
          70: '#48c580',
          80: '#4ac39f',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
          40: '#444444'
        },
        orange: {
          50: '#FF814C',
          80: '#dd6d37',
        },
        blue: {
          70: '#021639',
          80: '#012b60',
          90: '#132c60',
        },
        yellow: {
          50: '#FEC601',
          80: '#fea334',
          70: '#fea533',
        },
        red: {
          80: '#b73636',
          90: '#b53636',
          70: '#b93636',
        },
        white: {
          10: '#f6f4f3',
          20: '#ffffff'

        }

      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      fontFamily: {
        boogaloo: ['"Boogaloo"', 'sans-serif'],
        microsport: ['"Microsport"', 'sans-serif'],
        mont: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};