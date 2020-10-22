const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    preserveHtmlElements: false,
    content: ['./src/**/*.js'],
    mode: 'all',
    layers: ['base', 'components', 'utilities'],
  },
  theme: {
    colors: {
      white: '#FFFFFF',
      'light-blue': '#046AF3',
      'dark-blue': '#07074D',
      green: '#01D066',
      'light-gray': '#ECECEC',
      'medium-gray': '#79828E',
      'medium-gray-2': '#C4C4C4',
      'dark-gray': '#303956',
      'current-gray': '#4B5057',
      red: '#FD3758',
      purple: '#02C39A',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        'product-sans': ['Product Sans', ...defaultTheme.fontFamily.sans],
        'product-sans-bold': [
          'Product Sans Bold',
          ...defaultTheme.fontFamily.sans,
        ],
        'circular-std': ['Circular Std', ...defaultTheme.fontFamily.sans],
        system: defaultTheme.fontFamily.sans,
      },
      spacing: {
        '18-24px': '18.24px',
        '4-84px': '4.84px',
        '240px': '240px',
        '14-73px': '14.73px',
        '22-58px': '22.58px',
        '22-53px': '22.53px',
        '28-53px': '28.53px',
        '34-17px': '34.17px',
        '40-33px': '40.33px',
        '41-82px': '41.82px',
        '68-16px': '68.16px',
        '47-47px': '47.47px',
        '47-77px': '47.77px',
        '21-53px': '21.53px',
        '16-73px': '16.73px',
        '12-24px': '12.24px',
        '12-42px': '12.42px',
        '14-98px': '14.98px',
        '31-36px': '31.36px',
        '28-96px': '28.96px',
        '60-62px': '60.62px',
        '27-18px': '27.18px',
        '24px': '24px',
        '20px': '20px',
        '6px': '6px',
      },
      fontSize: {
        '9px': '9px',
        '19px': '19px',
        '11px': '11px',
      },
      gridTemplateColumns: {
        '1x2x1': '25% 50% 25%',
      },
      gridTemplateRows: {
        '60x40': '60% 40%',
        '75x25': '75% 25%',
        7: 'repeat(7, minmax(0, 1fr))',
      },
      opacity: {
        0.1: '0.1',
        '015': '0.15',
      },
      borderRadius: {
        '6px': '6px',
        '8px': '8px',
        '31px': '31px',
      },
      height: {
        '25%': '25%',
        '50%': '50%',
      },
    },
  },
  variants: {},
};
