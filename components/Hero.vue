<template>
  <v-row class="px-4">
    <v-col md="6">
      <v-card color="transparent sm-hero-height" class="hero-one" flat>
        <div class="my-text-center">
          <h4 class="goldman text-uppercase text--secondary">hey there</h4>
          <h1 class="goldman i-am-sushil">
            I am <span class="primary--text">Sushil</span>
          </h1>

          <h1 class="goldman">I am a Web Developer</h1>
          <div class="mt-7 goldman">
            <v-btn
              color="info"
              large
              elevation="4"
              href="https://drive.google.com/file/d/1y7k-psiq7QVYnCb_2LhF-gaRSyhD7lX1/view?usp=sharing"
              target="_blank"
            >
              Resume
            </v-btn>
            <v-btn color="info" class="ml-2" large elevation="4" to="/contact">
              Contact
            </v-btn>
          </div>

          <div class="mt-8">
            <Icons />
          </div>
        </div>
      </v-card>
    </v-col>

    <v-col
      md="6"
      class="hero-two d-flex justify-end hide-intro-img"
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <v-img src="img/hero2.svg" height="380" contain />
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