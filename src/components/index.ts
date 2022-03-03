import type { Plugin } from 'vue';
import { Icon } from '@iconify/vue';

const Components: Plugin = {
  install: (app) => {
    app.component('VIcon', Icon);
  },
};

export default Components;
