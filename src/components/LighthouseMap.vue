<template>
  <div id="lhmap" v-if="lat,long">   
      <gmap-map id="lhmap" v-bind:center="center" v-bind:zoom="10" map-type-id="terrain">
        <gmap-marker v-bind:key="index" v-for="(m, index) in markers" v-bind:position="m.position" v-bind:clickable="true" v-bind:draggable="true"></gmap-marker>
      </gmap-map>
      <div class="text-xs-center">                                
      </div>
  
    </div>
    
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps'

export default {
  data() {
    return {
      result: null,
    };
  },
  computed: {
    center: function () {
      return {
        lat: this.lat,
        lng: this.long
      }
    },
    markers: function () {
      return [{
        position: {
          lat: this.lat,
          lng: this.long
        },
      }, ]
    },
  },
  props: {
    lat: {
      type: Number,
      required: true,
      default: 48.160833
    },
    long: {
      type: Number,
      required: true,
      default: -122.681111
    }
  }, methods: {
    test: function() {
      console.log(123)
    }
  }
};
</script>

<style scoped>
#lhmap {
  width: 100%; 
  height: 500px}

</style>




