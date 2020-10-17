<template>
  <b-container>
    <b-nav tabs grow>
      <b-nav-item to="/keys">Key messages</b-nav-item>
      <b-nav-item to="/asym">Asymptomatic TB</b-nav-item>
      <b-nav-item to="/progression">TB progression</b-nav-item>
      <b-nav-item to="/care">TB-related care-seeking</b-nav-item>
      <b-nav-item to="/country">Country profiles</b-nav-item>
      <b-nav-item to="/discussion">Discussion</b-nav-item>
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
