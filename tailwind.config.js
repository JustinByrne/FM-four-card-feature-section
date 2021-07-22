module.exports = {
  mode: 'jit',
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppin: 'Poppins, sans-serif',
      },
      colors: {
        cyan: 'hsl(180, 62%, 55%)',
        orange: 'hsl(34, 97%, 64%)',
        blue: 'hsl(212, 86%, 64%)',
        red: 'hsl(0, 78%, 62%)',
        darkBlue: 'hsl(234, 12%, 34%)',
        grayBlue: 'hsl(229, 6%, 66%)',
        lightGray: 'hsl(0, 0%, 98%)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
