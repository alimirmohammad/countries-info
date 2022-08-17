<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <button class="btn" @click="router.go(-1)">
    <div class="content">
      <ion-icon name="arrow-back-outline"></ion-icon>
      Back
    </div>
  </button>
</template>

<style scoped>
.btn {
  background-color: var(--color-elements);
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  color: var(--color-text);
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  padding: 0.5rem 1rem;
}
.content {
  align-items: center;
  display: flex;
  gap: 0.5rem;
}
</style>
