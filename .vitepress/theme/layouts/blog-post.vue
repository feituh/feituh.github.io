<script lang="ts" setup>
    import { computed } from 'vue';
    import VPDoc from 'vitepress/dist/client/theme-default/components/VPDoc.vue';
    import { useData } from 'vitepress';
    import { formatPostDateDetail } from '../../utils';
    import Giscus from '@giscus/vue';

    const { frontmatter, isDark } = useData();
    const shouldShowTitle = computed(() => !!frontmatter.value.title || !!frontmatter.value.date);

    // @ts-ignore
    const isProd: boolean = import.meta.env.PROD;
</script>

<template>
    <VPDoc>
        <template #doc-before>
            <div class="vp-doc">
                <div class="title" v-if="shouldShowTitle">
                    <h1 v-if="frontmatter.title">{{ frontmatter.title }}</h1>
                    <div v-if="frontmatter.date">Đăng {{ formatPostDateDetail(frontmatter.date) }}</div>
                    <hr />
                    <picture>
                        <img :src="frontmatter.thumbnail.link" />
                    </picture>
                    <figcaption class="caption">
                        {{ frontmatter.thumbnail.desc }}. Nguồn ảnh:
                        <a :href="frontmatter.thumbnail.author.link">@{{ frontmatter.thumbnail.author.name }}</a>, 
                        <a :href="frontmatter.thumbnail.src">Unsplash</a>.
                    </figcaption>
                </div>
            </div>
        </template>
        <template #doc-after>
            <Giscus v-if="isProd"
                id="comments"
                repo="theryou/theryou.github.io"
                repoId="R_kgDOMUYXfg"
                category="General"
                categoryId="DIC_kwDOMUYXfs4CgsIF"
                mapping="title"
                term="Welcome to @giscus/react component!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                :theme="isDark ? 'dark' : 'light'"
                lang="en"
                loading="lazy"
            />
        </template>
    </VPDoc>
</template>

<style>
    figure {
        text-align: center;
        display: block;
    }
    img {
        border: 1px solid gray;
        margin: 0 auto;
    }
    figcaption.caption {
        font-style: italic;
    }
</style>