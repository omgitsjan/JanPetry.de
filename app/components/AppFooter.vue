<script setup lang="ts">
interface FooterLink {
  label: string
  to: string
  target?: '_blank'
}

interface FooterColumn {
  label: string
  children: FooterLink[]
}

const columns: FooterColumn[] = [
  {
    label: 'Resources',
    children:
    [
      { label: 'Blog', to: '/blog' },
      { label: 'Changelog', to: 'https://github.com/omgitsjan/JanPetry.de/releases', target: '_blank' }
    ]
  },
  {
    label: 'Business',
    children:
    [
      { label: 'My Company', to: 'https://jpprofessionals.de', target: '_blank' },
      { label: 'PLUTOMES', to: 'https://plutomes.com', target: '_blank' }
    ]
  },
  {
    label: 'Legal',
    children:
    [
      { label: 'Imprint', to: '/imprint' },
      { label: 'License', to: 'https://github.com/omgitsjan/JanPetry.de/blob/main/LICENSE.md', target: '_blank' }
    ]
  }
]
</script>

<template>
  <USeparator
    icon="i-lucide-code"
    class="h-px"
  />
  <UFooter :ui="{ top: 'border-b border-[var(--ui-border)]' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #right>
            <div class="flex justify-center items-center">
              <NuxtLink
                to="https://github.com/omgitsjan"
                target="_blank"
              >
                <NuxtImg
                  v-if="$colorMode.value === 'dark'"
                  src="https://github-readme-stats.vercel.app/api?username=omgitsjan&show_icons=true&theme=transparent&border_color=1f2937&count_private=true&text_color=d1d5db&icon_color=38ef7d&ring_color=38ef7d&title_color=FFFFFF&include_all_commits=true"
                  placeholder
                  preload
                  alt="GitHub Stats (Dark Mode)"
                  class="h-28"
                />
                <NuxtImg
                  v-else
                  src="https://github-readme-stats.vercel.app/api?username=omgitsjan&show_icons=true&theme=transparent&border_color=e5e7eb&count_private=true&text_color=4b5563&icon_color=0fd85b&ring_color=0fd85b&title_color=000000&include_all_commits=true"
                  placeholder
                  preload
                  alt="GitHub Stats (Light Mode)"
                  class="h-28"
                />
              </NuxtLink>
            </div>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-[var(--ui-text-muted)] text-sm">
        Copyright © {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </template>

    <template #right>
      <UColorModeSwitch />
      |
      <UButton
        to="https://www.linkedin.com/in/japetry/"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="Visit my LinkedIn profile"
        title="LinkedIn"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://www.x.com/omg_itsjan/"
        target="_blank"
        icon="i-simple-icons-x"
        aria-label="Visit my X profile"
        title="X (Twitter)"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://github.com/omgitsjan"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="Visit my GitHub profile"
        title="GitHub"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
