<template>
    <div id="lhmap" v-if="lat,long">   
      <gmap-map id="lhmap" v-bind:center="center" v-bind:zoom="10" map-type-id="terrain">
        <gmap-marker v-bind:key="index" v-for="(m, index) in markers" v-bind:position="m.position" v-bind:clickable="true" v-bind:draggable="true"></gmap-marker>
      </gmap-map>
      <div class="text-xs-center">
        <v-card-actions>
        <v-btn flat color="orange">
          <a target="_blank" :href="directionsURL">
            Get Directions
          </a>
        </v-btn>   
      </v-card-actions>                           
      </div>      
    </div>
    
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps'
import lighthouses from "../lighthouses.js";



export default {
  data() {
    return {
    }
}
}
</script>

<style scoped>
#lhmap {
  width: 100%; 
  height: 500px}

</style>




