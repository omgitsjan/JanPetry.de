<script setup lang="ts">
import type { NavItem } from "@nuxt/content/dist/runtime/types";

const navigation = inject<Ref<NavItem[]>>("navigation", ref([]));

const links = [
  {
    label: "Tech-stack",
    to: "/techstack",
  },
  {
    label: "My Blog",
    to: "/blog",
  },
];
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <Logo />
    </template>

    <template #right>
      <UColorModeButton />
      <UButton label="Contact Me" color="primary" to="/contact" trailing-icon="i-line-md-email-twotone" />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" default-open :multiple="false" />
    </template>
  </UHeader>
</template>
