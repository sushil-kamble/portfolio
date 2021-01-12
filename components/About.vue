<template>
  <section :class="`${$vuetify.breakpoint.smAndUp && 'px-4'}`">
    <h1
      :class="`goldman primary--text my-head-font ${
        $vuetify.breakpoint.smAndDown && 'text-center'
      }`"
    >
      About Me
    </h1>
    <v-divider class="primary"></v-divider>
    <v-card
      :class="`mt-6 ${$vuetify.breakpoint.smAndUp && 'px-4'}`"
      flat
      color="transparent"
    >
      <v-row>
        <v-col md="4" cols="12">
          <v-card
            flat
            color="transparent"
            :class="`${$vuetify.breakpoint.smAndDown && 'text-center'}`"
          >
            <v-img
              :lazy-src="`https://drive.google.com/uc?export=view&id=${heroImgMin}`"
              :src="`https://drive.google.com/uc?export=view&id=${heroImg}`"
              max-height="300"
            ></v-img>
          </v-card>
        </v-col>
        <v-col md="8" class="hero-two" cols="12">
          <h3 class="work-font">
            I am a computer engineering student from the University of Pune. I
            love developing ideas that come to my mind.
          </h3>
          <br />
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heroImg: '1xifzdeP9sPTqPpnxOI03ZYyx4k01Z28a',
      heroImgMin: '1p1jGT9CyqT9nQTyDClyHC8fg_2lxrY8k',
    }
  },
}
</script>

<style scoped>
.my-head-font {
  font-size: 35px;
}
</style>