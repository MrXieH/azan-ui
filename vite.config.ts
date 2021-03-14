import { md } from './plugins/md'
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'

export default {
  base: './',
  assetsDir: 'assets',
  plugins: [md()],
  vueCustomBlockTransforms: {
    tips: (options) => {
      const { path } = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find(n => n.tag === 'tips')
      const source = parsed.loc.source.replace(/<tips>/gi,'').replace(/<\/tips>/gi, '')
      // const tips = parsed.children[0].content
      return `export default function (Component) { 
        Component.__tips = ${JSON.stringify(source)}
      }`.trim()
    },
    demo: (options) => {
      const { code, path } = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find(n => n.tag === 'demo')
      const title = parsed.children[0].content
      const main = file.split(parsed.loc.source).join('').trim()
      // 删除所有tips标签, tips标签为文档专用
      const mainString = JSON.stringify(main).replace(/<tips>[\s\S]*<\/tips>/gi, '')
      return `export default function (Component) { 
        Component.__sourceCode = ${mainString}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim()
    }
  }
}
