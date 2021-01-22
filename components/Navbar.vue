<template>
  <v-responsive>
    <v-app-bar
      app
      class="container"
      :color="$vuetify.theme.dark ? '#121212' : 'white'"
      height="70"
      max-width="1181"
      tag="header"
      flat
    >
      <v-toolbar-title class="goldman">Sushil</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown && reveal"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <div v-if="$vuetify.breakpoint.smAndUp && reveal">
        <v-btn text to="/" nuxt color="primary">
          <span :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
            >Home</span
          >
        </v-btn>
        <v-btn text nuxt to="/skills" color="primary">
          <span :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
            >Skills</span
          >
        </v-btn>
        <v-btn text to="/projects" nuxt color="primary">
          <span :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
            >Projects</span
          >
        </v-btn>
        <v-btn text nuxt to="/contact" color="primary">
          <span :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
            >Contact</span
          >
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" disable-resize-watcher app>
      <v-list nav>
        <v-list-item-group v-model="group">
          <v-list-item>
            <v-img
              :lazy-src="`https://drive.google.com/uc?export=view&id=${meIdMin}`"
              :src="`https://drive.google.com/uc?export=view&id=${meId}`"
            ></v-img>
          </v-list-item>

          <v-list-item>
            <h1 class="goldman">Sushil</h1>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item nuxt to="/" class="mt-5">
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

          <v-divider></v-divider>

          <v-list-item>
            <v-switch
              v-model="$vuetify.theme.dark"
              class="mt-4"
              hint="Switch to Dark Mode"
              inset
              label="Dark Mode"
              persistent-hint
            ></v-switch>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-responsive>
</template>

<script>
export default {
  data: () => ({
    meId: '1PMUdprSvyYHadTR-LmqbMpy5oLE08Bwu',
    meIdMin: '1smrkjOMaF1a0xGthvNKhljd0FH5FkrIs',
    drawer: false,
    group: null,
    reveal: false,
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.loadingFinish())
    })
  },
  methods: {
    loadingFinish() {
      this.$nuxt.$loading.finish()
      this.reveal = true
    },
  },
}
</script>

<style scoped>
</style>