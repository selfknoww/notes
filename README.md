# Notes

这个仓库基于 [moeyua/astro-theme-typography](https://github.com/moeyua/astro-theme-typography) 改来，用来搭建自己的博客。技术栈是 `Astro + TypeScript + UnoCSS`。

## 如何启动

```bash
pnpm install
pnpm dev
```

常用命令：

- `pnpm dev`：本地开发
- `pnpm build`：生产构建
- `pnpm preview`：预览构建结果
- `pnpm theme:create`：交互式创建新文章

## 如何写文章

文章放在 `src/content/posts/` 目录，可以手动新建 `.md` / `.mdx` 文件，也可以运行：

```bash
pnpm theme:create
```

最小文章示例：

```md
---
title: 我的第一篇文章
pubDate: 2026-03-06
categories: ['随笔']
description: '这是一段文章摘要'
---
```

## Frontmatter 字段说明

```md
---
title: Markdown Example
pubDate: 1921-01-10
modDate: 2025-01-03 15:01
categories: ['Examples']
description: '文章简介'
slug: markdown-example
draft: true
pin: true
---
```

- `title`：文章标题
- `pubDate`：发布日期
- `modDate`：修改日期，可选
- `categories`：分类列表，必须是数组
- `description`：文章简介，用在列表和 SEO
- `slug`：自定义文章链接，可选
- `draft`：是否草稿，`true` 时生产环境不会显示
- `pin`：是否置顶，可选

## 如何修改配置

主题默认配置在 `src/.config/default.ts`，不要直接改。

你自己的配置写在 `src/.config/user.ts`，常改的内容有：

- `site.title`：站点标题
- `site.subtitle`：副标题
- `site.author`：作者名
- `site.description`：站点描述
- `site.website`：站点地址
- `site.socialLinks`：社交链接
- `appearance.theme`：亮色 / 暗色 / 跟随系统
- `appearance.locale`：站点语言

社交链接示例：

```ts
socialLinks: [
  { name: 'github', href: 'https://github.com/你的用户名' },
  { name: 'email', href: 'mailto:you@example.com' },
  { name: 'rss', href: '/atom.xml' },
]
```

其中 `name` 对应 Material Design Icons 的图标名，改完后如果图标没变化，重启一次 `pnpm dev`。

## 其他常用位置

- `src/content/spec/about.md`：关于页面内容
- `src/pages/`：页面路由
- `public/`：静态资源

## 更新主题

如果你这个仓库是从原主题 fork 下来的，可以用 GitHub 的 `Sync Fork` 同步上游更新。同步前先确认自己的改动已经提交，避免被覆盖。
