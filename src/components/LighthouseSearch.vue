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
        <!-- <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" placeholder="Search" type="text">
          <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
        </form> -->
      </div>
    </nav>

    <!-- <div class="alert alert-dismissible alert-warning">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <h4 class="alert-heading"></h4>
      <p class="mb-0">Not sure which lighthouse to visit? Let us pick a
        <a href="#" class="alert-link">random lighthouse</a> for you.</p>
    </div> -->

    <div class="row">
      <div class="form-group col-lg-3 col-md-12 col-sm-12">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mt-8">Select a Lighthouse</h5>
        </div>

        <ul class="list-group">
          <li v-for="lighthouse in lighthouses" v-bind:key="lighthouse.lighthouseLabel" class="list-group-item d-flex justify-content-between align-items-center list-group-item-action">
            {{ lighthouse.lighthouseLabel }}
          </li>
        </ul>
      </div>
      <div class="form-group col-lg-6 col-md-12 col-sm-12">
        <div v-for="lighthouse in lighthouses" :key="lighthouse.lighthouseLabel">

          <h3>{{lighthouse.lighthouseLabel}}</h3>
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
  import featured from '@/components/Featured'
  import lighthouses from '../lighthouses.js';

  export default {
    name: 'LighthouseSearch',
    data() {
      return lighthouses;
    },
    components: {
      featured
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
    margin: 5%
  }
  ul {
  list-style-type: none;
  text-align: left
}

</style>
