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
        <v-layout >

            <v-flex xs12 sm8 offset-sm2>
              <v-card>

                <!--TODO: Move map to bottom of card and put lighthouse image(s) on top-->
                <!-- <v-card-media :src="featuredLighthouse.image" position="relative" height="400px"> -->

                <v-card-media position="relative" height="400px">
                  <lighthouse-map :lat="featuredLat" :long="featuredLong"></lighthouse-map>
                  <img  v-if="featuredLighthouse.image !=null" :src="featuredLighthouse.image"/>
                </v-card-media>
                <v-btn absolute dark fab left bottom color="blue ligthen-4" target="_blank" alt="Get directions, links to external site" v-bind:href="getDirectionsURL">
                    <v-icon alt="Get Directions">map</v-icon>
                  </v-btn>

                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{ featuredLighthouse.itemLabel }}</h3>
                  </div>
                </v-card-title>

                <v-card-text>
                  <!-- <a target="_blank" :href="getDirectionsURL">Get Directions</a> -->
                  <p>
                    <!-- same inception and no given service entry date-->
                    <span v-if="featuredLighthouse.inception != null && featuredLighthouse.service_entry == null">{{
                      featuredLighthouse.itemLabel }} was built in {{ featuredLighthouse.inception.substring(0, 4) }}.</span>

                    <!-- same inception and service entry date-->
                    <span v-if="featuredLighthouse.inception != null && featuredLighthouse.service_entry != null && featuredLighthouse.service_entry == featuredLighthouse.inception">{{
                      featuredLighthouse.itemLabel }} was constructed and first lit in {{
                      featuredLighthouse.inception.substring(0, 4) }}.</span>

                    <!-- same inception and different service entry date-->
                    <span v-if="featuredLighthouse.inception != null && featuredLighthouse.service_entry != null && featuredLighthouse.service_entry != featuredLighthouse.inception">{{
                      featuredLighthouse.itemLabel }} was constructed in {{ featuredLighthouse.inception.substring(0,
                      4) }} and first lit in {{ featuredLighthouse.service_entry.substring(0, 4) }}.</span>

                    <!-- physical and other characteristics -->

                    <!--Known height-->
                    <span v-if="featuredLighthouse.height != null">It has a height of {{ featuredLighthouse.height }} meters above sea level,</span>

                    <!--Unnown height-->
                    <span v-if="featuredLighthouse.height == null && featuredLighthouse.focal_height|featuredLighthouse.height|featuredLighthouse.lighthouse_range|featuredLighthouse.light_characteristic_of_lighthouse != null">It has </span><span v-if="featuredLighthouse.focal_height != null"> a focal height of {{ featuredLighthouse.focal_height }} meters, </span><span v-if="featuredLighthouse.light_characteristic_of_lighthouse != null"><span v-if="featuredLighthouse.lighthouse_range != null"> a range of {{featuredLighthouse.lighthouse_range }} nautical miles, </span>and a light characteristic of {{ featuredLighthouse.light_characteristic_of_lighthouse }}.  </span><span v-if="featuredLighthouse.service_retirement != null"> This lighthouse was retired in {{ featuredLighthouse.service_retirement.substring(0, 4) }}. </span><span v-if="featuredLighthouse.NRHP_reference_number != null">{{ featuredLighthouse.itemLabel }} is listed on the National Register of Historic Places.</span>
                  </p>

                  <v-container>
                    <v-layout row wrap>
                      <v-flex xs12 lg5 mb-3>
                        <v-expansion-panel popout>
                          <v-expansion-panel-content>
                            <div slot="header" color="pink">Current Weather</div>
                            <v-card color="blue-grey lighten-5">
                              <v-card-text>
                                <lighthouse-weather :featured="featuredLighthouse" v-bind:key="featuredLighthouse.coordinate_location"></lighthouse-weather>
                              </v-card-text>
                            </v-card>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-flex>

                      <v-flex xs12 lg5 offset-lg2>
                        <v-expansion-panel inset>
                          <v-expansion-panel-content>
                            <div slot="header">Lighthouse Identifiers</div>
                            <v-card color="blue-grey lighten-5">
                              <v-card-text>
                                <lighthouse-details :featured="featuredLighthouse" v-bind:key="featuredLighthouse.itemLabel"></lighthouse-details>
                              </v-card-text>
                            </v-card>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>

              </v-card>

            </v-flex>

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

      return `https://www.google.com/maps/search/?api=1&query=${dirLat},${dirLong}`;
    }
  },
}
</script>
