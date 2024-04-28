<script setup lang="ts">
const { data: page } = await useAsyncData("techstack", () =>
  queryContent("/techstack").findOne()
);
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
});

defineOgImage({
  component: "Saas",
  title: page.value.title,
  description: page.value.description,
});

const isYearly = ref(false);
</script>

<template>
  <div v-if="page">
    <ULandingSection :headline="page.partners.headline" :title="page.partners.title" :description="page.partners.description">
      <ULandingLogos>
        <UIcon
          v-for="icon in page.partners.icons"
          :key="icon"
          :name="icon"
          class="w-12 h-12 flex-shrink-0 text-gray-500 dark:text-gray-400"
        />
      </ULandingLogos>
    </ULandingSection>

    <ULandingSection :headline="page.tools.headline" :title="page.tools.title" :description="page.tools.description">
      <ULandingLogos>
        <UIcon
          v-for="icon in page.tools.icons"
          :key="icon"
          :name="icon"
          class="w-12 h-12 flex-shrink-0 text-gray-500 dark:text-gray-400"
        />
      </ULandingLogos>
    </ULandingSection>

    <ULandingSection
      :title="page.faq.title"
      :description="page.faq.description"
    >
      <ULandingFAQ :items="page.faq.items" multiple class="max-w-4xl mx-auto" >
      </ULandingFAQ>
    </ULandingSection>
  </div>
</template>
