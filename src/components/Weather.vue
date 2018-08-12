<template>
  <div class="form-group col-lg-3 col-md-12 col-sm-12">
    <div class="card mb-5">
      <h3 class="card-header mb-3">Current Weather</h3>
        <ul>
          <img v-bind:src="`http://openweathermap.org/img/w/${result.weather[0].icon}.png`" v-bind:alt="result.weather[0].description">
          <li><strong>Description:</strong> {{ result.weather[0].description }}</li>
          <li><strong>Temperature:</strong> {{ result.main.temp }}&#176;F</li>
          <li><strong>Humidity:</strong> {{ result.main.humidity }}</li>
          <li><strong>Wind Speed:</strong> {{ result.wind.speed}} mph</li>  
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
      result: null,
      // TODO: Add error messaging
      errors: [],
    }
  },
  props: ['info'],
  created () {
  },

  computed: {
    lat () {
      return this.info.coordinate_location.replace(/[A-Z][a-z]*/,"").replace(/\(|\)/g, "").split(' ')[1].replace(/\..*/, "");
      },
    long () {
      return this.info.coordinate_location.replace(/[A-Z][a-z]*/,"").replace(/\(|\)/g, "").split(' ')[0].replace(/\..*/, "");
      },
    icon () {
      return `http://openweathermap.org/img/w/${result.weather[0].icon}.png`;
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
        this.result = response.data
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
