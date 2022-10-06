import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hyaXMtcmV5ZXMiLCJhIjoiY2w4dzgycWt0MGJreTNvcW95ZnV0MXR4dSJ9.HqN8z3id_zr5JEaqd1prXA";

if (!navigator.geolocation) {
  alert("Tu navegador no soporta el GeoLocation");
  throw new Error("Tu navegador no soporta el GeoLocation");
}

createApp(App).use(store).use(router).mount("#app");
