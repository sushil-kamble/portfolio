<template>
  <section :class="$vuetify.breakpoint.smAndUp ? 'px-4 mt-15' : 'mt-10'">
    <h1
      :class="`goldman primary--text my-head-font ${
        $vuetify.breakpoint.smAndDown && 'text-center'
      }`"
    >
      Projects
    </h1>
    <v-divider class="primary mb-4"></v-divider>
    <v-sheet :class="$vuetify.breakpoint.smAndUp && 'ma-4'" color="transparent">
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
              :class="`text-center goldman ${active && 'black--text'} ${
                $vuetify.breakpoint.smAndDown && 'mobile-font'
              }`"
              v-if="$vuetify.theme.dark"
            >
              {{ projects[n - 1].name }}
            </h1>
            <h1
              :class="`text-center goldman ${active && 'white--text'} ${
                $vuetify.breakpoint.smAndDown && 'mobile-font'
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
          <div class="fill-height text-center pa-5">
            <h2 class="goldman">
              {{ projects[model].name }}
            </h2>
            <v-divider class="primary"></v-divider>
            <h4 class="work-font">
              {{ projects[model].description }}
            </h4>
            <p class="text-caption my-2">For more info see project page.</p>
            <p>
              <v-btn
                class="px-4"
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
                class="px-4"
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
        description: 'In this application we can set timer for a todo.',
        img: 'todo.png',
        link: 'https://allofmytodo.web.app/',
        github: 'https://github.com/sushil-kamble/advanced-todo',
      },
      {
        name: 'Chat-hub',
        description: 'This is a group chat application.',
        img: 'chathub.png',
        link: 'https://chatonweb-chathub.web.app/',
        github: 'https://github.com/sushil-kamble/chat-hub',
      },
      {
        name: 'Movie Hub',
        description: 'this is awesome',
        img: 'rec.jpg',
        github: 'https://github.com/sushil-kamble/movie-recommender',
      },
      {
        name: 'Transaction Dairy',
        description: 'this is awesome',
        img: 'transfer.png',
        link: 'https://my-transfers.web.app/',
        github: 'https://github.com/sushil-kamble/transactions-diary',
      },
    ],
  }),
}
</script>

<style scoped>
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