<script setup lang="ts">
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <ion-icon name="search-outline"></ion-icon>
    <input
      type="text"
      placeholder="Search for a country..."
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<style scoped>
div {
  background-color: var(--color-elements);
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  max-width: 80%;
  overflow: hidden;
  width: 400px;
}

input {
  background-color: var(--color-elements);
  border: none;
  color: var(--color-input);
  font-family: inherit;
  height: 100%;
  margin-left: 2rem;
  outline: none;
  padding: 1rem 2rem;
  width: calc(100% - 2rem);
}

ion-icon {
  color: var(--color-input);
  left: 1rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
