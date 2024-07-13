// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme, { type DefaultTheme as DefaultThemeType } from 'vitepress/theme-without-fonts'
import Posts from './components/Posts.vue';
import BlogPost from './layouts/blog-post.vue'
import BlogHome from './layouts/blog-home.vue'
import IncludeImage from './components/IncludeImage.vue';
import CFHandle from './components/CFHandle.vue';
import Layout from './layout.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('Posts', Posts);
    app.component('blog-post', BlogPost);
    app.component('blog-home', BlogHome);
    app.component('include-image', IncludeImage);
    app.component('cf-handle', CFHandle);
  }
} satisfies Theme

export type Config = DefaultThemeType.Config & {
  redirects?: {
      srcPart: string;
      dest: string;
  }[];
};
