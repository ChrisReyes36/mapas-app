import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 3,
    language: "es",
    access_token:
      "pk.eyJ1IjoiY2hyaXMtcmV5ZXMiLCJhIjoiY2w4dzgycWt0MGJreTNvcW95ZnV0MXR4dSJ9.HqN8z3id_zr5JEaqd1prXA",
  },
});

export default searchApi;
