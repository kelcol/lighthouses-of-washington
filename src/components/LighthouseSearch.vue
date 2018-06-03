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
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" placeholder="Search" type="text">
          <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <!-- <div class="alert alert-dismissible alert-warning">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <h4 class="alert-heading"></h4>
      <p class="mb-0">Not sure which lighthouse to visit? Let us pick a
        <a href="#" class="alert-link">random lighthouse</a> for you.</p>
    </div> -->

    <div class="form-group col-lg-3 col-md-3 col-sm-4 mt-8">
      <label for="lighthouse-select">
        <h2>Select a Lighthouse</h2>
      </label>
      <select>
      <option v-for="lighthouse in lighthouses" id="lighthouse-select" class="form-control">
        {{ lighthouse.lighthouseLabel }}
      </option>
      </select>
    </div>
    <div>
      <li v-for="lighthouse in lighthouses"><a v-link="{ path: lighthouse.lighthouse }"></a></li>
    </div>

    <ul>
      <li v-for="lighthouse in lighthouses" >
        <p>{{ lighthouse.lighthouseLabel }}</p>
        <img v-bind:src="lighthouse.image"/>
      </li>
    </ul>

  </div>

</template>


<script>

import lighthouses from '../lighthouses.js';

export default {
  name: 'LighthouseSearch',
  data () {
    return lighthouses
  },

}
</script>

<style scoped>
img
{
  width: auto !important;
  height: auto !important;
  max-width: 40%;
}
ul {

}

</style>
