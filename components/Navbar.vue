<template>
  <v-app-bar
    app
    class="container border--bottom"
    color="white"
    height="70"
    flat
  >
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

    <v-toolbar-title class="goldman">Sushil</v-toolbar-title>

    <v-spacer></v-spacer>

    <div>
      <v-btn text to="/" nuxt color="primary">
        <span class="black--text">Home</span>
      </v-btn>
      <v-btn text nuxt color="primary">
        <span class="black--text">Skills</span>
      </v-btn>
      <v-btn text to="/projects" nuxt color="primary">
        <span class="black--text">Projects</span>
      </v-btn>
      <v-btn text nuxt color="primary">
        <span class="black--text">Contact</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<style scoped>
.border--bottom {
  border-bottom: honeydew;
}
</style>