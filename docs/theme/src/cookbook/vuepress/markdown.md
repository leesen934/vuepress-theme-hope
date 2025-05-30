---
title: Builtin Markdown features
icon: b:markdown
order: 2
category:
  - Cookbook
  - VuePress
tag:
  - Markdown
  - VuePress
---

Here are some enhance VuePress makes on Markdown syntax.

## Syntax Extensions

The Markdown content in VuePress will be parsed by [markdown-it](https://github.com/markdown-it/markdown-it), which supports [syntax extensions](https://github.com/markdown-it/markdown-it#syntax-extensions) via markdown-it plugins.

This section will introduce built-in Markdown syntax extensions of VuePress.

You can also configure those built-in extensions, load more markdown-it plugins and implement your own extensions via [markdown](https://vuejs.press/reference/config.md#markdown) option and [extendsMarkdown](https://vuejs.press/reference/plugin-api.html#extendsmarkdown) option.

### Embedded

Embedded by markdown-it:

- [Tables](https://help.github.com/articles/organizing-information-with-tables/) (GFM)
- [Strikethrough](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text) (GFM)

### Header Anchors

You might have noticed that, a `#` anchor is displayed when you hover the mouse on the headers of each section. By clicking the `#` anchor, you can jump to the section directly.

::: tip
This header anchors extension is supported by [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor).

Config reference: [markdown.anchor](https://vuejs.press/reference/config.html#markdown-anchor)
:::

### Links

When using Markdown [link syntax](https://spec.commonmark.org/0.29/#link-reference-definitions), VuePress will implement some conversions for you.

Take our documentation source files as an example:

```
└─ src
   ├─ cookbook
   │  └─ vuepress
   │     ├─ markdown.md <- Here we are
   │     └─ README.md
   ├─ guide
   │  └─ README.md
   ├─ contribution.md
   └─ README.md
```

Raw Markdown:

```md
<!-- relative path -->

[Home](../../README.md)
[Contribution Guide](../../contribution.md)
[VuePress Config](./config.md)

<!-- absolute path -->

[Guide](/guide/README.md)
[Config > I18n](/config/i18n.md)

<!-- URL -->

[GitHub](https://github.com)
```

Converted to:

```vue
<template>
  <RouterLink to="/v2/">Home</RouterLink>
  <RouterLink to="/v2/contribution.html">Contribution Guide</RouterLink>
  <RouterLink to="/v2/cookbook/vuepress/config.html"
    >VuePress Config</RouterLink
  >
  <RouterLink to="/v2/guide/">Guide</RouterLink>
  <RouterLink to="/v2/config/i18n.html">Config &gt; I18n</RouterLink>
  <a href="https://github.com" target="_blank" rel="noopener noreferrer"
    >GitHub</a
  >
</template>
```

Rendered as:

- [Home](../../README.md)
- [Contribution Guide](../../contribution.md)
- [VuePress Config](./config.md)
- [Guide](/guide/README.md)
- [Config > I18n](/config/i18n.md)
- [GitHub](https://github.com)

Explanation:

- Internal links will be converted to `<RouterLink>` for SPA navigation.
- Internal links to `.md` files will be converted to the [page route path](./page.md#routing), and both absolute path and relative path are supported.
- External links will get `target="_blank" rel="noopener noreferrer"` attrs.

Suggestion:

Try to use relative paths instead of absolute paths for internal links.

- Relative paths are valid links to the target files, and they can navigate correctly when browsing the source files in your editor or repository.
- Relative paths are consistent in different locales, so you don't need to change the locale path when translating your content.
- When using absolute paths, if the [base](https://vuejs.press/reference/config.html#base) of your site is not `"/"`, you will need to prepend the `base` manually or use [base helper](https://vuejs.press/guide/assets.html#base-helper).

::: tip
This links extension is supported by our built-in plugin.

Config reference: [markdown.links](https://vuejs.press/reference/config.html#markdown-links)
:::

### Emoji

You can add emoji to your Markdown content by typing `:EMOJICODE:`.

For a full list of available emoji and codes, check out [emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet).

Input:

```md
VuePress 2 is out :tada: !
```

Output:

VuePress 2 is out :tada: !

::: tip
This emoji extension is supported by [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji).

Config reference: [markdown.emoji](https://vuejs.press/reference/config.html#markdown-emoji)
:::

### Table of Contents

To put the table of contents (TOC) of your current page inside your Markdown content, you can use the `[[toc]]` syntax.

Input:

```md
[[toc]]
```

Output:

[[toc]]

The headers in TOC will link to the corresponding [header anchors](#header-anchors), so TOC won't work well if you disable header anchors.

::: tip
This toc extension is supported by our built-in plugin, which is forked and modified from [markdown-it-toc-done-right](https://github.com/nagaozen/markdown-it-toc-done-right).

Config reference: [markdown.toc](https://vuejs.press/reference/config.html#markdown-toc)
:::

### Code Blocks

Following code blocks extensions are implemented during markdown parsing in Node side. That means, the code blocks won't be processed in client side.

With [@vuepress/plugin-prismjs][prismjs] and [@vuepress/plugin-shiki][shiki], you can highlight code blocks with [Prism](https://prismjs.com/) or [Shiki](https://shiki.style/).

#### Code Title

You can specify the title of the code block by adding a `title` key-value mark in your fenced code blocks.

Input:

````md
```ts title=".vuepress/config.ts"
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  title: "Hello, VuePress",

  theme: defaultTheme({
    logo: "https://vuejs.org/images/logo.png",
  }),
});
```
````

Output:

```ts title=".vuepress/config.ts"
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  title: "Hello, VuePress",

  theme: defaultTheme({
    logo: "https://vuejs.org/images/logo.png",
  }),
});
```

::: tip

Code title is supported by highlight plugins by default. It can be used in combination with the other marks below. Please leave a space between them.

:::

#### Line Highlighting

You can highlight specified lines of your code blocks by adding line ranges mark in your fenced code blocks.

Input:

````md
```ts {1,7-9}
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  title: "Hello, VuePress",

  theme: defaultTheme({
    logo: "https://vuejs.org/images/logo.png",
  }),
});
```
````

Output:

```ts {1,7-9}
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  title: "Hello, VuePress",

  theme: defaultTheme({
    logo: "https://vuejs.org/images/logo.png",
  }),
});
```

Examples for line ranges mark:

- Line ranges: `{5-8}`
- Multiple single lines: `{4,7,9}`
- Combined: `{4,7-13,16,23-27,40}`

::: tip

Line highlighting extension is supported by highlighter plugins.

Config reference: [prism line highlighting](https://ecosystem.vuejs.press/plugins/markdown/prismjs.html#highlightlines) and [shiki highlighting](https://ecosystem.vuejs.press/plugins/markdown/shiki.html#highlightlines).

:::

#### Line Numbers

You must have noticed that the number of lines is displayed on the left side of code blocks.

You can add `:line-numbers` / `:no-line-numbers` mark in your fenced code blocks to override the value set in config.

Input:

````md
```ts
// line-numbers is enabled by default
const line2 = "This is line 2";
const line3 = "This is line 3";
```

```ts:no-line-numbers
// line-numbers is disabled
const line2 = "This is line 2";
const line3 = "This is line 3";
```
````

Output:

```ts
// line-numbers is enabled by default
const line2 = "This is line 2";
const line3 = "This is line 3";
```

```ts:no-line-numbers
// line-numbers is disabled
const line2 = "This is line 2";
const line3 = "This is line 3";
```

::: tip

Line numbers extension is supported by highlighter plugins.

Config reference: [prism line numbers](https://ecosystem.vuejs.press/plugins/markdown/prismjs.html#linenumbers) and [shiki line numbers](https://ecosystem.vuejs.press/plugins/markdown/shiki.html#linenumbers).

:::

#### Wrap with v-pre

As [template syntax is allowed in Markdown](#template-syntax), it would also work in code blocks, too.

To avoid your code blocks being compiled by Vue, VuePress will add [v-pre](https://v3.vuejs.org/api/directives.html#v-pre) directive to your code blocks by default, which can be disabled in config.

You can add `:v-pre` / `:no-v-pre` mark in your fenced code blocks to override the value set in config.

::: warning
The template syntax characters, for example, the "Mustache" syntax (double curly braces) might be parsed by the syntax highlighter. Thus, as the following example, `:no-v-pre` might not work well in some languages.

To make Vue syntax work in those languages anyway, try to disable the default syntax highlighting and implement your own syntax highlighting in client-side.
:::

Input:

````md
```md
<!-- This will be kept as is by default -->

1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- This will be compiled by Vue -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// This won't be compiled correctly because of js syntax highlighting
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```
````

Output:

```md
<!-- This will be kept as is -->

1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```text:no-v-pre
<!-- This will be compiled by Vue -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

<!--
using :no-v-pre on JS code blocks has potential issue with shiki, so we are
not actually using :no-v-pre here, just as an example of incorrect usage
-->

```js
// This won't be compiled correctly because of js syntax highlighting
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

::: tip
This v-pre extension is supported by our built-in plugin.

Config reference: [markdown.code.vPre](https://vuejs.press/reference/config.html#markdown-vpre)
:::

### Import Code Blocks

You can import code blocks from files with following syntax:

```md
<!-- minimal syntax -->

@[code](../foo.js)
```

To partially import the file:

```md
<!-- partial import, from line 1 to line 10 -->

@[code{1-10}](../foo.js)
```

The code language is inferred from the file extension, while it is recommended to specify it explicitly:

```md
<!-- specify the code language -->

@[code js](../foo.js)
```

In fact, the second part inside the `[]` will be treated as the mark of the code fence, so it supports all the syntax mentioned in the above [Code Blocks](#code-blocks) section:

```md
<!-- line highlighting -->

@[code js{2,4-5}](../foo.js)
```

Here is a complex example:

- import line 3 to line 10 of the `"../foo.js"` file
- specify the language as `"js"`
- highlight line 3 of the imported code, i.e. line 5 of the `"../foo.js"` file
- disable line numbers

```md
@[code{3-10} js{3}:no-line-numbers](../foo.js)
```

Notice that path aliases are not available in import code syntax. You can use following config to handle path alias yourself:

```ts twoslash
import { getDirname, path } from "vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default {
  markdown: {
    importCode: {
      handleImportPath: (str: string) =>
        str.replace(/^@src/, path.resolve(__dirname, "path/to/src")),
    },
  },
};
```

```md
<!-- it will be resolved to 'path/to/src/foo.js' -->

@[code](@src/foo.js)
```

::: tip
This import code extension is supported by our built-in plugin.

Config reference: [markdown.importCode](https://vuejs.press/reference/config.html#markdown-importcode)
:::

## Using Vue in Markdown

This section will introduce some basic usage of Vue in Markdown.

Check out [Cookbook > Markdown and Vue SFC](https://vuejs.press/advanced/cookbook/markdown-and-vue-sfc.html) for more details.

### Template Syntax

As we know:

- HTML is allowed in Markdown.
- Vue template syntax is compatible with HTML.

That means, [Vue template syntax](https://v3.vuejs.org/guide/template-syntax.html) is allowed in Markdown.

Input:

```md
One plus one equals: {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>
```

Output:

One plus one equals: {{ 1 + 1 }}

<!-- markdownlint-disable -->

<span v-for="i in 3"> span: {{ i }} </span>

<!-- markdownlint-restore -->

### Components

You can use Vue components directly in Markdown.

Input:

```md
This is default theme built-in `<Badge />` component <Badge text="demo" />
```

Output:

This is default theme built-in `<Badge />` component <Badge text="demo" />

::: tip

Check out the [Built-in Components](https://vuejs.press/reference/components.html) for a full list of built-in components.

:::

## Cautions

### Deprecated HTML Tags

Deprecated HTML tags such as [\<center>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center) and [\<font>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font) are not allowed in VuePress Markdown by default.

Those tags would not be recognized as native HTML tags by Vue template compiler. Instead, Vue will try to resolve those tags as Vue components, and obviously these components usually don't exist.

You should try to avoid using deprecated HTML tags. However, to use those tags anyway, try either of the following workarounds:

- Adding a [v-pre](https://v3.vuejs.org/api/directives.html#v-pre) directive to skip the compilation of the element and its children. Notice that the template syntax would also be invalid.
- Using [compilerOptions.isCustomElement](https://v3.vuejs.org/api/application-config.html#compileroptions) to tell Vue template compiler not try to resolve them as components.
  - For `@vuepress/bundler-webpack`, set [vue.compilerOptions](https://vuejs.press/reference/bundler/webpack.html#vue)
  - For `@vuepress/bundler-vite`, set [vuePluginOptions.template.compilerOptions](https://vuejs.press/reference/bundler/vite.html#vuepluginoptions)

[prismjs]: https://ecosystem.vuejs.press/plugins/markdown/prismjs.html
[shiki]: https://ecosystem.vuejs.press/plugins/markdown/shiki.html
