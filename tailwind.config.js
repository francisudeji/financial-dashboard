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
      'dark-gray': '#303956',
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
        'circular-std': ['Circular Std', ...defaultTheme.fontFamily.sans],
        system: defaultTheme.fontFamily.sans,
      },
      spacing: {
        '240px': '240px',
        '14-73px': '14.73px',
        '34-17px': '34.17px',
        '40-33px': '40.33px',
        '41-82px': '41.82px',
        '68-16px': '68.16px',
        '47-47px': '47.47px',
        '47-77px': '47.77px',
        '21-53px': '21.53px',
        '16-73px': '16.73px',
        '12-24px': '12.24px',
        '14-98px': '14.98px',
        '2px': '2px',
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
