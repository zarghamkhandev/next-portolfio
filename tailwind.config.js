module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        lightPurple: '#CFBBF8',
        darkPurple: '#7B5FCE',
      },
      fontFamily: {
        Avenir: ['Avenir', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
