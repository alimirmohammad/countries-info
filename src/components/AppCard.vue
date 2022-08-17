<script setup lang="ts">
import type { CountryDto } from "@/typings/dto";
import KeyValue from "./KeyValue.vue";

const props = defineProps<{ country: CountryDto }>();
</script>

<template>
  <router-link :to="country.alpha3Code" class="card">
    <div class="img-container" :style="{ backgroundImage: props.country.flag }">
      <img :src="props.country.flag" :alt="`Flag of ${props.country.name}`" />
    </div>
    <div class="info">
      <h2 class="title">{{ props.country.name }}</h2>
      <KeyValue
        title="Population"
        :value="country.population.toLocaleString()"
      />
      <KeyValue title="Region" :value="country.region" />
      <KeyValue
        v-if="country.capital"
        title="Capital"
        :value="country.capital"
      />
    </div>
  </router-link>
</template>

<style scoped>
.card {
  background-color: var(--color-elements);
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  color: var(--color-text);
  max-width: 340px;
  overflow: hidden;
  text-decoration: none;
}

.info {
  padding: 2rem 1rem 2.5rem 1rem;
}

.img-container {
  aspect-ratio: 9 / 5;
  width: 100%;
}

img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.title {
  font-size: 1.2rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-weight: var(--font-weight-medium);
}
</style>
