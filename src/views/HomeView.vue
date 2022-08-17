<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";

import AppInput from "@/components/AppInput.vue";
import AppSelect from "@/components/AppSelect.vue";
import AppCard from "@/components/AppCard.vue";
import AppLoader from "@/components/AppLoader.vue";
import type { Region, SortBy } from "@/typings/dto";
import { REGIONS } from "@/data/regions";
import { SORT_BY } from "@/data/sortBy";
import { useCountriesStore } from "@/stores/countries";

const countriesStore = useCountriesStore();
const route = useRoute();
const toast = useToast();
const loading = ref(false);

countriesStore.initFilterData({
  query: route.query.query as string,
  region: route.query.region as Region,
  sortBy: route.query.sortBy as SortBy,
});

onMounted(async () => {
  if (countriesStore.cached) return;
  loading.value = true;
  const error = await countriesStore.setCountries();
  loading.value = false;
  if (error) {
    toast.error(error);
  }
});
</script>

<template>
  <AppLoader :loading="loading" />
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
