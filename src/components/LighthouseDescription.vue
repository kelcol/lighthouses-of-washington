<template>
  <div id="description" v-if="featured">
    <p>
      <!-- same inception and no given service entry date-->
      <span v-if="featured.inception != null && featured.service_entry == null"><strong>{{ featured.itemLabel }}</strong> was built in {{ featured.inception.substring(0, 4) }}.</span>

      <!-- same inception and service entry date-->
      <span v-if="featured.inception != null && featured.service_entry != null && featured.service_entry == featured.inception"><strong>{{ featured.itemLabel }}</strong> was constructed and first lit in {{ featured.inception.substring(0, 4) }}.</span>

      <!-- same inception and different service entry date-->
      <span v-if="featured.inception != null && featured.service_entry != null && featured.service_entry != featured.inception"><strong>{{ featured.itemLabel }}</strong> was constructed in {{ featured.inception.substring(0,4) }} and first lit in {{ featured.service_entry.substring(0, 4) }}.</span>

      <!-- physical and other characteristics -->

      <!--Known height-->
      <span v-if="featured.height_psn != null">It has a height of {{ featured.height_psn }} meters above sea level,</span>

      <!--Unnown height-->
      <span v-if="featured.height_psn == null && featured.heightFocal_psn|featured.height_psn|featured.range_psv|featured.light_characteristic_of_lighthouse != null">It has </span><span v-if="featured.heightFocal_psn != null"> a focal height of {{ featured.heightFocal_psn }} meters, </span><span v-if="featured.light_characteristic_of_lighthouse != null"><span
          v-if="featured.range_psv != null"> a range of {{featured.range_psv }}
          nautical miles, </span>and a light characteristic of {{  featured.light_characteristic_of_lighthouse }}. </span><span v-if="featured.service_retirement != null"> This lighthouse was retired in {{ featured.service_retirement.substring(0, 4) }}. </span><span v-if="featured.NRHP_reference_number != null"><strong>{{ featured.itemLabel }}</strong> is listed on the National Register of Historic Places.</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "LighthouseDescription",
  data: function () {
    return {}
  },
  props: {
    featured: Object,
}
}
</script>
