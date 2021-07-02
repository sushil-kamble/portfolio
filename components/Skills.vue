<template>
  <section class="sm-up-px4 my-margin-bottom-large">
    <h1 class="goldman blue--text text--accent-3 my-text-center big-font">
      Skills
    </h1>
    <v-divider class="blue accent-3"></v-divider>
    <v-card class="mt-6" flat color="transparent">
      <v-row>
        <v-col md="4" cols="12">
          <v-card flat class="d-flex justify-end align-center">
            <v-img
              :aspect-ratio="8 / 7"
              max-height="250"
              src="img/skills.jpg"
              lazy-src="img/skills_com.jpg"
            ></v-img>
          </v-card>
        </v-col>
        <v-col md="8" cols="12">
          <div>
            <h3 class="mb-4 work-font text-justify mobile-font">
              {{ skills.desp }}
            </h3>
            <v-card color="transparent" flat>
              <div>
                <v-chip-group column>
                  <v-chip
                    v-for="(tag, i) in skills.tags"
                    :key="i"
                    class="primary goldman"
                    small
                    outlined
                    label
                    :href="tag.link"
                    target="_blank"
                  >
                    {{ tag.name }}
                  </v-chip>
                </v-chip-group>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: {
        desp: 'I am a full stack web application developer. Python and Javascript are my favourites. My frontend skills are HTML, CSS and basic to moderate level Javascript along with JS frameworks like vue.js and react. Backend skills are firebase, django, node.js. Databases I have worked with are MySQL, mongoDB. Good hold over technologies like git and GitHub, and tools like vscode and webstorm. I constantly practice problems on leetcode, hackerearth and hackerrank. Used next gen technologies like next.js, nuxt.js, tailwindcss in my projects. Other languages familiar to are Java and c++.',
        tags: {
          bootstarp: {
            link: 'https://getbootstrap.com/',
            name: 'Bootstarp 4'
          },
          css3: {
            link: 'https://en.wikipedia.org/wiki/CSS',
            name: 'CSS3'
          },
          django: {
            link: 'https://www.djangoproject.com/',
            name: 'Django'
          },
          git: {
            link: 'https://git-scm.com',
            name: 'git'
          },
          github: {
            link: 'https://github.com/sushil-kamble',
            name: 'GitHub'
          },
          html5: {
            link: 'https://en.wikipedia.org/wiki/HTML5',
            name: 'HTML5'
          },
          javascipt: {
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            name: 'Javascipt'
          },
          materialize: {
            link: 'https://materializecss.com/',
            name: 'Materialize'
          },
          mongodb: {
            link: 'https://www.mongodb.com/',
            name: 'mongoDB'
          },
          mysql: {
            link: 'https://www.mysql.com/',
            name: 'MySQL'
          },
          node: {
            link: 'https://nodejs.org/en/',
            name: 'Node.js'
          },
          nuxt: {
            link: 'https://nuxtjs.org/',
            name: 'Nuxt.js'
          },
          postgresql: {
            link: 'https://www.postgresql.org/',
            name: 'PostgreSQL'
          },
          python: {
            link: 'https://www.python.org/',
            name: 'Python'
          },
          react: {
            link: 'https://reactjs.org/',
            name: 'React'
          },
          sqlite: {
            link: 'https://www.sqlite.org/index.html',
            name: 'SQLite'
          },
          vscode: {
            link: 'https://code.visualstudio.com/',
            name: 'vscode'
          },
          vue: {
            link: 'https://vuejs.org/',
            name: 'vue.js'
          },
          vueRouter: {
            link: 'https://router.vuejs.org/',
            name: 'Vue Router'
          },
          vuetify: {
            link: 'https://vuetifyjs.com/en',
            name: 'Vuetify'
          },
          vuex: {
            link: 'https://vuex.vuejs.org/',
            name: 'Vuex'
          }
        }
      }
    }
  }
}
</script>


