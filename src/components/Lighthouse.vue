<template>
  <v-app>

      <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>




    <div class="text-xs-center">
    <v-menu offset-y>
      <v-btn
        slot="activator"
        color="success"
        dark
      >
        Select a Lighthouse
      </v-btn>
      <v-list v-model="featuredLighthouse">
        <v-list-tile
          v-for="(lighthouse, index) in lighthouses"          
          :key="index"
          @click=""
        >
          <v-list-tile-title>{{ lighthouse.itemLabel }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>

<v-container grid-list-xs>
  <v-layout row wrap>
    

  <v-tabs
    centered
    color="brown lighten-3"
    dark
    icons-and-text
    grow
  >
    <v-tabs-slider color="green"></v-tabs-slider>

    <v-tab href="#tab-1">
      Information
      <v-icon>star</v-icon>
    </v-tab>

    <v-tab href="#tab-2">
      Weather
      <v-icon>cloud</v-icon>
    </v-tab>

    <v-tab href="#tab-3">
      Map
      <v-icon>map</v-icon>
    </v-tab>

    <v-tab-item
      v-for="i in 3"
      :id="'tab-' + i"
      :key="i"
    >
      <v-card flat>
        <v-card-text>{{ text }}</v-card-text>
              <v-card flat>
        <lighthouse-details :featured="featuredLighthouse" v-bind:key="featuredLighthouse.itemLabel"></lighthouse-details>
        <lighthouse-weather></lighthouse-weather>
        <lighthouse-map></lighthouse-map>
      </v-card>
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
      'featuredLighthouse': '',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      items: [
          {
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
        ]
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