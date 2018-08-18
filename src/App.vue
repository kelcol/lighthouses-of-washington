<template>
  <v-app id="inspire">
    
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="orange darken-2" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Lighthouses of Washington</v-toolbar-title>
    </v-toolbar>
   
   <v-content> 

         <v-carousel>
      <v-carousel-item v-for="(image,i) in images" :key="i" :src="image.src"></v-carousel-item>
    </v-carousel>


    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>

    <v-footer color="orange darken-2" app>
      <span class="white--text">Kelly Colht &copy; 2018</span>
    </v-footer>

  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      images: [{
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ],
    }),
    props: {
      source: String
    }
  }
</script>