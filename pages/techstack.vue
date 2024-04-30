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
</script>

<template>
  <div v-if="page">
    <div class="grid grid-cols-1 gap-1 text-center lg:divide-x max-lg:divide-y m-auto p-6 mt-10 mb-8 lg:grid-cols-2">
      <div>
        <ULandingSection
          :headline="page.partners.headline"
          :title="page.partners.title"
          :description="page.partners.description"
          class="m-auto lg:pr-20 lg:pl-14"
        >
          <ULandingLogos>
            <UIcon
              v-for="icon in page.partners.icons"
              :key="icon"
              :name="icon"
              class="w-12 h-12 flex-shrink-0 text-gray-500 dark:text-gray-400"
            />
          </ULandingLogos>
        </ULandingSection>
      </div>

      <div>
        <ULandingSection
          :headline="page.tools.headline"
          :title="page.tools.title"
          :description="page.tools.description"
          class="m-auto lg:pl-20 lg:pr-12"
        >
          <ULandingLogos>
            <UIcon
              v-for="icon in page.tools.icons"
              :key="icon"
              :name="icon"
              class="w-12 h-12 flex-shrink-0 text-gray-500 dark:text-gray-400"
            />
          </ULandingLogos>
        </ULandingSection>
      </div>
    </div>
    <ULandingSection
      :title="page.faq.title"
      :description="page.faq.description"
    >
      <ULandingFAQ :items="page.faq.items" multiple class="max-w-4xl mx-auto">
      </ULandingFAQ>
    </ULandingSection>
  </div>
</template>
