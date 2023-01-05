import { createStore } from 'vuex';
// Modules
import postModule from '@/store/modules/post';

export default createStore({
  modules: { post: postModule },
});
