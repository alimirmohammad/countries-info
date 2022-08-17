<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

defineProps<{ loading: boolean; size?: number; color?: string }>();
</script>

<template>
  <div v-if="loading">
    <PulseLoader :loading="loading" :size="size" :color="color" />
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: var(--color-overlay);
}
</style>
