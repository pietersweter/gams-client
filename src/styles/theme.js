const theme = {
  color: {
    accent: {
      primary: '#EDDD00',
      secondary: '#1B9AAA',
      error: '#AA1B2E',
    },
    text: {
      primary: '#FDFFFC',
      secondary: '#E9EAE8',
    },
    background: {
      base: '#191716',
      far: '#050505',
    },
    elements: {
      line: '#EDDD00',
      panel: '#050505',
      icon: {
        base: '#FDFFFC',
        active: '#EDDD00',
      },
    },
    palette: { // for reference
      platinum: '#E9EAE8',
      eerieBlack: '#191716',
      richBlack: '#050505',
      titaniumYellow: '#EDDD00',
      lightSeaGreen: '#1B9AAA',
      upsdellRed: '#AA1B2E',
    },
  },
  font: {
    family: {
      base: 'Rubik, sans-serif',
      special: 'Megrim, sans-serif',
    },
    size: {
      base: '16px',
      heading: {
        primary: '3rem',
        secondary: '2rem',
      },
      label: {
        primary: '1.125rem',
        secondary: '0.875rem',
      },
    },
    weight: {
      base: '300',
      bold: '500',
    },
    lineHeight: {
      label: '1.2',
      heading: '1.3',
      text: '1.8',
    },
  },
  size: {
    borderRadius: '6px',
    line: '4px',
    border: '2px',
    gap: '16px',
    padding: {
      small: '4px',
      normal: '10px',
      big: '30px',
    },
    screen: {
      wide: '100vw',
      narrow: '1200px',
    },
  },
  visuals: {
    shadow: {
      close: '0 3px 5px 0 rgba(0, 0, 0, 0.2)',
      far: '3px 6px 15px 0 rgba(0, 0, 0, 0.1)',
    },
    transition: {
      quick: '0.2s cubic-bezier(.57,.17,.32,.92)',
      base: '0.4s cubic-bezier(.57,.17,.32,.92)',
      slow: '1s cubic-bezier(.57,.17,.32,.92)',
    },
    perspective: {
      far: '2000px',
    },
    zindex: {
      front: 100,
    },
  },
};

export default theme;
