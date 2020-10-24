<template>
  <div class="care">
    <b-container>
      <b-row>
        <b-col md="5">
          <div class="card" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">After symptom onset <b-button v-b-modal.model2>Model</b-button></h5>
              <p class="card-text">Our analysis estimated the time to</p>
              <ul class="card-text">
                <li>the presence of care-seeking intentions</li>
                <li>case-detection (notification)</li>
              </ul>
<!--              <p class="card-text">After considering asymptomatic TB and background deaths, our incidence estimates were higher than WHO estimates</p>-->
              <p class="card-text">We also consider treatment outcomes after case-detection.</p>
              <p class="card-text">See more on country profiles.</p>
            </div>
            <br>
            <div class="card-body">
              <h5 class="card-title">Data <b-button v-b-modal.data>More</b-button></h5>
              <p class="card-text">Beyond the previous analysis, we include the care-seeking behaviours if surveyed in their prevalence surveys, and treatment outcomes.</p>
            </div>
          </div>
        </b-col>
        <b-col md="7">
          <vueper-slides :touchable="true" :slide-ratio="1 / 1.1" bullets-outside>
            <vueper-slide>
              <template v-slot:content>
                <img src="https://timewz667.github.io/AsymTB/figs/duration/TTE_All.png" alt="asym_TTE" style="padding-top: 10pt">
              </template>
            </vueper-slide>
            <!--<vueper-slide>
              <template v-slot:content>
                <img src="@/assets/care_inc.png" alt="care_inc">
              </template>
            </vueper-slide>-->
            <vueper-slide>
              <template v-slot:content>
                <img src="https://timewz667.github.io/AsymTB/figs/cascade/Cohort_MWI.png" alt="care_MWI">
              </template>
            </vueper-slide>
            <vueper-slide>
              <template v-slot:content>
                <img src="https://timewz667.github.io/AsymTB/figs/cascade/Cascade_MWI.png" alt="drop_MWI">
              </template>
            </vueper-slide>
            <vueper-slide>
              <template v-slot:content>
                <img src="https://timewz667.github.io/AsymTB/figs/cascade/Cohort_ZMB.png" alt="care_ZMB">
              </template>
            </vueper-slide>
            <vueper-slide>
              <template v-slot:content>
                <img src="https://timewz667.github.io/AsymTB/figs/cascade/Cascade_ZMB.png" alt="drop_ZMB">
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
  name: "Care",
  components: { VueperSlides, VueperSlide }
}
</script>

<style scoped>
img {
  padding-top: 40pt;
  width: 100%;
}

.card-title {
  text-align: left;
}

.card-text {
  text-align: left;
}
</style>