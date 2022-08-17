<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <router-link to="/" class="brand">Where in the world?</router-link>
    <span class="mode">
      <ion-icon name="moon-outline"></ion-icon>
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
  padding: 2rem 1rem;
  position: sticky;
}

ion-icon {
  --ionicon-stroke-width: 46px;
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
