import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    steps: false,
    access_token:
      "pk.eyJ1IjoiY2hyaXMtcmV5ZXMiLCJhIjoiY2w4dzgycWt0MGJreTNvcW95ZnV0MXR4dSJ9.HqN8z3id_zr5JEaqd1prXA",
  },
});

export default directionsApi;
