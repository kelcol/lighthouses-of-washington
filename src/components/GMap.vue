<template>
      <div class="form-group col-lg-9 col-md-12 col-sm-12">
     <h2>Hi</h2> 
    <gmap-map v-bind:center="center" v-bind:zoom="7" style="height: 300px">
    <gmap-marker v-bind:key="index" v-for="(m, index) in markers" v-bind:position="m.position" v-bind:clickable="true" v-bind:draggable="true"></gmap-marker></gmap-map>
  </div>
  
</template>

<script>


import * as VueGoogleMaps from 'vue2-google-maps'

export default {
    name: 'gmap',
  data() {
  return {
    center: { lat: -3.350235, lng: 111.995865 },
    // center: { lat: lat, lng: long },
    markers: [
      {
        position: { lat: -0.48585, lng: 117.1466 },
        // position: { lat: lat, lng: long }
      }
    ]
  };
},
computed: {
    lat () {
        let latitude = Number(this.info.coordinate_location.replace(/[A-Z][a-z]*/,"").replace(/\(|\)/g, "").split(' ')[1].replace(/\..*/, ""));
      console.log(latitude);
      },
    long () {
      return Number(this.info.coordinate_location.replace(/[A-Z][a-z]*/,"").replace(/\(|\)/g, "").split(' ')[0].replace(/\..*/, ""));
      },
},
props:['info']
};
</script>

<style>

</style>
