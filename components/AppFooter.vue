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
                src="https://github-readme-stats.vercel.app/api?username=omgitsjan&show_icons=true&theme=transparent&border_color=1f2937&count_private=true&text_color=d1d5db&icon_color=38ef7d&ring_color=38ef7d&title_color=FFFFFF&include_all_commits=true"
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
