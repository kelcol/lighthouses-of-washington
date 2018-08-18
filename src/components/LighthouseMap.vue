<template>
<v-container grid-list-xs>
  

  <div v-if="lat,long">   
      <gmap-map v-bind:center="center" v-bind:zoom="15" map-type-id="terrain" style="width: 100%; height: 800px">
        <gmap-marker v-bind:key="index" v-for="(m, index) in markers" v-bind:position="m.position" v-bind:clickable="true" v-bind:draggable="true"></gmap-marker>
      </gmap-map>
    </div>
    </v-container>
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
    }
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
  }
};
</script>

<style scoped>
gmap-map {
  padding: 0 auto;
}

</style>




