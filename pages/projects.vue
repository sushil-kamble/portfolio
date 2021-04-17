<template>
  <v-container>
    <v-card class="sm-up-px4 pb-2 transparent" flat>
      <h1
        class="goldman primary--text my-text-center"
        data-aos="zoom-out-left"
        data-aos-delay="0"
        data-aos-duration="1000"
      >
        MY PROJECTS
      </h1>
      <v-divider
        class="primary mb-4"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="2000"
      ></v-divider>
      <h2 v-if="$fetchState.pending" class="work-font">Fetching Data...</h2>
      <v-row class="mb-5" v-else>
        <v-col
          md="6"
          cols="12"
          v-for="project in fetchProjects"
          :key="project.imgId"
          data-aos="zoom-out-left"
          data-aos-offset="10"
          :data-aos-delay="project.delay"
        >
          <v-img
            :src="`${project.img}`"
            :aspect-ratio="3 / 2"
            gradient="76deg, rgba(66, 66, 66, 0.9) 38%, rgba(0, 0, 0, 0.2) 100%"
            class="pa-4 white--text rounded-lg mobile-font elevation-10"
          >
            <h2 class="goldman">{{ project.name }}</h2>
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

              <p class="goldman">
                <v-btn
                  class="px-4 mt-4 mr-2"
                  dark
                  small
                  :href="project.link"
                  target="_blank"
                  v-if="project.link"
                >
                  <i class="bx bxs-right-top-arrow-circle mr-2"></i>
                  Direct link
                </v-btn>
                <v-btn
                  class="px-4 mt-4"
                  dark
                  small
                  :href="project.github"
                  target="_blank"
                >
                  <i class="bx bxl-github mr-2"></i>
                  Github
                </v-btn>
              </p>
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
