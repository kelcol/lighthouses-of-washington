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
      <label for="lighthouse-select"><h2>Select a Lighthouse</h2></label>
      <select id="lighthouse-select" class="form-control">
        <option>Admiralty Head Light</option>
        <option>Alki Point Light</option>
        <option>Browns Point Light</option>
        <option>Burrows Island Light</option>
        <option>Bush Point Light</option>
        <option>Cape Disappointment Light</option>
        <option>Cape Flattery Light</option>
        <option>Cattle Point Light</option>
        <option>Clover Island Light</option>
        <option>Destruction Island Light</option>
        <option>Dofflemyer Point Light</option>
        <option>Ediz Hook Light</option>
        <option>Grays Harbor Light</option>
        <option>Lime Kiln Light</option>
        <option>Marrowstone Point Light</option>
        <option>Mukilteo Light</option>
        <option>New Dungeness Light</option>
        <option>North Head Light</option>
        <option>Patos Island Light</option>
        <option>Point No Point Light</option>
        <option>Point Roberts Light</option>
        <option>Point Robinson Light</option>
        <option>Point Wilson Light</option>
        <option>Semiahmoo Harbor Light</option>
        <option>Skunk Bay Light</option>
        <option>Slip Point Light</option>
        <option>Smith Island Light</option>
        <option>Turn Point Light</option>
        <option>West Point Light</option>
        <option>Willapa Bay Light</option>
      </select>

    </div>
  </div>
</template>



<script>
export default {
  name: 'LighthouseSearch',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

