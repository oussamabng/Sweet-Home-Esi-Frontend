// tailwind.config.js
module.exports = {
  // Added safelist
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: ['hover:text-blue-charcoal', 'hover:text-denim', 'hover:text-spring-green', 'hover:text-flamingo'],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        purple:'#554269',
        grey:'#C0C0C0',
        'purple-dark':'#554269',
        'white-light':'#fefefe',
        green:'#4caf50',
        red: '#f44336',
        blue: '#3bade3',
        pink:'#ff357f;',
        'purple-light':'#576fe6;',
      },
    },
    textColor: (theme) => ({
      ...theme('colors'),
      purple:'#554269',
      grey:'#C0C0C0',
      blue: '#3bade3',
      'white-light':'#fefefe',
      green:'#4caf50',
      red: '#f44336',
      pink:'#ff357f;',
      'purple-light':'#576fe6;',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};