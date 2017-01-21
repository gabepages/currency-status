<template>
  <div>
    <h2>Base Currency: USD<br><span>as of {{data.date}}</span></h2>
    <div class="row">
      <div class="col s6 m4 l3" v-for="(item, key) in data.rates ">
        <div class="card" v-bind:class="[item < 1 ? red : green]">
          <div class="card-content">
            <span class="card-title">{{ key }}</span>
            <p>{{ item }} </p>
          </div>
        </div>
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
      green: "green lighten-2",
      red: "red lighten-2"
    }
  },
  mounted: function(){
    console.log(this.data.rates);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  h2{
    text-align: center;
    font-size: 28px;
  }
  span{
    font-size: 15px;
    color: gray;
  }
  .card .card-content .card-title{
    color: white;
  }
</style>
