<template>
  <div>
    
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
          <li class="list-group-item d-flex justify-content-between align-items-center" id="lighthouse" @click="setActive(lighthouse, $event)"
            v-for="lighthouse in lighthouses" v-bind:key="lighthouse.itemLabel" :value="lighthouse">
            {{ lighthouse.itemLabel }}

          </li>
        </ul>

      </div>

    <featured v-bind:info="lh" v-bind:key="lh.itemLabel"></featured>

    </div>
          
    <div>
    </div>
  </div>
</template>

<script>

import lighthouses from "../lighthouses.js";
import Featured from "@/components/Featured";

export default {
  name: "LighthouseSearch",
  data: function() { 
    return {
      lighthouses: lighthouses,
      lh: ''
  }
  },
  components: {
    featured: Featured,
  },
  methods: {    
    setActive: function(lighthouse, event) {
      this.lh = lighthouse;
      console.log(this.lh.itemLabel);
      let activeItem = event.target;
      activeItem.className += ' featured';
    },
  },
  computed: {
  }
};

</script>
<style scoped>

.form-group {
  margin: 5%;
}

.featured {
      color: #42b983;
    }
  
</style>