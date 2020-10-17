<template>
  <div class="about">
    <b-container>
      <b-row align="start">
        <b-col cols="6" md="6" style="border-left-style: solid; border-left-color: #b95893;">
          <h2>Research team</h2>
          <div v-for="author in authors" :key="author.Name">
            <h4>{{ author.Name }}</h4>
            <ul v-if="author.Items.length > 0">
              <li v-for="(v, i) in author.Items" :key="i">{{ v }}</li>
            </ul>
          </div>
        </b-col>
        <b-col cols="6" md="6" style="border-left-style: solid; border-left-color: #b95893;">
          <h2>Acknowledgements</h2>

          <b-button v-b-modal.model1>Show Model</b-button>
          <b-button v-b-modal.model2>Show Model</b-button>
          <b-button v-b-modal.model3>Show Model</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import authors from "@/items/authors.json"

export default {
  name: "About",
  data() {
    return {
      authors: authors
    }
  }
}
</script>
<style scoped>
  .about {
    margin-top: 30px;
  }
</style>
