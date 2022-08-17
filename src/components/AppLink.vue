<script setup lang="ts">
const props = defineProps<{ to: string }>();
</script>

<template>
  <router-link class="link" :to="props.to">
    <slot></slot>
  </router-link>
</template>

<style scoped>
.link {
  background-color: var(--color-elements);
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  color: var(--color-text);
  display: inline-block;
  padding: 0.5rem 1rem;
  text-decoration: none;
}
</style>
