<template>
  <div id="map" :class="map_class" ref="mapContainer"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

defineProps({
  map_class: {
    type: String,
    required: true,
  },
});

// Leaflet icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL(
    "leaflet/dist/images/marker-icon-2x.png",
    import.meta.url
  ).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url)
    .href,
});

const mapContainer = ref(null);

// Define markers locally
const markers = [
  {
    position: [1.3407, 36.7568],
    popupText: "<span class='text-white'>The Well Mall, Nairobi</span>",
  },
  {
    position: [0.053, 35.7298],
    popupText: "<span class='text-white'>Eldama Ravine, Baringo</span>",
  },
  {
    position: [52.6696, 0.7266],
    popupText: "<span class='text-white'>Oakham, United Kingdom</span>",
  },
];

onMounted(() => {
  const map = L.map(mapContainer.value).setView([0.0236, 37.9062], 6);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  // Loop through and add local markers
  markers.forEach((marker) => {
    L.marker(marker.position)
      .addTo(map)
      .bindPopup(marker.popupText || "Marker");
  });
});
</script>
<!-- 
<template>
  <div :class="map_class" ref="mapContainer"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "MapboxMap",
  props: {
    map_class: {
      type: String,
      default: "mapbox-container",
    },
  },
  data() {
    return {
      markers: [
        { lng: 36.8219, lat: -1.2921, popup: "📍 Nairobi" },
        { lng: 37.0741, lat: -0.5143, popup: "📍 Machakos" },
        { lng: 36.9583, lat: -1.1027, popup: "📍 Kiambu" },
      ],
    };
  },
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZ2Vvcmdla2ltYWd1dCIsImEiOiJjbWJ3OTJqcWMwdXl0MmlzMTkzaGJocWl1In0.7PFlSGQ1ulYTAgBTooFySQ";

    const validMarkers = this.markers.filter(
      (m) =>
        typeof m.lng === "number" &&
        typeof m.lat === "number" &&
        !isNaN(m.lng) &&
        !isNaN(m.lat)
    );

    const map = new mapboxgl.Map({
      container: this.$refs.mapContainer,
      style: "mapbox://styles/mapbox/navigation-day-v1",
      center: validMarkers.length
        ? [validMarkers[0].lng, validMarkers[0].lat]
        : [37.6213, -1.2921],
      zoom: 9,
    });

    validMarkers.forEach(({ lng, lat, popup }) => {
      const marker = new mapboxgl.Marker().setLngLat([lng, lat]);

      if (popup) {
        const popupElement = new mapboxgl.Popup().setHTML(popup);
        marker.setPopup(popupElement);
      }

      marker.addTo(map);
    });
  },
};
</script> -->
