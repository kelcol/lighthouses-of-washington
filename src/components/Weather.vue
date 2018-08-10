<template>
  <div class="form-group col-lg-3 col-md-12 col-sm-12">
    <div class="card mb-5">
      <h3 class="card-header mb-3">Weather (soon to be)</h3>
        <ul>
          <li>lat: {{ lat }}</li>
          <li>long: {{ long }}</li>
          <li>humidity: {{ results.main.humidity }}</li>
          <li>temp: {{ results.main.temp }}</li>
          <li>test: {{ results }}</li>

          <li>test: {{ results.weather }}</li>

          <li>description: {{ results.weather['description'] }}</li>
          <!-- <img v-bind:src="'http://openweathermap.org/img/w/' + weatherSummary.icon + '.png'" v-bind:alt="weatherSummary.main"> -->
      </ul> 
    </div>
    </div>
  
  </template>

<script>
import {API} from '@/common/api';

export default {
  name: 'weather',
  data(){
    return {         
      results: null,
      errors: [],
    }
  },
  props: ['info'],
  created () {
  },
  // FIX: [Vue warn]: Error in render: "TypeError: this.info.coordinate_location is undefined"
  computed: {
    lat () {
      return this.info.coordinate_location.replace(/[A-Z][a-z]*/,"").replace(/\(|\)/g, "").split(' ')[1].replace(/\..*/, "");
      },
    long () {
      return this.info.coordinate_location.replace(/[A-Z][a-z]*/,"").replace(/\(|\)/g, "").split(' ')[0].replace(/\..*/, "");
      }
},
methods: {
    getWeather: function () {
      console.log('Getting weather...');
      API.get('weather', {
        params: {
          lat: this.lat,
          lon: this.long
        }
      })
      .then(response => {
        this.results = response.data
        console.log(response);
      })
      .catch(error => {
        this.errors.push(error.message)
        console.log(error);
      });
    }
  },
  beforeMount () {
    this.getWeather();
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


// works
// http://api.openweathermap.org/data/2.5/weather?lat=3&lon=-141&APPID=8e5eadaad6674b9ea1e7e66f59794d34&units=imperial

// doesn't work
// http://api.openweathermap.org/data/2.5/weather?q=lat=3&lon=-141&APPID=8e5eadaad6674b9ea1e7e66f59794d34&units=imperial