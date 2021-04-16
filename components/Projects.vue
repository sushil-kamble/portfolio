<template>
  <div class="my-margin-bottom-large sm-up-px4">
    <div data-aos="fade-right" data-aos-duration="1000">
      <h1 class="goldman primary--text my-head-font my-text-center">
        Projects
      </h1>
    </div>
    <v-divider
      class="primary mb-4"
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="1500"
    ></v-divider>
    <div data-aos="zoom-in-up" data-aos-delay="100">
      <v-sheet class="sm-up-ma-4" color="transparent">
        <v-slide-group
          v-model="model"
          class="sm-up-pa-3"
          center-active
          active-class="primary"
          mobile-breakpoint="960"
        >
          <template v-slot:prev="{}">
            <v-btn fab small icon>
              <i class="bx bx-left-arrow-alt icon-font"></i>
            </v-btn>
          </template>
          <template v-slot:next="{}">
            <v-btn fab small icon>
              <i class="bx bx-right-arrow-alt icon-font"></i>
            </v-btn>
          </template>
          <v-slide-item
            v-for="(project, n) in projects"
            :key="n"
            v-slot="{ toggle }"
          >
            <v-card class="ma-3 grow width-card" @click="toggle">
              <v-img
                :src="`${project.img}`"
                class="height-img"
                position="center"
              ></v-img>
              <h2 class="text-center goldman mobile-font">
                {{ project.name }}
              </h2>
            </v-card>
          </v-slide-item>
        </v-slide-group>
        <h6 class="grey--text work-font text-center">
          To see more projects click on My Projects
        </h6>
        <v-expand-transition>
          <v-sheet
            v-if="model != null"
            height="200"
            elevation="2"
            max-width="600"
            class="mx-auto transparent"
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
                  small
                  :href="projects[model].link"
                  target="_blank"
                  v-if="projects[model].link"
                >
                  <i class="bx bxs-right-top-arrow-circle mr-2"></i>
                  Direct link
                </v-btn>
                <v-btn
                  class="px-3"
                  color="secondary"
                  small
                  :href="projects[model].github"
                  target="_blank"
                >
                  <i class="bx bxl-github mr-2"></i>
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
    </div>
  </div>
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
        img: 'img/projects/todo.png',
        link: 'https://allofmytodo.web.app/',
        github: 'https://github.com/sushil-kamble/advanced-todo'
      },
      {
        name: 'Chat Hub',
        description:
          'ChatHub is a group chat Progressive Web App(PWA) which involving authentication and real-time presence system.',
        img: 'img/projects/chathub.png',
        link: 'https://chatonweb-chathub.web.app/',
        github: 'https://github.com/sushil-kamble/chat-hub'
      },
      {
        name: 'Transaction Dairy',
        description:
          'Transaction Diary is a PWA where you can make a note of credit that your friend has borrowed from you.',
        img: 'img/projects/transfer.png',
        link: 'https://my-transfers.web.app/',
        github: 'https://github.com/sushil-kamble/transactions-diary'
      },
      {
        name: 'Movie Hub',
        description:
          'Movie Hub is complete platform for movie lovers, with recommendation, chat, movie filtering system, watchlist and reviews.',
        img: 'img/projects/rec.jpg',
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