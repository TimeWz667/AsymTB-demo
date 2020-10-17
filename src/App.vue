<template>
  <div id="app">
    <b-container class="pt-3">
      <h2>What can tuberculosis prevalence surveys tell us about the duration of asymptomatic bacteriologically-positive disease?</h2>
      <br>
    </b-container>

    <router-view></router-view>
    <b-modal id="model1" size="lg">
      <iframe src="https://timewz667.github.io/AsymTB/Model1.html" frameborder="0"></iframe>
    </b-modal>
    <b-modal id="model2" size="lg">
      <iframe src="https://timewz667.github.io/AsymTB/Model2.html" frameborder="0"></iframe>
    </b-modal>
    <b-modal id="model3" size="lg">
      <iframe src="https://timewz667.github.io/AsymTB/Model3.html" frameborder="0"></iframe>
    </b-modal>
  </div>
</template>
<script>
  export default {};
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  iframe {
    overflow-y: auto;
    width: 100%;
    height: 500pt;
  }
</style>
