<template>
    <div id="featured" style="color: red">
      <h2>Test Area!!! Trying to get just featured to show here</h2>
            <div class="form-group col-lg-6 col-md-12 col-sm-12">
        <div v-for="lighthouse in lighthouses" :key="lighthouse.itemLabel">
          <div v-if="featured">
          <h3>{{lighthouse.itemLabel}}</h3>
          <ul>
            <!--TODO: Enable caching or download imgs to asset folder-->
            <img v-bind:src="lighthouse.image" />
            <li>Coordinates: {{lighthouse.coordinate_location}}</li>
            <!-- <li>{{lighthouse.image}}</li> -->
            <li>ARLHS ID: {{lighthouse.ARLHS_Lighthouse_ID}}</li>            
            <li>USCG ID: {{lighthouse.USCG_Lighthouse_ID}}</li>
            
            <li>Marine Traffic ID: {{lighthouse.MarineTraffic_Lighthouse_ID}}</li>
            <li>NRHP Ref. No.: {{lighthouse.NRHP_reference_number}}</li>
          </ul>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import lighthouses from "../lighthouses.js";

export default {
  name: "featured",
  data() {
    return {
      lighthouses
    };
  }
};
</script>



