<template>
      <div class="form-group col-lg-9 col-md-12 col-sm-12">
     <h2>Map (not working yet but close-ish)</h2> 
    <gmap-map v-bind:center="center" v-bind:zoom="10" style="height: 300px">
    <gmap-marker v-bind:key="index" v-for="(m, index) in markers" v-bind:position="m.position" v-bind:clickable="true" v-bind:draggable="true"></gmap-marker></gmap-map>
  </div>  
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps'

export default {
  data() {
  return {
    center: { lat: 48.160833, lng: -122.681111 },
    // center: { lat: this.lat, lng: this.long },
    markers: [
      {
        position: { lat: 48.160833, lng: -122.681111 },
        // position: { lat: +this.lat, lng: +this.long },        
      }
    ]
  };
},
computed: {
    lat () {
        return Number(this.info.coordinate_location.replace(/[A-Z][a-z]*/,"").replace(/\(|\)/g, "").split(' ')[1]);
      },
    long () {
      return Number(this.info.coordinate_location.replace(/[A-Z][a-z]*/,"").replace(/\(|\)/g, "").split(' ')[0]);
      },
},
props:['info']
};
</script>

<style>

</style>
