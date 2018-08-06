<template>
  <div class="form-group col-lg-6 col-md-12 col-sm-12">
    <div class="card mb-5">
      <h3 class="card-header mb-3">{{ info.itemLabel }}</h3>
          
      <ul>
        <!--TODO: Enable caching or download imgs to asset folder-->
        <img v-bind:src="info.image" />
  
        <li v-if="info.coordinate_location != null">
          <strong>Coordinates: </strong>{{ info.coordinate_location.substring(6, 22).split(' ').join(', ') }}</li>
  
        <li v-if="info.inception != null">
          <strong>Inception: </strong>{{ info.inception.substring(0, 4) }}</li>
  
        <li v-if="info.ARLHS_Lighthouse_ID != null">
          <strong>ARLHS ID:</strong> 
            <a target="_blank" :href="ARLHS_href">
                {{ info.ARLHS_Lighthouse_ID }}
            </a>
          </li>
  
        <li v-if="info.USCG_Lighthouse_ID != null">
          <strong>USCG ID:</strong> {{ info.USCG_Lighthouse_ID }}</li>
  
        <li v-if="info.NRHP_reference_number != null">
          <strong>NRHP Ref. No.:</strong> 
            <a target="_blank" :href="NHRP_href">
                {{info.NRHP_reference_number }}
            </a>
          </li>
  
        <li v-if="info.GeoNames_ID != null">
          <strong>GeoNames ID:</strong> 
          <a target="_blank" :href="GeoNames_href">
            {{ info.GeoNames_ID }}
          </a>
        </li>

      </ul>
  
    </div>
    </div>
  
  </template>

<script>
import axios from 'axios';

export default {
  name: 'featured',
  data () {
    return {
      results: [],
      errors: []
    }    
  },
  props: ['info'],
  created () {
  },
  computed: {
    GeoNames_href () {
      let id = this.info.GeoNames_ID;
      return `http://www.geonames.org/${id}`;
    },
    ARLHS_href () {
      let id = this.info.ARLHS_Lighthouse_ID;
      return `http://wlol.arlhs.com/lighthouse/${id}.html`;
    },
    NHRP_href () {
      let id = this.info.NRHP_reference_number;
      return `https://npgallery.nps.gov/SearchResults?search_param=all&allFields=${id}`;
  }
}
}

</script>

<style scoped>
img {
  width: auto !important;
  height: auto !important;
  max-width: 40%;
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