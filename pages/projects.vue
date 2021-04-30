<template>
  <v-container>
    <v-card class="sm-up-px4 pb-2 transparent" flat>
      <h1 class="goldman blue--text text--accent-3 my-text-center">
        MY PROJECTS
      </h1>
      <v-divider class="blue accent-3 mb-4"></v-divider>
      <Loading v-if="$fetchState.pending" :height="600" :size="60" />
      <v-row class="mb-5" v-else>
        <v-col
          md="6"
          cols="12"
          v-for="project in fetchProjects"
          :key="project.imgId"
        >
          <v-img
            :src="`${project.img}`"
            :aspect-ratio="3 / 2"
            gradient="60deg, rgba(44, 44, 44, 0.9) 38%, rgba(22, 22, 22, 0.4) 100%"
            class="pa-4 white--text rounded-lg mobile-font elevation-10"
          >
            <h2 class="goldman blue--text text--accent-3">
              {{ project.name }}
            </h2>
            <v-divider></v-divider>
            <div class="mt-2 work-font font-weight-bold">
              <p>
                {{ project.description }}
              </p>
              <div v-if="project.features">
                <h3 class="goldman">Features</h3>
                <ul>
                  <li
                    v-for="(feature, x) in project.features.split('%')"
                    :key="x"
                  >
                    {{ feature }}
                  </li>
                </ul>
              </div>
              <div v-if="project.techStack">
                <h3 class="goldman mt-2">Tech Stack</h3>
                <ul>
                  <li
                    v-for="(tech, y) in project.techStack.split('%')"
                    :key="y"
                  >
                    {{ tech }}
                  </li>
                </ul>
              </div>

              <div class="goldman">
                <v-btn
                  class="px-4 mt-4 mr-2 blue accent-2"
                  dark
                  small
                  :href="project.link"
                  target="_blank"
                  rel="noopener"
                  v-if="project.link"
                >
                  <i class="bx bxs-right-top-arrow-circle mr-2"></i>
                  Direct link
                </v-btn>
                <v-btn
                  class="px-4 mt-4 blue-grey darken-3"
                  dark
                  small
                  :href="project.github"
                  target="_blank"
                  rel="noopener"
                >
                  <i class="bx bxl-github mr-2"></i>
                  Github
                </v-btn>
              </div>
            </div>
          </v-img>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  head: {
    titleTemplate: 'Sushil - %s',
    title: 'Projects',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'This are some of my projects'
      }
    ]
  },
  data() {
    return {
      fetchProjects: []
    }
  },
  fetchOnServer: false,

  async fetch() {
    this.fetchProjects = await fetch(
      `https://sushil-kamble-default-rtdb.firebaseio.com/projects.json`
    ).then((res) => res.json())
  }
}
</script>
