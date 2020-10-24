<template>
  <div class="asym">
    <b-container>
      <b-row>
        <b-col md="5">
          <div class="card" style="width: 100%;">

            <div class="card-body">
              <h5 class="card-title">Before symptom onset <b-button v-b-modal.model1>Model 1</b-button></h5>
              <p class="card-text">Our analysis estimated the duration</p>
              <ul class="card-text">
                <li>From: TB-detectable, which can be found by TB diagnostic tools in prevalence survey usual</li>
                <li>To: TB-like symptom onset</li>
              </ul>
              <p class="card-text">We analysed covariates of <b>Age, Sex, and HIV status</b> if data permitted.</p>
            </div>
            <br>
            <div class="card-body">
              <h5 class="card-title">Data <b-button v-b-modal.data>More</b-button></h5>
              <p class="card-text">Ten countries with regular case notification data and prevalence survey after 2010; one subnational data from Blantyre, Malawi.</p>
            </div>
          </div>
        </b-col>
        <b-col md="7">
          <vueper-slides :touchable="true" :slide-ratio="1 / 1.4" bullets-outside>
            <vueper-slide>
              <template v-slot:content>
                <img src="https://timewz667.github.io/AsymTB/figs/duration/Asym_All.png" alt="asym_sex">
              </template>
            </vueper-slide>
            <vueper-slide>
              <template v-slot:content>
                <img src="@/assets/asym_ken.png" alt="asym_ken">
              </template>
            </vueper-slide>
            <vueper-slide>
              <template v-slot:content>
                <img src="@/assets/asym_blt.png" alt="asym_blt">
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
  name: "Asym",
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