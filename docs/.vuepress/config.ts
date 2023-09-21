import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  title: 'AudioEye Testing SDK',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  theme: defaultTheme({
    home: '/',
    editLink: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/audioeye_logo.svg',
    contributors: false,
    sidebar: {
      '/': [
        {
          text: 'Guide',
          children: [
            'get-started',
            'jest',
            'cli',
            'puppeteer',
            'how-our-tests-work',
            'building-publishing',
          ]
        }
      ],
    },

  }),
  plugins: [
    searchPlugin({}),
  ],
})
