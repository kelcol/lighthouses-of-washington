<template>
  <div class="lighthouse-search">
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" role="navigation">
      <a class="navbar-brand" href="#">Lighthouses of Washington</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-bind:to="{name: 'About'}">About</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="row">

      <div class="form-group col-lg-3 col-md-12 col-sm-12">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mt-8">Select a Lighthouse</h5>
        </div>

        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center" @click="setFeatured(lighthouse);getCoords(lighthouse)"
            v-for="lighthouse in lighthouses" v-bind:key="lighthouse.itemLabel" :value="lighthouse">
            {{ lighthouse.itemLabel }}

          </li>
        </ul>
      </div>

      <div class="form-group col-lg-6 col-md-12 col-sm-12">

        <div class="card mb-5" v-for="lighthouse in lighthouses" :key="lighthouse.itemLabel">
          <h3 class="card-header mb-3">{{ lighthouse.itemLabel }}</h3>
          <ul>
            <!--TODO: Enable caching or download imgs to asset folder-->
            <img v-bind:src="lighthouse.image" />

            <li v-if="lighthouse.coordinate_location != null">
              <strong>Coordinates: </strong>{{ lighthouse.coordinate_location }}</li>

            <li v-if="lighthouse.inception != null">
              <strong>Inception: </strong>{{ lighthouse.inception }}</li>

            <li v-if="lighthouse.ARLHS_Lighthouse_ID != null">
              <strong>ARLHS ID:</strong> {{ lighthouse.ARLHS_Lighthouse_ID }}</li>

            <li v-if="lighthouse.USCG_Lighthouse_ID != null">
              <strong>USCG ID:</strong> {{ lighthouse.USCG_Lighthouse_ID }}</li>

            <li v-if="lighthouse.MarineTraffic_Lighthouse_ID != null">
              <strong>Marine Traffic ID:</strong> {{ lighthouse.MarineTraffic_Lighthouse_ID }}</li>

            <li v-if="lighthouse.NRHP_reference_number != null">
              <strong>NRHP Ref. No.:</strong> {{ lighthouse.NRHP_reference_number }}</li>

            <li v-if="lighthouse.GeoNames_ID != null">
              <strong>GeoNames ID:</strong> {{ lighthouse.GeoNames_ID }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import lighthouses from "../lighthouses.js";

export default {
  name: "LighthouseSearch",
  data() { 
    return lighthouses
  },
  components: {

  },
  methods: {
    setFeatured: function(lighthouse) {
      this.name = lighthouse.itemLabel;
      console.log(this.name);
    },
    getCoords: function(lighthouse) {
      let coords = lighthouse.coordinate_location;
      this.coords = coords.slice(6,-1).split(" ");
      this.lat = Math.ceil(this.coords[0]);
      this.long = Math.ceil(this.coords[1]);
      console.log(this.lat, this.long);
    }
  },
};
</script>

<style scoped>
img {
  width: auto !important;
  height: auto !important;
  max-width: 80%;
}
.form-group {
  margin: 5%;
}
ul {
  list-style-type: none;
  text-align: left;
}
.featured {
  color: blue;
}
</style>