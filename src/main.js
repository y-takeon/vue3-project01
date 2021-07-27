import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import language from './language'
const app = createApp(App);

// 如果要使用.scss样式文件，则需要引入base.scss文件
import 'element-plus/packages/theme-chalk/src/base.scss'
import { installElement } from './plugins/element.js' // 按需引入element
installElement(app)
// 国际化
language(app)

import '@/styles/index.scss'  // global css

app.use(store).use(router).mount('#app')
