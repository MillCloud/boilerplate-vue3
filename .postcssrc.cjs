module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-preset-env': {
      browsers:
        'defaults and supports es6-module and supports es6-module-dynamic-import, not opera > 0, not samsung > 0, not and_qq > 0',
      stage: 3,
    },
  },
};
