<template>
  <div class="form-group col-lg-4 col-md-12 col-sm-12">
    <div class="card mb-5">
      <h3 class="card-header mb-3">Map</h3>
      <h3>lat: {{ lat }}</h3>
      <h3>long: {{ long }}</h3>

      <gmap-map v-bind:center="center" v-bind:zoom="15" map-type-id="terrain" style="width: 500px; height: 300px">
        <gmap-marker v-bind:key="index" v-for="(m, index) in markers" v-bind:position="m.position" v-bind:clickable="true" v-bind:draggable="true"></gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps'

export default {  
  data() {
  return {  
    center: { 
      lat: this.lat, 
      lng: this.long },
    markers: [
      {        
        position: { 
          lat: this.lat, 
          lng: this.long },        
      }
    ]
  };
},

// watch: {
//   lat: function (newLat) {
//     this.lat = newLat; 
//     console.log('Prop changed: ', newLat, ' | was: ', lat)
//     },
//   long: function (newLong) {
//     this.long = newLong;
//     console.log('Prop changed: ', newLong, ' | was: ', long);
//     },


//   lat: function(newLat) {
//     console.log('Prop changed: ', newLat, ' | was: ', oldLat);
//   },
//     long: function(newLong, oldLong) {
//     console.log('Prop changed: ', newLong, ' | was: ', oldLong);
//     let long = newLong;
//   }
// },
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
}
};
</script>

