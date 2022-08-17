<script setup lang="ts">
import { onMounted } from "vue";

import AppInput from "../components/AppInput.vue";
import AppSelect from "../components/AppSelect.vue";
import AppCard from "../components/AppCard.vue";
import AppLink from "../components/AppLink.vue";
import { useCountriesStore } from "@/stores/countries";

const countriesStore = useCountriesStore();

onMounted(async () => {
  if (countriesStore.cached) return;
  const error = countriesStore.setCountries();
});
</script>

<template>
  <h1>Home</h1>
  <AppInput v-model="countriesStore.query" />
  <div style="height: 20px"></div>
  <AppSelect v-model="countriesStore.region" />
  <div style="height: 20px"></div>
  <div class="countries-wrapper">
    <AppCard
      v-for="country in countriesStore.processedCountries"
      :key="country.alpha3Code"
      :country="country"
    />
  </div>
  <div style="height: 20px"></div>
  <AppLink to="/details"> Details </AppLink>
</template>

<style scoped>
.countries-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}
</style>
