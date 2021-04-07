<template>
  <v-row class="px-4">
    <v-col md="6" data-aos="zoom-in-left">
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
          <div class="mt-7 goldman">
            <v-btn
              color="primary"
              :class="`${$vuetify.theme.dark && 'black--text'}`"
              large
              href="https://drive.google.com/file/d/1y7k-psiq7QVYnCb_2LhF-gaRSyhD7lX1/view?usp=sharing"
              target="_blank"
            >
              Resume
            </v-btn>
            <v-btn
              color="primary"
              :class="`ml-4 ${$vuetify.theme.dark && 'black--text'}`"
              large
              to="/contact"
            >
              Contact
            </v-btn>
          </div>

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
      data-aos="zoom-out-right"
    >
      <v-img
        src="img/hero2.svg"
        height="380"
        contain
        v-if="!$vuetify.theme.dark && reveal"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      reveal: false,
      show: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.loadingFinish())
    })
  },
  methods: {
    loadingFinish() {
      this.$nuxt.$loading.finish()
      this.reveal = true
    }
  }
}
</script>



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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>