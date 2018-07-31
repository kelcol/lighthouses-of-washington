<template>
<div class="form-group col-lg-6 col-md-12 col-sm-12">
  <div class="card mb-5">
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

</template>

<script>
import lighthouses from "../lighthouses.js";

export default {
  name: 'featured',
  data () {
    return lighthouses
  },
}

  
</script>



