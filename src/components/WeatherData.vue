<template>
    <dl>
        <dt v-if="weatherData.temp != weatherData.temp_min">Current Temp</dt>
        <dd v-if="weatherData.temp != weatherData.temp_min">{{ weatherData.temp }}&deg;F</dd>
        <dt>Humidity</dt>
        <dd>{{ weatherData.humidity }}%</dd>
        <dt>High</dt>
        <dd>{{ weatherData.temp_max }}&deg;F</dd>
        <dt>Low</dt>
        <dd>{{ weatherData.temp_min }}&deg;F</dd>
    </dl>
</template>

<script>
export default {
  name: 'WeatherData',
  data () {
    return {

    }
  },
  props: {
    weatherData: Object
  }
}
</script>

<style scoped>
dl {
  padding: 5px;
  background: #e8e8e8;
}
dt {
  float: left;
  clear: left;
  width: 120px;
  text-align: right;
  font-weight: bold;
  color: blue;
}
dd {
  margin: 0 0 0 130px;
  padding: 0 0 0.5em 0;
}
dt::after {
  content: ":";
}
</style>