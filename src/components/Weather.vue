<template>
  <div class="form-group col-lg-3 col-md-12 col-sm-12">
    <div class="card mb-5">
      <h3 class="card-header mb-3">Weather (soon to be)</h3>
          
      <ul>

          <h2>lat: {{ lat }}</h2>
          <h2>long: {{ long }}</h2>
          <!-- <img v-bind:src="'http://openweathermap.org/img/w/' + weatherSummary.icon + '.png'" v-bind:alt="weatherSummary.main"> -->

      </ul>
  
    </div>
    </div>
  
  </template>

<script>

export default {
  name: 'weather',
  data(){
    return {
        
    }
  },
  props: ['info'],
  created () {
  },
  // FIX: [Vue warn]: Error in render: "TypeError: this.info.coordinate_location is undefined"
  computed: {
    lat () {
      return this.info.coordinate_location.replace(/[A-Z][a-z]*/,"").replace(/\(|\)/g, "").split(' ')[0];
      },
    long () {
      return this.info.coordinate_location.replace(/[A-Z][a-z]*/,"").replace(/\(|\)/g, "").split(' ')[1];
      }
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


