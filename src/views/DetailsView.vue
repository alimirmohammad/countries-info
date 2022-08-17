<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";

import AppLink from "@/components/AppLink.vue";
import BackButton from "@/components/BackButton.vue";
import type { CountryDto } from "@/typings/dto";
import KeyValue from "@/components/KeyValue.vue";
import { useCountriesStore } from "@/stores/countries";

const country = ref<CountryDto>();
const props = defineProps<{ code: string }>();
const countriesList = useCountriesStore();

watch(country, () => {
  const borders = country.value?.borders;
  if (borders) {
    borders.forEach((code) => {
      const cached = countriesList.countriesHashMap[code];
      if (!cached) {
        countriesList.addCountry(code);
      }
    });
  }
});

watchEffect(async () => {
  const cachedCountry = () => countriesList.countriesHashMap[props.code];
  if (cachedCountry()) {
    country.value = cachedCountry();
    return;
  }
  const error = await countriesList.addCountry(props.code);
  if (!error) {
    country.value = cachedCountry();
  }
});
</script>

<template>
  <article>
    <BackButton />
    <div class="country" v-if="country">
      <img class="flag" :src="country.flag" :alt="`Flag of ${country.name}`" />
      <section>
        <h1 class="title">{{ country.name }}</h1>
        <div class="info">
          <div class="first-column">
            <KeyValue title="Native Name" :value="country.nativeName" />
            <KeyValue
              title="Population"
              :value="country.population.toLocaleString()"
            />
            <KeyValue title="Region" :value="country.region" />
            <KeyValue title="Sub Region" :value="country.subregion" />
            <KeyValue
              v-if="country.capital"
              title="Capital"
              :value="country.capital"
            />
          </div>
          <div class="second-column">
            <KeyValue
              title="Top Level Domain"
              :value="country.topLevelDomain.join(', ')"
            />
            <KeyValue
              title="Currencies"
              :value="country.currencies.map((c) => c.name).join(', ')"
            />
            <KeyValue
              title="Languages"
              :value="country.languages.map((lan) => lan.name).join(', ')"
            />
          </div>
        </div>
        <div class="borders-wrapper" v-if="country.borders?.length > 0">
          <span class="subtitle">Border Countries: </span>
          <div class="borders">
            <AppLink v-for="c in country.borders" :key="c" :to="c">
              {{ countriesList.countriesHashMap[c]?.name ?? c }}
            </AppLink>
          </div>
        </div>
      </section>
    </div>
  </article>
</template>

<style scoped>
article {
  align-items: flex-start;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.borders-wrapper {
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 5rem;
}

.borders {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.country {
  align-self: stretch;
  display: grid;
  gap: 8rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.first-column,
.second-column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.flag {
  width: 100%;
}

.info {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.title {
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: 2rem;
}

.subtitle {
  font-weight: var(--font-weight-medium);
  flex-shrink: 0;
}
</style>
