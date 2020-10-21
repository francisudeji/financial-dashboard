const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.{js}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        'product-sans': ['Product Sans', ...defaultTheme.fontFamily.sans],
        'circular-std': ['Circular Std', ...defaultTheme.fontFamily.sans],
        system: defaultTheme.fontFamily.sans,
      },
      colors: {
        white: '#FFFFFF',
        'light-blue': '#046AF3',
        'dark-blue': '#07074D',
        green: '#01D066',
        'light-gray': '#ECECEC',
        'medium-gray': '#79828E',
        'dark-gray': '#303956',
        red: '#FD3758',
        purple: '#02C39A',
      },
      spacing: {
        '240px': '240px',
        '14-73px': '14.73px',
        '34-17px': '34.17px',
        '40-33px': '40.33px',
        '41-82px': '41.82px',
        '68-16px': '68.16px',
        '2px': '2px',
        7: '1.75rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        80: '20rem',
        128: '32rem',
        '(screen-16)': 'calc(100vh - 4rem)',
      },
      opacity: {
        '015': '0.15',
      },
      borderRadius: {
        '8px': '8px',
      },
    },
  },
  variants: {},
};
