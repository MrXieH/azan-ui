import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'

import Intro from './views/Intro.vue'
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'
import { h } from 'vue'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'

// 不传入key组件可能不更新
const md = content => h(Markdown, { content: content, key: content })

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Doc,
            redirect: '/doc/intro',
            children: [
                { path: 'intro', component: md(intro) },
                { path: 'get-started', component: md(getStarted) },
                { path: 'install', component: md(install) },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo }
            ]
        }
    ]
})

export default router