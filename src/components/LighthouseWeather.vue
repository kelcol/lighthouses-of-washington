<template>
  <div id="weather" v-if="featured">
    <v-layout row>
      <v-flex>
        <v-card color="blue-grey lighten-5">
          <v-spacer></v-spacer>
          <v-list-tile-content>
            <ul v-if="result">
              <img v-bind:src="`https://openweathermap.org/img/w/${result.weather[0].icon}.png`" v-bind:alt="result.weather[0].description">
              <li>
                <strong>Description:</strong> {{ result.weather[0].description }}</li>
              <li>
                <strong>Temperature:</strong> {{ result.main.temp }}&#176;F</li>
              <li>
                <strong>Humidity:</strong> {{ result.main.humidity }}%</li>
              <li>
                <strong>Wind Speed:</strong> {{ result.wind.speed}} mph</li>
            </ul>
          </v-list-tile-content>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {API} from '@/common/api';

export default {
  name: 'LighthouseWeather',
  data(){
    return {
      result: '',
    }
  },
props: {
    featured: {
      type: Object,
      required: true
    }
  },
  computed: {
    lat () {
      return this.featured.lat.replace(/\..*/, "");
      },
    long () {
      return this.featured.lon.replace(/\..*/, "");
      },
    icon () {
      return `http://openweathermap.org/img/w/${result.weather[0].icon}.png`;
    }
},
methods: {
    getWeather: function () {
      API.get('weather', {
        params: {
          lat: this.lat,
          lon: this.long
        }
      })
      .then(response => {
        this.result = response.data
      })
      .catch(error => {
        this.errors.push(error.message)
      });
    }
  },
  mounted () {
    this.getWeather();
  }
}
</script>

<style scoped>


</style>
