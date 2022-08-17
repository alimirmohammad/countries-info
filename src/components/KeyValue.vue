<script setup lang="ts">
const props = defineProps<{ title: string; value: string }>();
</script>

<template>
  <p>
    <span class="title">{{ props.title }}: </span>
    <span>{{ props.value }}</span>
  </p>
</template>

<style scoped>
.title {
  font-weight: var(--font-weight-medium);
}
</style>
