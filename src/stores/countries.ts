import { defineStore } from "pinia";

import type { CountryDto, Region, SortBy } from "@/typings/dto";
import { getAllCountries, getCountryByCode } from "@/api/countries";

export const useCountriesStore = defineStore({
  id: "countries",
  state: () => ({
    countries: [] as CountryDto[],
    region: "" as Region,
    query: "",
    sortBy: "" as SortBy,
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
      const filteredCountries = state.countries.filter(
        (country) =>
          country.region.toLowerCase().includes(state.region.toLowerCase()) &&
          country.name.toLowerCase().includes(state.query.toLowerCase())
      );
      return sort(filteredCountries, state.sortBy);
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

function sort(countries: CountryDto[], sortBy: SortBy) {
  if (sortBy === "Name ↑") {
    return countries.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortBy === "Name ↓") {
    return countries.sort((a, b) => b.name.localeCompare(a.name));
  }
  if (sortBy === "Population ↑") {
    return countries.sort((a, b) => a.population - b.population);
  }
  if (sortBy === "Population ↓") {
    return countries.sort((a, b) => b.population - a.population);
  }
  return countries;
}
