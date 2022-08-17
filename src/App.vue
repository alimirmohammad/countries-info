<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";

import { getTheme, toggleTheme } from "./utils/theme-preference";

const theme = ref(getTheme());

function handleToggle() {
  const nextTheme = toggleTheme();
  theme.value = nextTheme;
}
</script>

<template>
  <header>
    <router-link to="/" class="brand">Where in the world?</router-link>
    <span class="mode" @click="handleToggle">
      <ion-icon v-if="theme === 'dark'" name="moon"></ion-icon>
      <ion-icon v-else name="moon-outline"></ion-icon>
      <span class="text">Dark Mode</span>
    </span>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
.brand {
  color: inherit;
  cursor: pointer;
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  text-decoration: none;
}

header {
  align-items: center;
  background-color: var(--color-elements);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  padding: 2rem;
  position: fixed;
  width: 100%;
  z-index: 1;
}

ion-icon {
  --ionicon-stroke-width: 46px;
}

main {
  padding: 6.625rem 2rem;
}

@media screen and (max-width: 470px) {
  main {
    padding: 6.625 1rem;
  }
}

.mode {
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  gap: 0.5rem;
  justify-content: center;
}

.text {
  font-weight: var(--font-weight-medium);
}

@media screen and (min-width: var(--breakpoint-mobile)) {
  .brand,
  .mode {
    font-size: 1.5rem;
  }
}
</style>
