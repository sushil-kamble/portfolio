<template>
  <v-container>
    <v-row :class="`${$vuetify.breakpoint.smAndUp && 'mx-1'} mb-5`">
      <v-col md="6" cols="12" v-for="project in projects" :key="project.imgId">
        <v-img
          :src="`https://drive.google.com/uc?export=view&id=${project.imgId}`"
          :lazy-src="`https://drive.google.com/uc?export=view&id=${project.lazyId}`"
          :aspect-ratio="3 / 2"
          :gradient="
            $vuetify.theme.dark
              ? '16deg, rgba(235,235,0,0.9) 38%, rgba(0,0,0,0.2) 100%'
              : '76deg, rgba(0,57,189,0.9) 38%, rgba(58,132,255,0.2) 100%'
          "
          class="pa-4"
          :light="$vuetify.theme.dark"
          :dark="!$vuetify.theme.dark"
        >
          <h1 class="goldman">{{ project.name }}</h1>
          <v-divider class="white"></v-divider>
          <div class="mt-2">
            <p>
              {{ project.description }}
            </p>
            <h2>Features</h2>
            <ul>
              <li v-for="(feature, x) in project.features" :key="x">
                {{ feature }}
              </li>
            </ul>
            <h2>Tech Stack</h2>
            <ul>
              <li v-for="(tech, y) in project.techStack" :key="y">
                {{ tech }}
              </li>
            </ul>
            <p>
              <v-btn
                class="px-4 mt-4"
                dark
                :large="$vuetify.breakpoint.smAndUp"
                :small="$vuetify.breakpoint.smAndDown"
                :href="project.link"
                target="_blank"
                v-if="project.link"
              >
                <v-icon left>mdi-arrow-top-right</v-icon>
                Direct link
              </v-btn>
              <v-btn
                class="px-4 mt-4"
                dark
                :large="$vuetify.breakpoint.smAndUp"
                :small="$vuetify.breakpoint.smAndDown"
                :href="project.link"
                target="_blank"
              >
                <v-icon left>mdi-github</v-icon>
                Github
              </v-btn>
            </p>
          </div>
        </v-img>
      </v-col>
    </v-row>
  </v-container>

  <!-- yzEOTtukOtY3mdYe -->
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Advanced Todo List',
          description: 'this is awesome',
          imgId: '1zUbCpbaX27EqSr96zFA57GS_tXmT4_oo',
          lazyId: '1BpNDOgP_VUj366SmTdAN6ykrtNJPoRm8',
          features: ['1 awesome', '1 awesome', '1 awesome'],
          techStack: ['1 awesome', '1 awesome', '1 awesome'],
          link: 'https://allofmytodo.web.app/',
          github: 'https://github.com/sushil-kamble/advanced-todo',
        },
        {
          name: 'Chat-hub',
          description: 'this is awesome',
          imgId: '1lPUIviHI9rrYpIMK_bGL7ZZt-P_RRnPg',
          lazyId: '1fN6wVex6ZfILU9vHSlA6kdiRESbu6jVo',
          features: ['1 awesome', '1 awesome', '1 awesome'],
          techStack: ['1 awesome', '1 awesome', '1 awesome'],
          link: 'https://chatonweb-chathub.web.app/',
          github: 'https://github.com/sushil-kamble/chat-hub',
        },
        {
          name: 'Movie Hub',
          description: 'this is awesome',
          imgId: '14WYWKXGe7Ha16oVWdS_6h9pwfozwnmnJ',
          lazyId: '1N4M41ivHVuooVC-9TQN2uEwAtwZ0aylF',
          features: ['1 awesome', '1 awesome', '1 awesome'],
          techStack: ['1 awesome', '1 awesome', '1 awesome'],
          github: 'https://github.com/sushil-kamble/movie-recommender',
        },
        {
          name: 'Transaction Dairy',
          description: 'this is awesome',
          imgId: '1D3CK-oZOXCHMb1RNANdAhbOl1v-QJTO-',
          lazyId: '117B1SQ7kNsVxArZU81h95N5JDfj7GhMB',
          features: ['1 awesome', '1 awesome', '1 awesome'],
          techStack: ['1 awesome', '1 awesome', '1 awesome'],
          link: 'https://my-transfers.web.app/',
          github: 'https://github.com/sushil-kamble/transactions-diary',
        },
      ],
    }
  },
}
</script>