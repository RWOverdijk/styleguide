// @flow
/** colors */
const colors = {
  charcoalGray: '#333d47',
  shuttleGray: '#50606f',
  warmGray: '#717171',
  silver: '#c1c1c1',
  gallery: '#ececec',
  bermudaGray: '#778ea6',
  alabaster: '#fcfcfc',
  red: '#d0021b',
  green: '#6fd300',
  white: '#ffffff',
  black: '#000000',

  // specify rgba value instead of the word 'transparent' because of ie.
  transparent: 'rgba(255, 255, 255, 0)',
};

// bootstrap grid
const gridTheme = {
  breakpoints: {
    giant: 1200,
    xl: 1200,

    desktop: 992,
    lg: 992,

    tablet: 768,
    md: 768,

    phone: 576,
    sm: 576,

    smaller: 575,
    xs: 575,
  },
  row: {
    padding: 20,
  },
  col: {
    padding: 20,
  },
  container: {
    padding: 20,
  },
};

export { colors, gridTheme };
