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
                    <div>
                        <span v-for="tag in frontmatter.tags" :class="$style.tagItem">
                            <a :href="`/tags?init=${tag}`">#{{ tag }}</a>
                        </span>
                    </div>
                    <hr />
                    <figure>
                        <picture>
                            <img :src="frontmatter.thumbnail.link" />
                        </picture>
                        <figcaption :class="$style.caption">
                            {{ frontmatter.thumbnail.desc }}. Nguồn ảnh:
                            <a :href="frontmatter.thumbnail.author.link">@{{ frontmatter.thumbnail.author.name }}</a>, 
                            <a :href="frontmatter.thumbnail.src">Unsplash</a>.
                        </figcaption>
                    </figure>
                </div>
            </div>
        </template>
        <template #doc-after>
            <div class="vp-doc" style="padding-bottom: 18px">
                <p>
                    <span>Nếu thấy bài viết hay thì hãy để lại tương tác ở bên dưới 👇</span>
                    <br>
                    <span>Và nếu có thể thì <a href="/donate">Donate</a> cho mình nha 🤑</span>
                </p>
            </div>
            <Giscus v-if="isProd"
                id="comments"
                repo="feituh/feituh.github.io"
                repoId="R_kgDOMuG18Q"
                category="General"
                categoryId="DIC_kwDOMuG18c4CiRfr"
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

<style module>
    figure {
        text-align: center;
        display: block;
    }
    figure figcaption {
        font-style: italic;
    }
    img {
        border: 1px solid gray;
        margin: 0 auto;
    }
    .tagItem {
        margin-right: 8px;
    }
    .tagItem::after {
        content: "; ";
    }
    .tagItem:last-child::after {
        content: "";
    }
    .buymeacoffee {
        border: none !important;
        height: 41px !important;
        width: 174px !important;
    }
</style>
