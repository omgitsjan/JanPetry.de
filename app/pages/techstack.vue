<script setup lang="ts">
const page = await queryCollection('techstack').first()

useSeoMeta({
  titleTemplate: '',
  title: page.title,
  ogTitle: page.title,
  description: page.description,
  ogDescription: page.description
})
</script>

<template>
  <div v-if="page">
    <div class="grid grid-cols-1 gap-1 text-center lg:divide-x max-lg:divide-y m-auto p-6 mt-10 mb-8 lg:grid-cols-2">
      <div>
        <UPageSection
          :headline="page.partners.headline"
          :title="page.partners.title"
          :description="page.partners.description"
          class="m-auto lg:pr-20 lg:pl-14"
        >
          <UPageLogos>
            <UIcon
              v-for="icon in page.partners.icons"
              :key="icon"
              :name="icon"
              class="w-12 h-12 flex-shrink-0 text-gray-500 dark:text-gray-400"
            />
          </UPageLogos>
        </UPageSection>
      </div>

      <div>
        <UPageSection
          :headline="page.tools.headline"
          :title="page.tools.title"
          :description="page.tools.description"
          class="m-auto lg:pl-20 lg:pr-12"
        >
          <UPageLogos>
            <UIcon
              v-for="icon in page.tools.icons"
              :key="icon"
              :name="icon"
              class="w-12 h-12 flex-shrink-0 text-gray-500 dark:text-gray-400"
            />
          </UPageLogos>
        </UPageSection>
      </div>
    </div>
    <UPageSection
      :title="page.faq.title"
      :description="page.faq.description"
    >
      <UPageAccordion
        :items="page.faq.items"
        multiple
        class="max-w-4xl mx-auto"
      />
    </UPageSection>
  </div>
</template>
