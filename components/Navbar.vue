<template>
  <div>
    <v-app-bar
      app
      class="container border--bottom"
      color="white"
      height="70"
      flat
    >
      <v-toolbar-title class="goldman">Sushil</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <div v-else>
        <v-btn text to="/" nuxt color="primary">
          <span class="black--text">Home</span>
        </v-btn>
        <v-btn text nuxt to="/skills" color="primary">
          <span class="black--text">Skills</span>
        </v-btn>
        <v-btn text to="/projects" nuxt color="primary">
          <span class="black--text">Projects</span>
        </v-btn>
        <v-btn text nuxt to="/contact" color="primary">
          <span class="black--text">Contact</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" disable-resize-watcher app>
      <v-list nav>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item nuxt to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item nuxt to="/skills">
            <v-list-item-title>Skills</v-list-item-title>
          </v-list-item>

          <v-list-item nuxt to="/projects">
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>

          <v-list-item nuxt to="/contact">
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<style scoped>
.border--bottom {
  border-bottom: honeydew;
}
</style>