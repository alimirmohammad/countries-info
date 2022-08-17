import type { CountryDto } from "@/typings/dto";
import client from "./client";

async function getAllCountries() {
  return client.get<CountryDto[]>("/all");
}

async function getCountryByCode(code: string) {
  return client.get<CountryDto>(`/alpha/${code}`);
}

async function getCountriesByName(name: string) {
  return client.get<CountryDto[]>(`/name/${name}`);
}

async function getCountriesByRegion(region: string) {
  return client.get<CountryDto[]>(`/region/${region}`);
}

export {
  getAllCountries,
  getCountryByCode,
  getCountriesByName,
  getCountriesByRegion,
};
