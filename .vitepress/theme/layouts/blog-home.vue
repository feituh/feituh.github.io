<script lang="ts" setup>
    import VPDoc from 'vitepress/dist/client/theme-default/components/VPDoc.vue';
    import { useData } from 'vitepress';

    const { frontmatter, description } = useData();
</script>

<template>
    <VPDoc class="doc">
    </VPDoc>
</template>

<style>
    h2#home-heading {
        margin: 0 !important;
        padding: 0 !important;
        border-top: none;
    }
    h2#home-heading a.header-anchor {
        display: none !important;
    }
</style>