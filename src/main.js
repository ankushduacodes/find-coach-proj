// TODO Look into if to use this library or not later
// import 'mdb-vue-ui-kit/css/mdb.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
app.use(store);
app.use(router);
router.isReady().then(() => app.mount('#app'));
