<template>
  <div id="lighthouse-data">

  </div>
</template>


<script>
    import lighthouses from '../lighthouses.js';

    export default {
      name: 'lighthousedata',
      data () {
        return lighthouses
        },
        methods: {
          coords: function() {
            return (this.coords).split('\.'[0]);
          }
        }
      }
    
</script>


