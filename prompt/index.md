```

```

这是`React`的`origin`组件库，`origin`是基于shadcn实现的组件库及其生态扩展。

我希望你能将此代码进行翻译，实现Vue3的版本，基于shadcn-vue实现。你要实现两份代码，一份是`default`主题的，一份是`new-york`主题的。

## 注意事项

1. 组件导入地址为

```
import { Xxx } from '@/lib/registry/default/ui/Xxx'
```

1.1 且基础组件的导入顺序优先级最高，它应该第一个导入，例如

```
import { Button } from '@/lib/registry/default/ui/button'
import { ref } from 'vue'
```

2. 图标库使用`lucide-vue-next`

```
import { YyyIcon } from 'lucide-vue-next'
```

3. 生成的代码路径为

举例：

```
apps/www/src/lib/registry/default/example/ButtonDisableDemo.vue
apps/www/src/lib/registry/new-york/example/ButtonDisableDemo.vue
```

你要生成的路径为，Xxx为组件名：

```
apps/www/src/lib/registry/default/example/XxxDemo.vue
apps/www/src/lib/registry/new-york/example/XxxDemo.vue
```

4. Vue代码规范

使用`setup`语法糖，和`ts`语法，script要在template之前，代码示例:

```
<script setup lang="ts">

</script>

<template>

</template>
```

5. 组件的点击事件等函数，不要使用const handleClick = ()=>{} 要用function handleClick() 这种风格

6.有组件需要使用头像时，去/avatars/01.png这个路径下找图片，直接赋值给img，不要用import导入图片，一共有四张01-04

7. img标签不是闭合标签，不要写成<img />
