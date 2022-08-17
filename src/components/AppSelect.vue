<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import { REGIONS } from "@/data/regions";

defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);

const open = ref(false);

function toggle() {
  open.value = !open.value;
}

function close() {
  open.value = false;
}

onMounted(() => {
  document.addEventListener("click", close);
});

onUnmounted(() => {
  document.removeEventListener("click", close);
});
</script>

<template>
  <div class="wrapper">
    <div class="select" @click.stop="toggle">
      <span>{{ modelValue ? modelValue : "Filter by Region" }}</span>
      <ion-icon name="chevron-down-outline"></ion-icon>
    </div>
    <ul class="options" v-show="open">
      <li
        v-for="region in REGIONS"
        :key="region"
        @click="$emit('update:modelValue', region)"
      >
        {{ region }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  margin: 0;
  cursor: pointer;
  padding: 0.5rem 1rem;
}

li:hover {
  background-color: var(--color-input);
  color: var(--c-white);
}

.options {
  list-style: none;
  background-color: var(--color-elements);
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 1rem 0;
  position: absolute;
  top: 4rem;
  left: 0;
  z-index: 1;
}

.select {
  align-items: center;
  background-color: var(--color-elements);
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.wrapper {
  max-width: 50%;
  width: 200px;
}
</style>
