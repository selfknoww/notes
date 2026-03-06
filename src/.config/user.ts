import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: '有志者事竟诚',
    subtitle: 'Selfknow',
    author: 'Zhicheng',
    website: 'https://selfknow.cn/',
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/selknoww',
      },
      {
        name: 'email',
        href: 'mailto:zhichenglyu@163.com',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
    ],
    footer: [
      '© %year <a target="_blank" href="%website">%author</a>',
    ],
  },
  seo: {
    twitter: '',
  },
  rss: {
    fullText: false,
  },
  latex: {
    katex: true,
  },
}
