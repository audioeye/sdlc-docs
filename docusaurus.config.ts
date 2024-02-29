import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';
import lunrSearchPlugin from 'docusaurus-lunr-search';

/** @type {import('@docusaurus/types').Config} */
const config: Config = {
  title: 'AudioEye Testing SDK',
  favicon: '/img/audioeye_logo.svg',

  // Set the production url of your site here
  url: 'https://developer.audioeye.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'audioeye', // Usually your GitHub org/user name.
  projectName: 'sdlc-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // Serve the docs at the site's root
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        // Optional: disable the blog plugin
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [[lunrSearchPlugin, { languages: ['en'] }]],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'AudioEye Accessibility Testing SDK',
      logo: {
        alt: 'The AudioEye Company Logo. The logo is a simple design consisting of a purple circle with a white square in the center.',
        src: 'img/audioeye_logo.svg',
      },
      items: [
        {
          href: 'https://www.audioeye.com/',
          label: 'AudioEye',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Help Center',
              href: 'https://help.audioeye.com/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/audioeye-inc/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/audioeyeinc',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/audioeyeinc',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/audioeyeinc/',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/c/AudioEye',
            },
            {
              label: 'Medium',
              href: 'https://audioeye.medium.com/',
            },
          ],
        },
      ],
      copyright: `Copyright ©${new Date().getFullYear()} AudioEye, Inc. All rights reserved. AUDIOEYE is a U.S. registered trademark of AudioEye, Inc.`,
    },
    prism: {
      additionalLanguages: ['bash', 'docker', 'javascript', 'json', 'typescript'],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
