import './lib/azan.scss'
import './index.scss'
import 'github-markdown-css/github-markdown.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import IconSvg from './components/IconSvg.vue'
import Markdown from './components/Markdown.vue'

const app = createApp(App)
app.component('IconSvg', IconSvg)
app.component('Markdown', Markdown)
app.use(router)
app.mount('#app')
