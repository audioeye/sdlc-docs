import { defaultTheme } from '@vuepress/theme-default'
import { shikiPlugin } from '@vuepress/plugin-shiki'

export default {
  title: 'AudioEye Testing SDK',
  head: [
    ['meta', { name: 'og:title', content: 'AudioEye Testing SDK Docs' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:description', content: 'Developer documentation for the AudioEye Testing SDK' }],
    ['meta', { name: 'og:image', content: 'https://audioeye.github.io/sdlc-docs/audioeye_logo_full.svg' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://audioeye.github.io/sdlc-docs/audioeye_logo.svg' }],
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
            'cli',
            'jest',
            'how-our-tests-work',
            'release-notes',
            'troubleshooting',
          ]
        }
      ],
    },
    sidebarDepth: 1,
  }),
  plugins: [
    shikiPlugin({
      theme: 'rose-pine-moon',
    }),
  ],
}
