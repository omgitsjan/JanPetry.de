<script setup lang="ts">
const links = [
  {
    label: "Resources",
    children: [
      {
        label: "Blog",
        to: "/blog",
      },
      {
        label: "Changelog",
        to: "https://github.com/omgitsjan/JanPetry.de/releases",
        target: "_blank",
      },
    ],
  },
  {
    label: "Business",
    children: [
      {
        label: "My Company",
        to: "https://jpprofessionals.de",
        target: "_blank",
      },
      {
        label: "Portal",
        to: "https://jpprofessionals.de/auth/signin?redirect=/portal",
        target: "_blank",
      },
    ],
  },
  {
    label: "Legal",
    children: [
      {
        label: "Imprint",
        to: "/imprint",
      },
      {
        label: "License",
        to: "https://github.com/omgitsjan/JanPetry.de/blob/main/LICENSE.md",
        target: "_blank",
      },
    ],
  },
];
</script>

<template>
  <UFooter>
    <template #top>
      <UFooterColumns :links="links">
        <template #right>
          <div class="flex justify-center items-center">
            <NuxtLink
              to="https://github.com/omgitsjan"
              target="_blank"
            >
              <NuxtImg
                src="https://camo.githubusercontent.com/7a95d00301bda09b38de333d84ba2fbf14385a538fed93877f6425b0717fd44a/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d6f6d676974736a616e2673686f775f69636f6e733d7472756526686964655f626f726465723d66616c7365267468656d653d646973636f72645f6f6c645f626c7572706c65"
                placeholder
                preload
                alt="GitHub Stats"
                class="h-28"
              />
            </NuxtLink>
          </div>
        </template>
      </UFooterColumns>
    </template>

    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </template>

    <template #right>
      <UColorModeToggle size="sm" />
      |
      <UButton
        to="https://www.linkedin.com/in/japetry/"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="Linkedin"
        color="gray"
        variant="ghost"
      />
      <UButton
        to="https://www.x.com/omg_itsjan/"
        target="_blank"
        icon="i-simple-icons-x"
        aria-label="X (Twitter)"
        color="gray"
        variant="ghost"
      />
      <UButton
        to="https://github.com/omgitsjan"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="gray"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
