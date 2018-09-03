<template>
  <div class="about">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">About Lighthouse Crawler</h3>
              
              <br>
              <div>The purpose of <strong>Lighthouse Crawler</strong> is to make planning a visit to Washington's
                lighthouses much easier. Here you can access a description of the lighthouse, location and weather
                information, and some useful identifiers to assist in further research. </div>
              <br>
              <div>This website was created to fulfill the Capstone project requirement for the Seattle University Web
                Development Certificate. It was built using Vue.js and Vuetify and the data displayed is sourced from
                Wikidata, OpenWeather, and Google Maps.</div>
              <br>
              <div>There's more features I would like to eventually work into this site including Google and Yelp reviews, links to lighthouse society pages, more information about site access to
                include accessibility, and suggested nearby accomodations and restaurants.
              </div>
              <br>
              <div>I was also thinking about modeling <strong>Lighthouse Crawler</strong> after a social network site
                where lighthouses are the "people" and they make posts about what life is like being a lighthouse. Some
                lighthouses get rented out. How do they feel about that? Some lighthouses have fancier lenses. Are they
                snobs about it? That sort of thing.</div>

            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'About',
     data () {
      return {
      }
    }  
  }
</script>

<style scoped>
  .about {
    margin: 5%
  }
</style>