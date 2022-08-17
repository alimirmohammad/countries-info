import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import type { FilterData } from "./typings/dto";
import router from "./router";
import { useCountriesStore } from "./stores/countries";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

useCountriesStore().$subscribe((mutation, state) => {
  const mutationKey = Array.isArray(mutation.events)
    ? mutation.events.map((m) => m.key).join(", ")
    : mutation.events.key;

  if (["region", "query", "sortBy"].includes(mutationKey)) {
    const query: Partial<FilterData> = {};

    if (state.region) query.region = state.region;
    if (state.query) query.query = state.query;
    if (state.sortBy) query.sortBy = state.sortBy;

    router.replace({
      name: "home",
      query,
    });
  }
});

app.mount("#app");
