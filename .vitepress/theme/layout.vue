<!--.vitepress/theme/MyLayout.vue-->
<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme-without-fonts'
import { useData } from 'vitepress'
import { Config } from './index';

const { Layout } = DefaultTheme
const { page, frontmatter } = useData()
</script>

<template>
  <Layout>
  </Layout>
</template>