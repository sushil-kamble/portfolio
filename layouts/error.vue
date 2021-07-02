<template>
  <v-card
    class="pa-4 d-flex justify-center align-center transparent"
    style="min-height: 75vh"
    flat
  >
    <div class="goldman text-center">
      <h1 v-if="error.statusCode === 404" style="font-size: 32px">
        {{ pageNotFound }}<br />
        Page Not Found, Please go to the Home Page
      </h1>
      <h1 v-else style="font-size: 32px">
        {{ otherError }}<br />
        Unknown Error, Please go to the Home Page
      </h1>
      <v-btn nuxt to="/" class="mt-3" color="blue accent-3" large>
        Home page
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
