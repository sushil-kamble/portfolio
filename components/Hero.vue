<template>
  <v-row class="px-4">
    <v-col md="6">
      <v-card height="670" class="hero-one" flat>
        <div>
          <h4 class="goldman text-uppercase text--secondary">hey there</h4>
          <h1 class="goldman cos-name">
            I am <span class="primary--text">Sushil</span>
          </h1>
          <h1 class="goldman">I am a WebApp Developer</h1>
          <v-btn color="primary" class="mt-7 goldman" large>Contact</v-btn>
          <div class="mt-10">
            <v-icon
              large
              left
              @mouseover="isHovering1 = true"
              @mouseout="isHovering1 = false"
              :color="isHovering1 ? 'primary' : ''"
              >mdi-github
            </v-icon>
            <v-icon
              large
              left
              @mouseover="isHovering2 = true"
              @mouseout="isHovering2 = false"
              :color="isHovering2 ? 'primary' : ''"
              >mdi-linkedin
            </v-icon>
            <v-icon
              large
              left
              @mouseover="isHovering3 = true"
              @mouseout="isHovering3 = false"
              :color="isHovering3 ? 'primary' : ''"
              >mdi-instagram
            </v-icon>
            <v-icon
              large
              left
              @mouseover="isHovering4 = true"
              @mouseout="isHovering4 = false"
              :color="isHovering4 ? 'primary' : ''"
              >mdi-facebook
            </v-icon>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col md="6" class="hero-two d-flex justify-end">
      <img src="~/assets/img/hero2.svg" height="380" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      isHovering1: false,
      isHovering2: false,
      isHovering3: false,
      isHovering4: false,
    }
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
</style>