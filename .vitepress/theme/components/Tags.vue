<script setup lang="ts">
import { inBrowser, useData, withBase } from 'vitepress'
import { ref } from 'vue'
import { useTags } from '../static-data/useTags'
import PostItem from "./PostItem.vue";

const { postsByTag } = useTags()
const { theme } = useData()
const selectedTag = ref('')

function toggleTag(tag: string) {
  selectedTag.value = tag
}
if (inBrowser) {
  const params = new URLSearchParams(window.location.search)
  const init = params.get('init') // returns the number 123
  if (init) {
    toggleTag(init)
  }
}
</script>

<template>
  <ClientOnly>
    <div>
        <hr>
        <h3>🏷️ Tất cả tag</h3>
        <ul>
            <li
                v-for="(posts, tagName) in postsByTag"
                :key="tagName"
                :class="{
                'tag-unselected':
                    selectedTag !== tagName,
                'tag-selected':
                    selectedTag === tagName,
                }"
                @click="toggleTag(tagName)"
            >
                #{{ tagName }} ( {{ posts.length }} )
            </li>
        </ul>
    </div>
    
    <hr>

    <div v-if="selectedTag">
        <h3>
            📰 {{ postsByTag[selectedTag].length }} bài viết của: #{{ selectedTag }}
        </h3>
        
        <div v-for="post in postsByTag[selectedTag]">
            <PostItem
            :title="post.title"
            :date="post.date"
            :url="post.url"
            :thumbnail="post.thumbnail"
            />
        </div>
    </div>
  </ClientOnly>
</template>

<style>
    .tag-selected {
        color: var(--vp-c-red-1);
        font-style: bold;
        text-decoration: underline;
    }
</style>