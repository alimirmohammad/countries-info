import { defineStore } from "pinia";

import type { CountryDto } from "@/typings/dto";
import { getAllCountries, getCountryByCode } from "@/api/countries";

export const useCountriesStore = defineStore({
  id: "countries",
  state: () => ({
    countries: [] as CountryDto[],
    region: "",
    query: "",
    cached: false,
  }),
  getters: {
    countriesHashMap(state) {
      return state.countries.reduce((acc, country) => {
        acc[country.alpha3Code] = country;
        return acc;
      }, {} as Record<string, CountryDto>);
    },
    processedCountries(state) {
      return state.countries.filter(
        (country) =>
          country.region.toLowerCase().includes(state.region.toLowerCase()) &&
          country.name.toLowerCase().includes(state.query.toLowerCase())
      );
    },
  },
  actions: {
    async setCountries() {
      const response = await getAllCountries();
      if (response.ok) {
        this.countries = response.data!;
        this.cached = true;
      } else {
        return response.problem;
      }
    },
    async addCountry(code: string) {
      const response = await getCountryByCode(code);
      if (response.ok) {
        this.countries.push(response.data!);
      } else {
        return response.problem;
      }
    },
  },
});
