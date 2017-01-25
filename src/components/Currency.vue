<template>
  <div>
    <h1>Currency Conversion Rates</h1>
    <div class="divider"></div>
    <h2>Base Currency: {{conversionData.base}}<br><span>as of {{conversionData.date}}</span></h2>
    <div class="row">
      <div class="col s6 m4 l3" v-for="(item, key) in conversionData.rates ">
        <router-link :to='key'>
          <div class="card " v-bind:class="[item < 1 ? red : green]">
            <div class="card-content">
              <span class="card-title">{{ key }}</span>
              <p>{{ item }} </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'currency',
  props: ['data'],
  data (){
    return{
      route: this.$route.params.id,
      conversionData: [],
      green: "green lighten-1",
      red: "red lighten-1"
    }
  },
  watch: {
    '$route' (to, from) {
      let baseCurrency = to.path.split('/')[1]
      this.$http.get('http://api.fixer.io/latest?base=' + baseCurrency).then((response) => {
        this.conversionData = response.body;
      }, (response) => {
        alert("error", response);
      });
    }
  },
  created: function() {
    this.$http.get('http://api.fixer.io/latest?base=USD').then((response) => {
      this.conversionData = response.body;
    }, (response) => {
      alert("error", response);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 40px;
  }
  .card{cursor: pointer;}
  h1{
    text-align: center;
    font-size: 32px;
  }
  h2{
    text-align: center;
    font-size: 28px;
  }
  p{color: #2c3e50!important;}
  span{
    font-size: 15px;
    color: gray;
  }
  .card .card-content .card-title{
    color: white;
  }
</style>
