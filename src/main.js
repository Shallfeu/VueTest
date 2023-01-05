import { createApp } from 'vue';
// Components
import App from '@/App.vue';
// Utils
import router from '@/router';
import store from '@/store';
import components from '@/components/UI';
import directives from '@/directives';

const app = createApp(App);

components.forEach((component) => app.component(component.name, component));

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(store).use(router);

app.mount('#app');
