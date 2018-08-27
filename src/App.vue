<template>
  <v-app id="inspire" color="light-blue lighten-5">
    
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        
        <v-list-tile :to="'/'">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>            
          </v-list-tile-content>
        </v-list-tile>
        
        <v-list-tile :to="'/about'">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="'/testmap'">
          <v-list-tile-action>
            <v-icon>map</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Test Map</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>


      
    </v-navigation-drawer>

    <v-toolbar color="orange lighten-2" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Lighthouse Crawler</v-toolbar-title>
    </v-toolbar>
   
   <v-content> 
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
<div class="text-center-xs">
    <v-footer color="orange lighten-2" app>
      <span class="white--text">Kelly Colht &copy; 2018</span>
    </v-footer>
</div>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
    }),
    props: {
      source: String
    }
  }
</script>