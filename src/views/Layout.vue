<template>
  <b-container fluid>
    <b-nav tabs grow>
      <b-nav-item to="/introduction">Introduction</b-nav-item>
      <b-nav-item to="/methods">Methods</b-nav-item>
      <b-nav-item to="/results">Results</b-nav-item>
      <b-nav-item to="/keys">Take home message</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
    </b-nav>
    <router-view></router-view>
  </b-container>
</template>

<script>
  export default {
    name: "Layout"
  };
</script>

<style scoped>

</style>
