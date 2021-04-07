<template>
  <!-- 1263 breakage -->
  <v-container>
    <div v-if="reveal">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
    </div>
    <div v-else>
      <v-card height="650" flat class="d-flex justify-center align-center">
        <v-progress-circular
          class="primary--text"
          indeterminate
          size="64"
          width="5"
        ></v-progress-circular>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  head: {
    titleTemplate: 'Sushil',
    title: 'Home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ]
  },
  data() {
    return {
      reveal: false
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


 