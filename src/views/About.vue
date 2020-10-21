<template>
  <div class="about">
    <b-container>
      <b-row align="start">
        <b-col cols="7" md="7" style="border-left-style: solid; border-left-color: #b95893;">
          <h2>Research team</h2>
          <div v-for="author in authors" :key="author.Name">
            <h4>{{ author.Name }}</h4>
            <ul v-if="author.Items.length > 0">
              <li v-for="(v, i) in author.Items" :key="i">{{ v }}</li>
            </ul>
          </div>
        </b-col>
        <b-col cols="5" md="5" style="border-left-style: solid; border-left-color: #b95893;">
          <h2>Information</h2>
          <ul>
            <li><h5>For further information, please contact <br>Chu-Chang Ku (c.ku@sheffield.ac.uk)</h5></li>
            <li><h5>Except for Blantyre data, all data were available on public domain</h5></li>
          </ul>


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
