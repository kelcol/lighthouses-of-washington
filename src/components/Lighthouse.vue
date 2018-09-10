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
                  <lighthouse-description :featured="featuredLighthouse" :key="featuredLighthouse.itemLabel"></lighthouse-description>

                  <v-container>
                    <v-layout row wrap>
                      <v-flex xs12 lg5 mb-3>
                        <v-expansion-panel popout>
                          <v-expansion-panel-content>
                            <div slot="header" color="pink">Current Weather</div>
                            <v-card color="blue-grey lighten-5">
                              <v-card-text>
                                <lighthouse-weather :featured="featuredLighthouse" v-bind:key="featuredLighthouse.lat"></lighthouse-weather>
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
                                <lighthouse-identifiers :featured="featuredLighthouse" v-bind:key="featuredLighthouse.itemLabel"></lighthouse-identifiers>
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
import LighthouseIdentifiers from "@/components/LighthouseIdentifiers";
import LighthouseMap from "@/components/LighthouseMap";
import LighthouseWeather from "@/components/LighthouseWeather";
import LighthouseDescription from "@/components/LighthouseDescription";

export default {
  name: "featuredLighthouse",
  data: function () {
    return {
      lighthouses: lighthouses,
      'featuredLighthouse': null,
    }
  },
  components: {
    'lighthouse-identifiers': LighthouseIdentifiers,
    'lighthouse-weather': LighthouseWeather,
    'lighthouse-map': LighthouseMap,
    'lighthouse-description': LighthouseDescription
  },
  computed: {
    featuredLat() {
      return Number(this.featuredLighthouse.lat);
    },
    featuredLong() {
      return Number(this.featuredLighthouse.lon);
    },
    getDirectionsURL() {
      let dirLat = this.featuredLighthouse.lat;
      let dirLong = this.featuredLighthouse.lon;
      return `https://www.google.com/maps/search/?api=1&query=${dirLat},${dirLong}`;
    }
  },
}
</script>

<style scoped>
 img {
   width: 90%
 }
</style>

