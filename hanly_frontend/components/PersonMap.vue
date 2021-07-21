<template>
  <div id="map"></div>
</template>

<script>
import L from 'leaflet'

export default {
  props: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.view()
  },
  methods: {
    view() {
      const map = L.map('map').setView([this.latitude, this.longitude], 15)

      const pinIcon = L.icon({
        iconUrl:
          'https://res.cloudinary.com/dyozxhhns/image/upload/v1584632997/marker.svg',
        shadowUrl:
          'https://res.cloudinary.com/dyozxhhns/image/upload/v1584633039/marker-shadow.png',
        iconSize: [18, 25],
        iconAnchor: [0, 0],
        shadowSize: [26, 20],
        shadowAnchor: [0, -5]
      })

      L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        id: 'streets'
      }).addTo(map)

      L.marker([this.latitude, this.longitude], { icon: pinIcon }).addTo(map)
    }
  }
}
</script>

<style lang="scss" scoped>
#map {
  height: 100%;
}
</style>
