<template>
  <div class="goldman">
    <v-app-bar
      app
      class="container"
      height="70"
      max-width="1181"
      :color="$vuetify.theme.dark ? '#22272E' : '#FFFFFF'"
      flat
    >
      <v-toolbar-title class="goldman">
        <h3>
          <NuxtLink
            to="/"
            class="text-decoration-none blue--text text--accent-3"
          >
            Sushil
          </NuxtLink>
        </h3>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="hide-pc ml-10" fab icon @click.stop="drawer = !drawer">
        <img src="/img/svg/ham.svg" width="20" class="fill-blue" alt="i" />
      </v-btn>

      <div class="hide-mobile">
        <v-btn text active-class="active-link" to="/" nuxt>
          <span>Home </span>
        </v-btn>
        <v-btn text active-class="active-link" to="/projects" nuxt>
          <span> Projects </span>
        </v-btn>
        <v-btn text active-class="active-link" to="/contact" nuxt>
          <span> Contact </span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      disable-resize-watcher
      app
      :color="$vuetify.theme.dark ? '#263238' : '#FFFFFF'"
    >
      <v-list nav>
        <v-list-item-group v-model="group">
          <v-list-item>
            <v-img
              lazy-src="/img/me_supermin.jpg"
              src="/img/me_min.jpg"
            ></v-img>
          </v-list-item>

          <v-list-item>
            <h1 class="blue--text text--accent-3">Sushil</h1>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item nuxt to="/" class="mt-5" active-class="active-link">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item nuxt to="/skills" active-class="active-link">
            <v-list-item-title>Skills</v-list-item-title>
          </v-list-item>

          <v-list-item nuxt to="/projects" active-class="active-link">
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>

          <v-list-item nuxt to="/contact" active-class="active-link">
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item inactive>
            <v-switch
              v-model="$vuetify.theme.dark"
              @change="changeTheme"
              class="mt-4"
              :hint="
                !$vuetify.theme.dark
                  ? 'Switch to Dark Mode'
                  : 'Switch to Light Mode'
              "
              inset
              :label="$vuetify.theme.dark ? 'Dark Mode' : 'Light Mode'"
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
  },
  methods: {
    changeTheme() {
      const theme = this.$vuetify.theme.dark ? 'dark' : 'light'
      localStorage.setItem('getTheme', theme)
    }
  }
}
</script>

<style scoped>
.active-link {
  color: #2979ff;
}
</style>
