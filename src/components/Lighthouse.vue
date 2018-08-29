<template>
  <v-content>
    <v-container fluid>
      <v-jumbotron>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-3">Welcome!</h3>
              <span class="subheading">Thanks for visiting the <strong>Lighthouse Crawler</strong>, your complete
                stop for information about Washington lighthouses.
                Washington is home to over 18 lighthouses, many of them still operational. Visit them all!</span>
              <v-divider class="my-3"></v-divider>
              <div class="title mb-3">Where do you want to go?</div>
              <v-select v-model="featuredLighthouse" :items="lighthouses" label="Select a lighthouse " item-value="featured"
                item-text="itemLabel" solo return-object>
              </v-select>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
      <v-container grid-list-xs v-if="featuredLighthouse">
        <v-layout>
          <v-layout>
            <v-flex xs12 sm8 offset-sm2>
              <v-card>
                <v-card-media position="relative" src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" height="400px">
                  <lighthouse-map :lat="featuredLat" :long="featuredLong"></lighthouse-map>                  
                </v-card-media>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{ featuredLighthouse.itemLabel }}</h3>
                  </div>
                </v-card-title>

                <v-card-text>
                  <a target="_blank" :href="getDirectionsURL">Get Directions</a>
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
                  <v-btn absolute dark fab bottom right color="blue ligthen-4"> 
                      <v-icon alt="Get Directions">map</v-icon>
                  </v-btn>
                </v-card-text>

              </v-card>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>
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
      'featuredLighthouse': null,
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
    },
    getDirectionsURL() {
      let dirLat = this.featuredLighthouse.coordinate_location.replace(/[A-Z][a-z]*/, "").replace(/\(|\)/g, "").split(' ')[1];

      let dirLong = this.featuredLighthouse.coordinate_location.replace(/[A-Z][a-z]*/, "").replace(/\(|\)/g, "").split(' ')[0];

      return `https://www.google.com/maps/search/?api=1&query=${dirLat},${dirLong}`
    }    
  },
}
</script>

<style scoped>

ul {
  lists-style: none;
}  
</style>

