<template>
  <div id="details" v-if="featured">
<v-layout row>
      <v-flex>
        <v-card color="blue-grey lighten-5">
          <v-spacer></v-spacer>
          <v-list-tile-content>
              <ul>

                <!--TODO: Add admirality number -->

                <v-tooltip bottom>
                <span slot="activator">
                <li v-if="featured.ARLHS_Lighthouse_ID != null">
                  <strong>ARLHS ID:</strong>
                  <a target="_blank" :href="ARLHS_href">
                    {{ featured.ARLHS_Lighthouse_ID }}
                  </a>
                </li></span>
                <span>Amateur Radio Lighthouse Identifier</span>
                </v-tooltip>
                <v-tooltip bottom>
                <span slot="activator">
                <li v-if="featured.GeoNames_ID != null">
                  <strong>GeoNames ID:</strong>
                  <a target="_blank" :href="GeoNames_href">
                    {{ featured.GeoNames_ID }}
                  </a>
                </li></span>
                <span>GeoNames Identifier</span>
                </v-tooltip>
                <v-tooltip bottom>
                <span slot="activator">
                <li v-if="featured.GNIS_ID != null">
                  <strong>GNIS ID:</strong>
                  <a target="_blank" :href="GNIS_href">
                    {{ featured.GNIS_ID }}
                  </a>
                </li></span>
                <span>USGS Identifier</span>
                </v-tooltip>                
                <v-tooltip bottom>
                <span slot="activator">
                <li v-if="featured.MarineTraffic_Lighthouse_ID != null">
                  <strong>Marine Traffic Lighthouse ID:</strong>
                  <a target="_blank" :href="MT_href">
                    {{ featured.MarineTraffic_Lighthouse_ID }}
                  </a>
                </li></span>
                <span>Marine Traffic Lighthouse Identifier</span>
                </v-tooltip>                
                <v-tooltip bottom>
                <span slot="activator">
                <li v-if="featured.NRHP_reference_number != null">
                  <strong>NRHP Ref. No.:</strong>
                  <a target="_blank" :href="NHRP_href">
                    {{featured.NRHP_reference_number }}
                  </a>
                </li></span>
                <span>National Registry of Historic Places Reference No.</span>
                </v-tooltip>
                                
                 <v-tooltip bottom>
                <span slot="activator">
                <li v-if="featured.Online_List_of_Lights_id != null">
                  <strong>Online List of Lights ID:</strong> {{ featured.Online_List_of_Lights_id }}
                  </li></span>
                <span>Online List of Lights ID</span>
                </v-tooltip>                                
                 <v-tooltip bottom>
                <span slot="activator">
                <li v-if="featured.USCG_Lighthouse_ID != null">
                  <strong>USCG ID:</strong> {{ featured.USCG_Lighthouse_ID }}
                  </li></span>
                <span>United States Coast Guard Identifier</span>
                </v-tooltip>
              </ul>
            </v-list-tile-content>        
          </v-card>
        </v-flex>
      </v-layout>
                  <v-spacer></v-spacer>
                              <v-spacer></v-spacer>
    <!-- <img src="../assets/imgs/lime-kiln.jpg" /> -->
  </div>
</template>

<script>
export default {
  name: 'lighthouse-details',
  data() {
    return {     
    }
  },
  props: {
    featured: Object,
    required: true,
  },
  created() {},
  computed: {
    GeoNames_href() {
      let id = this.featured.GeoNames_ID;
      return `http://www.geonames.org/${id}`;
    },
    ARLHS_href() {
      let id = this.featured.ARLHS_Lighthouse_ID;
      return `http://wlol.arlhs.com/lighthouse/${id}.html`;
    },
    NHRP_href() {
      let id = this.featured.NRHP_reference_number;
      return `https://npgallery.nps.gov/SearchResults?search_param=all&allFields=${id}`;
    },
    GNIS_href() {
      let id = this.featured.GNIs_ID;
      return `https://geonames.usgs.gov/apex/f?p=gnispq:3:0::NO::P3_FID:${id}`
    },
    MT_href() {
      let id = this.featured.MarineTraffic_Lighthouse_ID;
      return `https://www.marinetraffic.com/en/ais/details/lights/${id}`
    },
    coords() {
      return this.featured.coordinate_location.replace(/[A-Z][a-z]*/, "").replace(/\(|\)/g, "").split(' ').join(', ');

    }
  }
}
</script>

<style scoped>

img {
  width: auto !important;
  height: auto !important;
  max-width: 45%;
}

</style>