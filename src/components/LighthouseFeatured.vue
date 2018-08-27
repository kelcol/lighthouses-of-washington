<template>
  <v-content>
    <v-container fluid>
      <v-container>
        <v-layout wrap align-center>
          <v-flex xs12 sm12 d-flex>
            <v-select v-model="featuredLighthouse" :hint="`${select.itemLabel}`" :items="lighthouses" label="Select" item-value="`${featuredLighthouse}`"
              item-text="itemLabel" solo return-object></v-select>
          </v-flex>
        </v-layout>
      </v-container>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card v-if="featuredLighthouse">
            <v-card-media src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" height="400px">
              <lighthouse-map :lat="featuredLat" :long="featuredLong"></lighthouse-map>
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ featuredLighthouse.itemLabel }}</h3>
              </div>
            </v-card-title>
            <v-card-text>
              <v-expansion-panel>
                <v-expansion-panel-content>
                  <div slot="header">About the lighthouse</div>
                  <v-card>
                    <v-card-text>
                      <lighthouse-details :featured="featuredLighthouse" v-bind:key="featuredLighthouse.itemLabel"></lighthouse-details>
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <div slot="header">Current Weather</div>
                  <v-card>
                    <v-card-text>
                      <lighthouse-weather :featured="featuredLighthouse" v-bind:key="featuredLighthouse.coordinate_location"></lighthouse-weather>
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
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
      select: {},
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
  methods: {

  }
}
</script>

<style scoped>


  
</style>