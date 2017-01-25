<template>
  <div id="app" class='container'>
    <h1>Currency Conversion Rates</h1>

    <div class="divider"></div>
    <router-view ></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
}
h1{
  text-align: center;
  font-size: 32px;
}
</style>
