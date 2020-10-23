<template>
  <div class="keys">
    <b-container style="margin-top: 30px; text-align: start">
      <ul class="list-unstyled">
        <b-media tag="li">
          <h3 class="mt-0 mb-1">Before this study</h3>
          <dl>
            <dt>Asymptomatic period of TB unclear</dt>
            <dd>Asymptomatic TB has stronger risk of unfavorable TB events than latent TB infection while the duration remains unclear.</dd>
            <dt>Standard approaches ignored asymptomatic phase</dt>
            <dd>Prevalence-to-notification ratio has been used to measure the delay to case-detection. However, many of those with active TB in prevalence surveys actually haven't started care-seeking, including those with asymptomatic TB or those who don't think it is necessary.</dd>
          </dl>
          </b-media>

        <b-media tag="li">
          <h3 class="mt-0 mb-1">What did we do? <b-button v-b-toggle="'collapse-info'" class="m-1">Data and information flows</b-button></h3>
          <dl>
            <dt>Statistical models for TB progression</dt>
            <dd>We developed novel statistical models to estimate progression from initial bacteriological-positivity including (depending on data): smear conversion, symptom onset and the presence of care-seeking intentions.
            </dd>
            <dt>Applied to common TB programme data</dt>
            <dd>We tried to use the data which were commonly collected in TB control programmes to inform the TB progression and TB care-cascade.
            </dd>
          </dl>
        </b-media>


        <!-- Element to collapse -->
        <b-collapse id="collapse-info">
          <b-card><img src="@/assets/data_flow.png" alt="info_flow"></b-card>
        </b-collapse>

        <b-media tag="li">
          <h3 class="mt-0 mb-1">What did we find?</h3>
          <dl>
            <dt>The duration of asymptomatic TB</dt>
            <dd>The duration of the asymptomatic phase typically ranged around 3-8 months. However, three countries in Asia showed longer durations of > 1 year.</dd>
            <dt>Age, Sex ,and HIV status and asymptomatic TB</dt>
            <dd>With the data of Kenya and Blantyre, our analysis showed no strong age-dependence in durations. However, the asymptomatic duration of people living with HIV was 1.4 months on average.</dd>
            <dt>The presence of care-seeking intentions</dt>
            <dd>From five countries with healthcare behaviour survey, our analysis showed the time to start care-seeking since TB symptom onset ranged 2-6 months.</dd>
          </dl>
        </b-media>

        <b-media tag="li">
          <h3 class="mt-0 mb-1">Why are these findings important?</h3>
          <dl>
            <dt>More usage of prevalence survey and case notification data</dt>
            <dd>The prevalence survey and notification actually contain the information about TB progression.</dd>
            <dt>Considering TB control strategy before going to latent TB infection treatment</dt>
            <dd>Asymptomatic TB have higher risk than latent TB infection, while there is less clinical knowledge and related control strategy. Our study provided an insight into identifying asymptomatic TB.</dd>
            <dt>More works can be done on before care-cascade / patient pathway analysis</dt>
            <dd>We perform a care-cascade/care-pathway analysis without extra surveys on  TB care systems or TB patients. Also, we evaluated the dropout before the symptom onset, which can not be surveyed ethically.</dd>
          </dl>
        </b-media>
      </ul>
    </b-container>
  </div>
</template>

<style scoped>
  .about {
    margin-top: 30px;
  }

  iframe {
    width: 100%;
  }

  img {
    width: 90%;
  }
</style>
