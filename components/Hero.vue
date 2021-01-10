<template>
  <v-row class="px-4">
    <v-col md="6">
      <v-card
        color="transparent"
        :height="$vuetify.breakpoint.smAndDown ? 500 : 650"
        class="hero-one"
        flat
      >
        <div :class="`${$vuetify.breakpoint.smAndDown && 'text-center'}`">
          <h4 class="goldman text-uppercase text--secondary">hey there</h4>
          <h1 :class="`goldman ${$vuetify.breakpoint.mdAndUp && 'cos-name'}`">
            I am <span class="primary--text">Sushil</span>
          </h1>
          <h1 class="goldman">I am a WebApp Developer</h1>
          <v-btn
            color="primary"
            :class="`mt-7 goldman ${$vuetify.theme.dark && 'black--text'}`"
            large
            to="/contact"
          >
            Contact
          </v-btn>
          <div class="mt-10">
            <Icons />
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col
      md="6"
      class="hero-two d-flex justify-end"
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <img src="~/assets/img/hero2.svg" height="380" />
    </v-col>
  </v-row>
</template>



<style scoped>
.cos-name {
  font-size: 55px;
}
.hero-one {
  padding-top: 8vw;
}
.hero-two {
  padding-top: 7vw;
}
</style>