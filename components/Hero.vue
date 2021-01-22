<template>
  <v-row class="px-4">
    <v-col md="6" v-if="reveal">
      <transition
        name="custom-classes-transition"
        enter-active-class="animated backInLeft"
        leave-active-class="animated backOutRight"
        appear
      >
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
      </transition>
    </v-col>
    <v-col cols="12" v-else>
      <v-card :height="650" flat class="d-flex justify-center align-center">
        <v-progress-circular
          color="primary"
          indeterminate
          size="64"
          :width="7"
        ></v-progress-circular>
      </v-card>
    </v-col>

    <v-col
      md="6"
      class="hero-two d-flex justify-end"
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <transition
        name="custom-classes-transition"
        enter-active-class="animated backInRight"
        leave-active-class="animated backOutLeft"
        appear
      >
        <img
          src="~/assets/img/hero2.svg"
          height="380"
          v-if="!$vuetify.theme.dark && reveal"
        />
      </transition>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      reveal: false,
      show: true,
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
    },
  },
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