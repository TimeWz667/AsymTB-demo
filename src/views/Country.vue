<template>
  <div class="country">
    <b-container>
      <b-form-select v-model="selected" :options="countries"></b-form-select>
      <iframe :src="'https://timewz667.github.io/AsymTB/country/Profile_' + selected + '.html'" frameborder="0"></iframe>
    </b-container>
  </div>
</template>

<script>
export default {
name: "Country",
  data() {

    return {
      selected: "MWI",
      countries: [
        { value: "KHM", text: "Cambodia"},
        { value: "KEN", text: "Kenya"},
        { value: "LAO", text: "Lao PDR"},
        { value: "MWI", text: "Malawi"},
        { value: "PAK", text: "Pakistan"},
        { value: "PHL", text: "Philippines"},
        { value: "TZA", text: "Tanzania"},
        { value: "UGA", text: "Uganda"},
        { value: "VNM", text: "Viet Nam"},
        { value: "ZMB", text: "Zambia"}
      ]
    }
  }
}
</script>

<style scoped>

</style>