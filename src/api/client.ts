import { create } from "apisauce";

const client = create({
  baseURL: "https://restcountries.com/v2",
  headers: { Accept: "application/json" },
});

export default client;
