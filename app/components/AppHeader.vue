<script setup lang="ts">
const items = computed(() => [
  {
    label: 'My Techstack',
    to: '/techstack'
  },
  {
    label: 'My Blog',
    to: '/blog'
  }
])
</script>

<template>
  <UHeader>
    <template #left>
      <AppLogo class="w-auto h-6 shrink-0" />
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <UColorModeButton />
      <UButton
        label="Contact Me"
        color="primary"
        to="/contact"
        trailing-icon="i-line-md-email-twotone"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
