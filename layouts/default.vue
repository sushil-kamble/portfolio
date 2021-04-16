<template>
  <v-app
    id="main--app"
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <Navbar />
    <v-divider></v-divider>
    <v-main>
      <Nuxt keep-alive />
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
        <i class="bx bx-up-arrow-alt icon-font"></i>
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
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    }
  },
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
