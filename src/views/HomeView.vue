<script setup lang="ts">
import { onMounted } from "vue";

import AppInput from "../components/AppInput.vue";
import AppSelect from "../components/AppSelect.vue";
import AppCard from "../components/AppCard.vue";
import { useCountriesStore } from "@/stores/countries";
import { REGIONS } from "@/data/regions";
import { SORT_BY } from "@/data/sortBy";

const countriesStore = useCountriesStore();

onMounted(async () => {
  if (countriesStore.cached) return;
  const error = countriesStore.setCountries();
});
</script>

<template>
  <div class="filters">
    <AppInput v-model="countriesStore.query" />
    <AppSelect
      v-model="countriesStore.region"
      label="Filter by Region"
      :options="REGIONS"
    />
  </div>
  <div class="sort">
    <AppSelect
      v-model="countriesStore.sortBy"
      label="Sort by"
      :options="SORT_BY"
    />
  </div>
  <div class="countries-wrapper">
    <AppCard
      v-for="country in countriesStore.processedCountries"
      :key="country.alpha3Code"
      :country="country"
    />
  </div>
</template>

<style scoped>
.countries-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
  justify-items: center;
}

.filters {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.sort {
  margin: 1rem 0;
}
</style>
