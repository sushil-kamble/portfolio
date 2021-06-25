<template>
  <div class="sm-up-px4 my-margin-bottom-large">
    <h1 class="goldman blue--text text--accent-3 my-text-center big-font">
      Certificates
    </h1>
    <v-divider class="blue accent-3 mb-4"></v-divider>
    <Loading v-if="$fetchState.pending" />
    <Grid :items="certificates" v-else />
  </div>
</template>

<script>
export default {
  data: () => ({
    certificates: []
  }),
  fetchOnServer: false,

  async fetch() {
    this.certificates = await fetch(
      `https://sushil-kamble-default-rtdb.firebaseio.com/certificates.json?orderBy="id"&limitToFirst=5`
    ).then((res) => res.json())
  }
}
</script>
