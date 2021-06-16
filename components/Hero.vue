<template>
  <v-card color="transparent" class="hero-one sm-hero-height px-4" flat>
    <div class="my-text-center goldman">
      <h1 class="i-am-sushil">
        <span class="d-block" style="font-size: 24px">Hi there,</span>
        I am
        <span class="blue--text text--accent-3">Sushil Kamble</span>
      </h1>
      <h1>
        <span class="display-block-sm mobile-font">I am a</span>
        <Typing />
      </h1>

      <div class="my-6">
        <v-btn
          color="blue accent-3"
          dark
          elevation="4"
          href="https://drive.google.com/file/d/1y7k-psiq7QVYnCb_2LhF-gaRSyhD7lX1/view?usp=sharing"
          target="_blank"
          rel="noopener"
        >
          Resume
        </v-btn>
        <v-btn
          color="blue-grey darken-3"
          class="ml-2"
          nuxt
          elevation="4"
          to="/contact"
          dark
        >
          Contact
        </v-btn>
        <v-btn
          class="ml-4"
          fab
          icon
          small
          v-if="$vuetify.breakpoint.mdAndUp"
          @click="changeTheme"
        >
          <i
            :class="`icon-font ${
              !$vuetify.theme.dark ? 'bx bxs-moon' : 'bx bxs-sun'
            }`"
          ></i>
        </v-btn>
      </div>
      <div class="mt-8">
        <Icons />
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Hero',
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      const theme = this.$vuetify.theme.dark ? 'dark' : 'light'
      localStorage.setItem('getTheme', theme)
    }
  }
}
</script>


<style scoped>
.hero-one {
  padding-top: 8vw;
}
</style>
