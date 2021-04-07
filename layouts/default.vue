<template>
  <v-app id="main--app">
    <!-- Change everything at 960 -->
    <Navbar />
    <v-divider></v-divider>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        fixed
        bottom
        right
        color="transparent"
        @click="toTop"
      >
        <v-icon :class="`${!$vuetify.theme.dark && 'black--text'}`">
          mdi-arrow-up
        </v-icon>
      </v-btn>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  data: () => ({
    fab: false
  }),

  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 100
    },
    toTop() {
      this.$vuetify.goTo(0)
    }
  }
}
</script>
