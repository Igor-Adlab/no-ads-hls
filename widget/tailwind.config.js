const {tailwindTransform} = require('postcss-lit');

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      }
    }
  },
  content: {
    files: ['./src/**/*.{js,ts}'],
    transform: {
      ts: tailwindTransform
    }
  }
};
