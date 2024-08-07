import { defineConfig } from 'vitepress'
import implicitFigures from 'markdown-it-implicit-figures';

export default defineConfig({
  title: "Feituh",
  description: "Blog nhảm nhí của Feituh",
  markdown: {
    config(md) {
        md.use(implicitFigures, {
            dataType: false, // <figure data-type="image">, default: false
            figcaption: 'title', // <figcaption>alternative text</figcaption>, default: false
            keepAlt: true, // <img alt="alt text" .../><figcaption>alt text</figcaption>, default: false
            lazyLoading: false, // <img loading="lazy" ...>, default: false
            link: true, // <a href="img.png"><img src="img.png"></a>, default: false
            tabindex: true,
        });
    },
    math: true,
  },
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap', 
        rel: 'stylesheet'
      }
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tags', link: 'tags' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/theryou' }
    ],

    aside: 'left',

    outline: {
      level: `deep`
    },

    footer: {
      message: 'Xây dựng bằng <a href="https://vitepress.dev/">Vitepress</a>.',
      copyright: '© 2024 – 2024. Tác giả giữ bản quyền bài viết.'
    }
  }
})
