<template>
  <v-app
    id="main--app"
    :style="{ background: $vuetify.theme.dark ? '#22272E' : '#FFFFFF' }"
  >
    <Navbar />
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
  mounted() {
    if (typeof window !== 'undefined') {
      const theme = window.localStorage.getItem('getTheme')
      if (theme === null) {
        // Detects your browser theme
        if (
          window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
          this.$vuetify.theme.dark = true
        } else {
          this.$vuetify.theme.dark = false
        }
      } else {
        // get from localStorage
        if (theme === 'dark') {
          this.$vuetify.theme.dark = true
        } else {
          this.$vuetify.theme.dark = false
        }
      }
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