import { defineConfig } from 'windicss/helpers';
import aspectRatioPlugin from 'windicss/plugin/aspect-ratio';
import formsPlugin from 'windicss/plugin/forms';
import filtersPlugin from 'windicss/plugin/filters';
import lineClampPlugin from 'windicss/plugin/line-clamp';
import scrollSnapPlugin from 'windicss/plugin/scroll-snap';
import typographyPlugin from 'windicss/plugin/typography';

export default defineConfig({
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
