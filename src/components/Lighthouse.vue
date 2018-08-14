<template>
  <div>

    <select v-model="featuredLighthouse" class="dropdown show">
      <option disabled value="">Please select one</option>
      <option v-for="lighthouse in lighthouses" v-bind:key="lighthouse.itemLabel" :value="lighthouse">{{ lighthouse.itemLabel }}</option>
    </select>

    <div>
      <h3>{{ featuredLighthouse.itemLabel }}</h3>

      <div v-if="featuredLighthouse">
        <lighthouse-details :featured="featuredLighthouse" v-bind:key="featuredLighthouse.itemLabel"></lighthouse-details>
        <lighthouse-weather :featured="featuredLighthouse" v-bind:key="featuredLighthouse.coordinate_location"></lighthouse-weather>
        <lighthouse-map :lat="featuredLat" :long="featuredLong"></lighthouse-map>
      </div>

      <div>
      </div>
    </div>

  </div>
</template>

<script>
import lighthouses from "../lighthouses.js";
import LighthouseDetails from "@/components/LighthouseDetails";
import LighthouseMap from "@/components/LighthouseMap";
import LighthouseWeather from "@/components/LighthouseWeather";

export default {
  name: "featuredLighthouse",
  data: function () {
    return {
      lighthouses: lighthouses,
      'featuredLighthouse': '',
    }
  },
  components: {
    'lighthouse-details': LighthouseDetails,
    'lighthouse-weather': LighthouseWeather,
    'lighthouse-map': LighthouseMap,
  },
  computed: {
    featuredLat() {
      return Number(this.featuredLighthouse.coordinate_location.replace(/[A-Z][a-z]*/, "").replace(/\(|\)/g, "").split(' ')[1]);
    },
    featuredLong() {
      return Number(this.featuredLighthouse.coordinate_location.replace(/[A-Z][a-z]*/, "").replace(/\(|\)/g, "").split(' ')[0]);
    }
  },
}
</script>

<style scoped>


  
</style>