import { boot } from 'quasar/wrappers';
import IconBase from '@components/icons/IconBase.vue';

export default boot(({ app }) => {
  app.component('IconBase', IconBase);
});
