<template>
  <div>
    <h2></h2>
    
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

      <select v-model="lh" class="dropdown show">
        <option disabled value="">Please select one</option>
        <option v-for="lighthouse in lighthouses" v-bind:key="lighthouse.itemLabel" :value="lighthouse">{{ lighthouse.itemLabel }}</option>
      </select>

      <div v-if="lh">
        <featured :info="lh" v-bind:key="lh.itemLabel"></featured>
        <weather :info="lh" v-bind:key="lh.coordinate_location"></weather>        
        <gmap :lat="lhLat" :long="lhLong"></gmap>
    </div>
          
    <div>
    </div>
  </div>
</template>

<script>
import lighthouses from "../lighthouses.js";
import Featured from "@/components/Featured";
import GMap from "@/components/GMap";
import Weather from "@/components/Weather";

export default {
  name: "LighthouseSearch",
  data: function() { 
    return {   
      lighthouses: lighthouses,
      lh: '',
      coords: ''      
  }
  },
  components: {
    featured: Featured,
    weather: Weather,
    gmap: GMap,
   
  },
  methods: {    
    setActive: function(lighthouse, event) {
      this.lh = lighthouse;
      let activeItem = event.target;
      activeItem.className += ' featured';
    },
  },
computed: {
    lhLat () {
      return Number(this.lh.coordinate_location.replace(/[A-Z][a-z]*/,"").replace(/\(|\)/g, "").split(' ')[1]);
      },
    lhLong () {
      return Number(this.lh.coordinate_location.replace(/[A-Z][a-z]*/,"").replace(/\(|\)/g, "").split(' ')[0]);
      }
},
}

</script>
<style scoped>

.form-group {
  margin: 5%;
}

  
</style>