<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/types'
import { joinURL } from 'ufo'

const route = useRoute()

const { data: post } = await useAsyncData(route.path, () =>
  queryContent<ParsedContent>(route.path).findOne()
)
if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found',
    fatal: true
  })
}

const title = post.value.head?.title || post.value.title
const description = post.value.head?.description || post.value.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

if (post.value.image?.src) {
  const site = useSiteConfig()

  useSeoMeta({
    ogImage: joinURL(site.url, post.value.image.src),
    twitterImage: joinURL(site.url, post.value.image.src)
  })
} else {
  defineOgImage({
    component: 'Saas',
    title,
    description,
    headline: 'Imprint'
  })
}
</script>

<template>
  <UPage>
    <UPageBody
      prose
      class="container mx-auto xl:px-96 md:px-40 px-6"
    >
      <ContentRenderer
        v-if="post && post.body"
        :value="post"
      />
    </UPageBody>
  </UPage>
</template>
