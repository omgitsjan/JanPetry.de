<script lang="ts" setup>
const initials = 'jp'
</script>

<template>
  <div class="flex items-center space-x-10">
    <NuxtLink
      to="/"
      class="flex items-center group unstyled"
      title="Go Home"
    >
      <NuxtImg
        src="/jan-petry.webp"
        width="80"
        height="80"
        alt="JanPetry.de"
        style="width: 40px; height: 40px;"
        class="rounded-lg h-10 w-10 mr-3 group-hover:(h-11 w-11) transition-all"
      />
      <div
        aria-label="Jan Petry Initials"
        class="hidden sm:block text-gray-700 dark:text-gray-200 relative transform top-2 group-hover:top-0"
      >
        <span class="block text-primary-700 font-bold text-3xl logo">{{ initials }}</span>
        <span class="block text-primary-700 font-bold text-3xl logo">{{ initials }}</span>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.group:hover {
  filter: drop-shadow(0 0 35px text-gray-200);
  .logo {
    background: linear-gradient(90deg, #11998e, #38ef7d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: translateX(0px) translateY(18px) skewX(-10deg);
  }
  .logo:nth-of-type(2) {
    filter: drop-shadow(0 0 10px #38ef7d);
    transform: translateX(0) translateY(-18px) skewX(-10deg);
  }
}
.logo {
  transform: skewX(-10deg);
  font-weight: 400;
  transition: 0.2s;
  background: linear-gradient(90deg, rgba(#11998e, 0.3), rgba(#38ef7d, 0.3));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.logo:nth-of-type(2) {
  background: linear-gradient(90deg, #38ef7d, #11998e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: translateX(-3px) translateY(-17px) skewX(-10deg);
}
</style>
