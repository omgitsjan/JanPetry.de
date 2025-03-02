<script setup lang="ts">
const { data: post } = await useAsyncData(() => {
  return queryCollection('posts').first()
})
const title = post.value.title
const description = post.value.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>

<template>
  <UPage>
    <UPageBody
      prose
      class="container mx-auto xl:px-96 md:px-40 px-6"
    >
      <ContentRenderer
        v-if="post"
        :value="post"
      />
    </UPageBody>
  </UPage>
</template>
