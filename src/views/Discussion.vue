<template>
  <div class="accordion" role="tablist">
    <h3>Questions</h3>
    <b-card no-body class="mb-1" v-for="(qa, index) in items" :key="index">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle="'accordion-' + index" variant="info" style="text-align: left">{{ qa.Q }}</b-button>
      </b-card-header>
      <b-collapse :id="'accordion-' + index" :visible="index===0" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text style="text-align: left">{{ qa.A }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import discussion from "@/items/discussion.json"

export default {
  name: "Discussion",
  data() {
    return {
      items: discussion
    }
  }
}
</script>

<style scoped>

</style>