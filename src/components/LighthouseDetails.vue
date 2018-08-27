<template>
  <div id="weather" v-if="featured">
    <v-layout row>
      <v-flex>
        <v-card>        
            <v-list-tile-content>
              <ul>
                  <li>
                  <strong>Name: </strong>{{ featured.itemLabel }}
                </li>
                <li v-if="featured.inception != null">
                  <strong>Inception: </strong>{{ featured.inception.substring(0, 4) }}</li>
                <li v-if="featured.ARLHS_Lighthouse_ID != null">
                  <strong>ARLHS ID:</strong>
                  <a target="_blank" :href="ARLHS_href">
                    {{ featured.ARLHS_Lighthouse_ID }}
                  </a>
                </li>
                <li v-if="featured.USCG_Lighthouse_ID != null">
                  <strong>USCG ID:</strong> {{ featured.USCG_Lighthouse_ID }}</li>
                <li v-if="featured.NRHP_reference_number != null">
                  <strong>NRHP Ref. No.:</strong>
                  <a target="_blank" :href="NHRP_href">
                    {{featured.NRHP_reference_number }}
                  </a>
                </li>
                <li v-if="featured.GeoNames_ID != null">
                  <strong>GeoNames ID:</strong>
                  <a target="_blank" :href="GeoNames_href">
                    {{ featured.GeoNames_ID }}
                  </a>
                </li>
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
    return {}
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
    coords() {
      return this.featured.coordinate_location.replace(/[A-Z][a-z]*/, "").replace(/\(|\)/g, "").split(' ').join(', ');

    }
  }
}
</script>

<style scoped>

</style>