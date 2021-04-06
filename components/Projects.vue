<template>
  <section class="my-margin-bottom-large sm-up-px4">
    <h1
      class="goldman primary--text my-head-font my-text-center"
      data-aos="zoom-out-right"
      data-aos-duration="1000"
    >
      Projects
    </h1>
    <v-divider
      class="primary mb-4"
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="1500"
    ></v-divider>
    <v-sheet
      class="sm-up-ma-4"
      color="transparent"
      data-aos="zoom-in-up"
      data-aos-delay="200"
    >
      <v-slide-group
        v-model="model"
        :class="$vuetify.breakpoint.smAndUp && 'pa-3'"
        center-active
        :active-class="$vuetify.theme.dark ? 'accent' : 'primary'"
        :show-arrows="$vuetify.breakpoint.mdAndUp"
      >
        <v-slide-item
          v-for="n in projects.length"
          :key="n"
          v-slot="{ active, toggle }"
        >
          <v-card
            class="ma-3 grow"
            :width="$vuetify.breakpoint.smAndUp ? 300 : 180"
            @click="toggle"
          >
            <v-img
              :src="`img/projects/${projects[n - 1].img}`"
              :height="$vuetify.breakpoint.smAndDown ? 200 : 230"
              :aspect-ratio="1 / 1"
            ></v-img>
            <h1
              :class="`text-center goldman mobile-font ${
                active && 'black--text'
              }`"
              v-if="$vuetify.theme.dark"
            >
              {{ projects[n - 1].name }}
            </h1>
            <h1
              :class="`text-center goldman mobile-font ${
                active && 'white--text'
              }`"
              v-else
            >
              {{ projects[n - 1].name }}
            </h1>
          </v-card>
        </v-slide-item>
      </v-slide-group>
      <v-expand-transition>
        <v-sheet
          v-if="model != null"
          height="200"
          elevation="2"
          max-width="600"
          class="mx-auto"
        >
          <div class="fill-height text-center work-font mobile-font pa-5">
            <h2 class="goldman">
              {{ projects[model].name }}
            </h2>
            <v-divider class="primary"></v-divider>
            <h4>
              {{ projects[model].description }}
            </h4>
            <p class="my-2" style="font-size: 9px">
              For info about technology stack, see the project page
            </p>
            <p class="goldman">
              <v-btn
                class="px-3 mr-2"
                color="secondary"
                :small="$vuetify.breakpoint.smAndDown"
                :href="projects[model].link"
                target="_blank"
                v-if="projects[model].link"
              >
                <v-icon left>mdi-arrow-top-right</v-icon>
                Direct link
              </v-btn>
              <v-btn
                class="px-3"
                color="secondary"
                :small="$vuetify.breakpoint.smAndDown"
                :href="projects[model].github"
                target="_blank"
              >
                <v-icon left>mdi-github</v-icon>
                Github
              </v-btn>
            </p>
          </div>
        </v-sheet>
      </v-expand-transition>
      <v-btn
        large
        block
        color="primary"
        class="mt-3 goldman"
        outlined
        to="/projects"
      >
        My Projects
      </v-btn>
    </v-sheet>
  </section>
</template>

<script>
export default {
  data: () => ({
    model: null,
    projects: [
      {
        name: 'Advanced Todo',
        description:
          'My Todos is an advance Todo PWA with auth system, timed todo feature and many real-time functionalities.',
        img: 'todo.png',
        link: 'https://allofmytodo.web.app/',
        github: 'https://github.com/sushil-kamble/advanced-todo'
      },
      {
        name: 'Chat Hub',
        description:
          'ChatHub is a group chat Progressive Web App(PWA) which involving authentication and real-time presence system.',
        img: 'chathub.png',
        link: 'https://chatonweb-chathub.web.app/',
        github: 'https://github.com/sushil-kamble/chat-hub'
      },
      {
        name: 'Transaction Dairy',
        description:
          'Transaction Diary is a PWA where you can make a note of credit that your friend has borrowed from you.',
        img: 'transfer.png',
        link: 'https://my-transfers.web.app/',
        github: 'https://github.com/sushil-kamble/transactions-diary'
      },
      {
        name: 'Movie Hub',
        description:
          'Movie Hub is complete platform for movie lovers, with recommendation, chat, movie filtering system, watchlist and reviews.',
        img: 'rec.jpg',
        github: 'https://github.com/sushil-kamble/movie-recommender'
      }
    ]
  })
}
</script>

<style>
.my-head-font {
  font-size: 35px;
}
.grow {
  transition: all 0.2s ease-in-out;
}
.grow:hover {
  transform: scale(1.05);
}
</style>