import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  title: 'AudioEye Testing SDK',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  theme: defaultTheme({
    home: '/guide/',
    editLink: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/audioeye_logo.svg',
    sidebar: {
      '/': [
        {
          text: 'Guide',
          children: [
            '',
            'how-our-tests-work',
            'cli',
            'jest',
            'writing-custom-tests',
            'building-publishing',
          ]
        }
      ],
    }
  }),
})
