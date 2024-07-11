<script lang="ts" setup>
    import { computed } from 'vue';
    import { formatPostDate } from '../../utils';

    const { date, title, thumbnail } = defineProps<{
        date: Date | string;
        title: string;
        url: string;
        thumbnail: string;
    }>();
    const formattedDate = computed(() => formatPostDate(date));
</script>

<template>
    <article :class="$style.postItem">
        <a :class="$style.thumbnailContainer" :href="url" :title="title">
            <img :class="$style.thumbnail" :src="thumbnail" />
        </a>
        <div :class="$style.infoContainer">
            <a :href="url">
                <h4>{{ title }}</h4>
            </a>
            <p :class="$style.meta">{{ formattedDate }}</p>
        </div>
    </article>
</template>

<style module>
    .postItem {
        margin-block-start: 1.5em;

        display: grid;
        grid-template-columns: var(--vp-home-thumbnail-size) 1fr;
        grid-gap: 0.5rem;
        gap: 0.5rem;
        align-items: center;
    }
    .thumbnail {
        border-radius: 5px;
        aspect-ratio: 4 / 3;
    }
    .thumbnailContainer {
        display: block;
    }
    .thumbnailContainer img {
        object-fit: cover;
        border: none;
    }
    .infoContainer a:not(:hover) {
        text-decoration: none;
        color: var(--vp-c-text-1);
    }
    .infoContainer a:hover {
        color: var(--vp-c-text-1);
    }
    .infoContainer a h4 {
        margin: 0;
    }
    .postItem .infoContainer .meta {
        font-weight: 300;
        margin: 0;
    }
</style>
