import 'element-plus/dist/index.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import ElementPlus from 'element-plus';
import * as ElementPlusIcons from '@element-plus/icons-vue';

const app = createApp(App);
app.use(router);

app.use(ElementPlus);
for (const [key, icon] of Object.entries(ElementPlusIcons)) {
    app.component(key, icon);
}

app.mount('#app');
