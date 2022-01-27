const { defineConfig } = require('windicss/helpers');
const aspectRatioPlugin = require('windicss/plugin/aspect-ratio');
const formsPlugin = require('windicss/plugin/forms');
const filtersPlugin = require('windicss/plugin/filters');
const lineClampPlugin = require('windicss/plugin/line-clamp');
const scrollSnapPlugin = require('windicss/plugin/scroll-snap');
const typographyPlugin = require('windicss/plugin/typography');

module.exports = defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1600px',
        xxl: '1600px',
      },
    },
  },
  plugins: [
    aspectRatioPlugin,
    formsPlugin,
    filtersPlugin,
    lineClampPlugin,
    scrollSnapPlugin,
    typographyPlugin(),
  ],
  corePlugins: {
    preflight: false,
  },
});
