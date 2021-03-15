# 开始使用
请先[安装](#/doc/install)本组件库。

安装组件后需要在main.ts中引入
```javascript
import 'azan-ui/package/lib/azan.css'
```

然后在你的代码中写入下面的代码
```javascript
import {Button, Tabs, Switch, Dialog} from "azan-ui"
```

就可以使用啦。

## 如使用vite，请使用vite2.0
## Vue 单文件组件

代码示例：

```html
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "azan-ui"
export default {
  components: {Button}
}
</script>
```
