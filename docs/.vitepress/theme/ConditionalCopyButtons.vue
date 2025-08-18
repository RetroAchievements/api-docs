<script setup>
import { useRoute } from "vitepress";
import CopyOrDownloadAsMarkdownButtons from "vitepress-plugin-llms/vitepress-components/CopyOrDownloadAsMarkdownButtons.vue";

const route = useRoute();

const shouldShow = () => {
  const path = route.path;
  return path !== "/" && path !== "/getting-started";
};
</script>

<template>
  <CopyOrDownloadAsMarkdownButtons v-if="shouldShow()" />
</template>
