<template>
  <v-container>
    <v-card class="sm-up-px4 pb-2 transparent" flat>
      <h1
        class="goldman primary--text my-head-font my-text-center"
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
      <v-row class="mb-5">
        <v-col
          md="6"
          cols="12"
          v-for="project in projects"
          :key="project.imgId"
          data-aos="zoom-out-left"
          data-aos-offset="10"
          :data-aos-delay="project.delay"
        >
          <v-img
            :src="`img/projects/${project.img}`"
            :aspect-ratio="3 / 2"
            :gradient="`76deg, ${hexToRgbA(
              $vuetify.theme.themes.dark.accent
            )} 38%, rgba(0,0,0,0.2) 100%`"
            class="pa-4 white--text rounded-lg elevation-10"
          >
            <div class="mobile-font">
              <h2 class="goldman">{{ project.name }}</h2>
              <v-divider></v-divider>
              <div class="mt-2 work-font font-weight-bold">
                <p>
                  {{ project.description }}
                </p>
                <h3 class="goldman">Features</h3>
                <ul>
                  <li v-for="(feature, x) in project.features" :key="x">
                    {{ feature }}
                  </li>
                </ul>
                <h3 class="goldman">Tech Stack</h3>
                <ul>
                  <li v-for="(tech, y) in project.techStack" :key="y">
                    {{ tech }}
                  </li>
                </ul>
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
      projects: [
        {
          name: 'Advanced Todo List',
          delay: 0,
          description:
            'My Todos is an advance Todo PWA with auth system, timed todo feature and many real-time functionalities.',
          img: 'todo.png',
          features: [
            'Authentication',
            'Realtime todo sync',
            'Set a deadline for a todo'
          ],
          techStack: [
            'vue.js, vue-router & vuex',
            'Firebase Auth and Cloud Firestore',
            'vuetify'
          ],
          link: 'https://allofmytodo.web.app/',
          github: 'https://github.com/sushil-kamble/advanced-todo'
        },
        {
          name: 'Chat-hub',
          delay: 200,
          description:
            'ChatHub is a group chat Progressive Web App(PWA) which involving authentication and real-time presence system.',
          img: 'chathub.png',
          features: [
            'Responsive and Simple UI',
            'Authenticatiion & Realtime Chat Sync',
            'Realtime Presence'
          ],
          techStack: [
            'vue.js, vue-router & vuex',
            'Firebase Auth and Database',
            'vuetify'
          ],
          link: 'https://chatonweb-chathub.web.app/',
          github: 'https://github.com/sushil-kamble/chat-hub'
        },
        {
          name: 'Transaction Dairy',
          delay: 400,
          description:
            'Transaction Diary is a PWA where you can make a note of credit that your friend has borrowed from you.',
          img: 'transfer.png',
          features: [
            'Authentication',
            'Responsive and simple UI',
            'Realtime Updates'
          ],
          techStack: [
            'vue.js, vue-router & vuex',
            'Firebase Auth and Cloud Firestore',
            'vuetify'
          ],
          link: 'https://my-transfers.web.app/',
          github: 'https://github.com/sushil-kamble/transactions-diary'
        },
        {
          name: 'Movie Hub',
          delay: 600,
          description:
            'Movie Hub is complete platform for movie lovers, with recommendation, chat, movie filtering system, watchlist and reviews.',
          img: 'rec.jpg',
          features: [
            'Authentication',
            'Recommendation System & Chat System',
            'Watchlist, Reviews and Rating'
          ],
          techStack: [
            'Django, Django-channels and rest-framework',
            'Pandas, Numpy, bs4, Requests',
            'Vue.js & Bootstrap'
          ],
          github: 'https://github.com/sushil-kamble/movie-recommender'
        }
      ]
    }
  },
  methods: {
    hexToRgbA(hex) {
      var c
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('')
        if (c.length == 3) {
          c = [c[0], c[0], c[1], c[1], c[2], c[2]]
        }
        c = '0x' + c.join('')
        return (
          'rgba(' +
          [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
          ',0.9)'
        )
      }
      throw new Error('Bad Hex')
    }
  }
}
</script>
