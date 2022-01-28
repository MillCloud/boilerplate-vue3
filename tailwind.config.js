const { defineConfig } = require('windicss/helpers');
const aspectRatioPlugin = require('windicss/plugin/aspect-ratio');
const formsPlugin = require('windicss/plugin/forms');
const filtersPlugin = require('windicss/plugin/filters');
const lineClampPlugin = require('windicss/plugin/line-clamp');
const scrollSnapPlugin = require('windicss/plugin/scroll-snap');
const typographyPlugin = require('windicss/plugin/typography');

module.exports = defineConfig({
  // tailwindcss
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // windicss
  extract: {
    include: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  // tailwindcss & windicss
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
  // tailwindcss & windicss
  plugins: [
    aspectRatioPlugin,
    formsPlugin,
    filtersPlugin,
    lineClampPlugin,
    scrollSnapPlugin,
    typographyPlugin(),
  ],
  // windicss
  preflight: false,
  // tailwindcss
  corePlugins: {
    preflight: false,
  },
});
