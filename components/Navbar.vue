<template>
  <div>
    <v-app-bar
      app
      class="container background"
      height="70"
      max-width="1181"
      tag="header"
      flat
    >
      <v-toolbar-title class="goldman">Sushil</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="ml-6 hide-pc" fab icon @click.stop="drawer = !drawer">
        <i class="bx bxs-category icon-font"> </i>
      </v-btn>

      <div class="goldman hide-mobile">
        <v-btn text to="/" nuxt>
          <span>Home </span>
        </v-btn>
        <v-btn text to="/skills" nuxt>
          <span> Skills </span>
        </v-btn>
        <v-btn text to="/projects" nuxt>
          <span> Projects </span>
        </v-btn>
        <v-btn text to="/contact" nuxt>
          <span> Contact </span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" disable-resize-watcher app>
      <v-list nav>
        <v-list-item-group v-model="group">
          <v-list-item>
            <v-img lazy-src="img/me_supermin.jpg" src="img/me_min.jpg"></v-img>
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
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>
