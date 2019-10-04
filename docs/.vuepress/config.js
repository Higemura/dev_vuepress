module.exports = {
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  description: 'VuePress で作成したサンプルサイト',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'og:url', content: 'https://example.com/' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Sample Site' }],
    ['meta', { name: 'og:description', content: 'VuePress で作成したサンプルサイト' }],
    ['meta', { name: 'og:image', content: '/og.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
      { text: 'Blog', link: 'https://example.com/' },
      {
        text: 'SNS',
        items: [
          { text: 'Twitter', link: 'https://twitter.com/' },
          { text: 'Instagram', link: 'https://www.instagram.com/' },
          { text: 'GitHub', link: 'https://github.com/' }
        ]
      }
    ],
    sidebar: [
      ['/', 'Home'],
      ['/about/', 'About']
    ],
    sidebarDepth: 2
  }
}