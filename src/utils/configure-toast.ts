import type { App } from "vue";
import Toast, { POSITION, type PluginOptions } from "vue-toastification";

import "vue-toastification/dist/index.css";

export default function configureToast(app: App<Element>) {
  const options: PluginOptions = {
    position: POSITION.BOTTOM_RIGHT,
  };

  app.use(Toast, options);
}
