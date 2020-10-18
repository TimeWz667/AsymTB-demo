<template>
<div class="progression">
  <b-container>
    <b-row>
      <b-col md="5">
        <div class="card" style="width: 100%;">

          <div class="card-body">
            <h5 class="card-title">TB Progression <b-button v-b-modal.model3>Model</b-button></h5>
            <p class="card-text">With the parameters from the empirical analysis. We simulated the transitions among asymptomatic TB, symptomatic TB, and case-detection. </p>
          </div>
          <br>
          <div class="card-body">
            <h5 class="card-title">Data <b-button v-b-modal.data>More</b-button></h5>
            <p class="card-text">We used data of prevalence survey Kenya and Blantyre in Malawi for analysing detailed TB progression.</p>

          </div>
        </div>
      </b-col>
      <b-col md="7">
        <vueper-slides :touchable="true" :slide-ratio="1 / 1.4" bullets-outside>
          <vueper-slide>
            <template v-slot:content>
              <img src="@/assets/transition_fig.png" alt="trans_fig">
            </template>
          </vueper-slide>
          <vueper-slide>
            <template v-slot:content>
              <img src="@/assets/transition_tab.png" alt="trans_tab">
            </template>
          </vueper-slide>
        </vueper-slides>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: "Progression",
  components: { VueperSlides, VueperSlide }
}
</script>

<style scoped>

img {
  padding-top: 20pt;
  width: 90%;
}

.card-title {
  text-align: left;
}

.card-text {
  text-align: left;
}
</style>