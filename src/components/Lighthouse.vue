<template>
  <v-app>

    <v-carousel>
      <v-carousel-item v-for="(image,i) in images" :key="i" :src="image.src"></v-carousel-item>
    </v-carousel>

    <div class="text-xs-center">
      <v-container fluid grid-list-xl>
        <v-layout wrap align-center>

          <v-flex xs12 sm6 d-flex>
            <v-select v-model="featuredLighthouse" :hint="`${select.itemLabel}`" :items="lighthouses" label="Select" item-value="`${featuredLighthouse}`"
              item-text="itemLabel" solo return-object></v-select>
          </v-flex>
        </v-layout>
      </v-container>
    </div>



    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-tabs centered color="brown lighten-3" dark icons-and-text grow>
          <v-tabs-slider color="green"></v-tabs-slider>
          
          <!--TODO: Set this up to use router hrefs instead-->
          <v-tab>
            Information
            <v-icon>star</v-icon>
          </v-tab>
          <v-tab>
            Weather
            <v-icon>cloud</v-icon>
          </v-tab>
          <v-tab>
            Map
            <v-icon>map</v-icon>
          </v-tab>

          <!-- Wikidata Content -->
          <v-tab-item>
            <v-card flat>
              <v-card-text> 
                <lighthouse-details :featured="featuredLighthouse" v-bind:key="featuredLighthouse.itemLabel"></lighthouse-details>
              </v-card-text>
              </v-card>
          </v-tab-item>

          <!-- Weather Content -->
          <v-tab-item>
            <v-card flat>
              <v-card-text> 
                <lighthouse-weather :featured="featuredLighthouse" v-bind:key="featuredLighthouse.coordinate_location"></lighthouse-weather>
              </v-card-text>
              </v-card>
          </v-tab-item>

          <!-- Map Content -->
          <v-tab-item>
            <v-card flat>
              <v-card-text> 
                <lighthouse-map :lat="featuredLat" :long="featuredLong"></lighthouse-map>
              </v-card-text>
          </v-card>
          </v-tab-item>

        </v-tabs>
      </v-layout>
    </v-container>

  </v-app>
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
      images: [{
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ],
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
}
</script>

<style scoped>


  
</style>