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
      'featuredLighthouse': {
        "itemLabel": "Admiralty Head Light",
        "image": "http://commons.wikimedia.org/wiki/Special:FilePath/Admiralty%20head%20Lighthouse.jpg",
        "coordinate_location": "Point(-122.681111 48.160833)",
        "inception": "1903-01-01T00:00:00Z",
        "service_entry": "1903-01-01T00:00:00Z",
        "service_retirement": "1922-01-01T00:00:00Z",
        "ARLHS_Lighthouse_ID": "USA002"
      },
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      
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