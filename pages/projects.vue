<template>
  <v-container>
    <v-row class="mx-1 mb-5">
      <v-col md="6" cols="12" v-for="project in projects" :key="project.imgId">
        <v-img
          :src="`https://drive.google.com/uc?export=view&id=${project.imgId}`"
          :aspect-ratio="3 / 2"
          gradient="76deg, rgba(0,57,189,0.9) 38%, rgba(58,132,255,0.2) 100%"
          class="pa-4"
          dark
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
                large
                :href="project.link"
                target="_blank"
                v-if="project.link"
              >
                <v-icon left>mdi-arrow-top-right</v-icon>
                Direct link
              </v-btn>
              <v-btn
                class="px-4 mt-4"
                large
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
          features: ['1 awesome', '1 awesome', '1 awesome'],
          techStack: ['1 awesome', '1 awesome', '1 awesome'],
          link: 'https://allofmytodo.web.app/',
          github: 'https://github.com/sushil-kamble/advanced-todo',
        },
        {
          name: 'Chat-hub',
          description: 'this is awesome',
          imgId: '1lPUIviHI9rrYpIMK_bGL7ZZt-P_RRnPg',
          features: ['1 awesome', '1 awesome', '1 awesome'],
          techStack: ['1 awesome', '1 awesome', '1 awesome'],
          link: 'https://chatonweb-chathub.web.app/',
          github: 'https://github.com/sushil-kamble/chat-hub',
        },
        {
          name: 'Movie Hub',
          description: 'this is awesome',
          imgId: '14WYWKXGe7Ha16oVWdS_6h9pwfozwnmnJ',
          features: ['1 awesome', '1 awesome', '1 awesome'],
          techStack: ['1 awesome', '1 awesome', '1 awesome'],
          github: 'https://github.com/sushil-kamble/movie-recommender',
        },
        {
          name: 'Transaction Dairy',
          description: 'this is awesome',
          imgId: '1D3CK-oZOXCHMb1RNANdAhbOl1v-QJTO-',
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