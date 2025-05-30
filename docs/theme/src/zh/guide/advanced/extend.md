---
title: 主题继承
icon: clone
order: -1
category:
  - 高级
tag:
  - 高级
  - 自定义
---

`vuepress-theme-hope` 和默认主题一样，同样支持继承。

你可以根据自己的需求在 `vuepress-theme-hope` 的基础上二次创作自己的主题并本地使用或发布它。

<!-- more -->

## 如何继承 Hope 主题

你需要为自己的主题创建一个入口文件，并从 `vuepress-theme-hope` 中导入 `hopeTheme`。

在你的入口文件中，设置 `extends: hopeTheme(options)` 声明继承 `vuepress-theme-hope` 主题。

你自己新创建的主题的同名别名 (`alias`) 和 同名布局 (`layouts`) 的优先级高于被继承主题 `vuepress-theme-hope`，这意味着你可以通过主题 API 的 `alias` 选项覆盖 `vuepress-theme-hope` 主题的组件，也可以通过 [客户端配置文件](../../cookbook/vuepress/config.md#客户端配置文件) 的同名布局覆盖 `vuepress-theme-hope` 主题的布局。

::: code-tabs#language

@tab TS

```ts twoslash title=".vuepress/theme/index.ts"
import { getDirname, path } from "vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";
import type { ThemeOptions } from "vuepress-theme-hope";

const __dirname = getDirname(import.meta.url);

export default (options: ThemeOptions) => ({
  name: "vuepress-theme-local",

  extends: hopeTheme(options, { custom: true }),

  alias: {
    // 你可以在这里覆盖或新增别名
    // 比如这里我们将 vuepress-theme-hope 主页组件改为自己主题下的 components/HomePage.vue
    "@theme-hope/components/home/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue",
    ),
  },
});
```

@tab JS

```js title=".vuepress/theme/index.js"
import { getDirname, path } from "vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";

const __dirname = getDirname(import.meta.url);

export default (options) => ({
  name: "vuepress-theme-local",

  extends: hopeTheme(options, { custom: true }),

  alias: {
    // 你可以在这里覆盖或新增别名
    // 比如这里我们将 vuepress-theme-hope 主页组件改为自己主题下的 components/HomePage.vue
    "@theme-hope/components/home/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue",
    ),
  },
});
```

:::

你也可以通过主题客户端文件的 `layouts` 覆盖或新增 `vuepress-theme-hope` 提供的布局。

<!-- @include: ../customize/slots.md#layout -->

详情见 [使用插槽自定义布局](../customize/slots.md)。
