import { computed, watch } from "vue";

import type { FilterData } from "@/typings/dto";
import router from "@/router";
import { useCountriesStore } from "@/stores/countries";

export default function subscribeToStore() {
  const store = useCountriesStore();
  const data = computed(() => ({
    region: store.region,
    query: store.query,
    sortBy: store.sortBy,
  }));
  watch(data, (newValue, oldValue) => {
    if (
      newValue.region !== oldValue.region ||
      newValue.query !== oldValue.query ||
      newValue.sortBy !== oldValue.sortBy
    ) {
      const query: Partial<FilterData> = {};

      if (store.region) query.region = store.region;
      if (store.query) query.query = store.query;
      if (store.sortBy) query.sortBy = store.sortBy;

      router.replace({
        name: "home",
        query,
      });
    }
  });
}
