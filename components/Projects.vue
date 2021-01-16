<template>
  <section :class="$vuetify.breakpoint.smAndUp ? 'px-4 mt-15' : 'mt-10'">
    <h1
      :class="`goldman primary--text my-head-font ${
        $vuetify.breakpoint.smAndDown && 'text-center'
      }`"
    >
      Projects
    </h1>
    <v-divider class="primary"></v-divider>
    <v-sheet :class="$vuetify.breakpoint.smAndUp && 'ma-4'" elevation="1">
      <v-slide-group
        v-model="model"
        :class="$vuetify.breakpoint.smAndUp && 'pa-3'"
        center-active
        active-class="primary"
        :show-arrows="$vuetify.breakpoint.mdAndUp"
      >
        <v-slide-item
          v-for="n in projects.length"
          :key="n"
          v-slot="{ active, toggle }"
        >
          <v-card
            :color="active ? undefined : 'grey lighten-1'"
            class="ma-4"
            :width="$vuetify.breakpoint.smAndUp ? 300 : 150"
            @click="toggle"
          >
            <v-img
              src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              :height="$vuetify.breakpoint.smAndDown ? 200 : 230"
              :aspect-ratio="1 / 1"
            ></v-img>
            <h1
              :class="`text-center goldman ${
                $vuetify.breakpoint.smAndDown && 'mobile-font'
              }`"
            >
              {{ projects[n - 1].name }}
            </h1>
          </v-card>
        </v-slide-item>
      </v-slide-group>
      <v-expand-transition>
        <v-sheet v-if="model != null" height="200" tile>
          <div class="fill-height pa-5">
            <h2 class="goldman text-center">
              {{ projects[model].name }}
            </h2>
            <v-divider class="primary"></v-divider>
            <h4 class="work-font px-2">
              Selected {{ projects[model].description }}
            </h4>
          </div>
        </v-sheet>
      </v-expand-transition>
    </v-sheet>
    <!-- <div :class="`${$vuetify.breakpoint.smAndUp && 'px-4'}`">
      <v-card class="mt-6" flat>
        <v-row>
          <v-col v-for="n in 3" :key="n" cols="12" md="4">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card :height="$vuetify.breakpoint.smAndDown ? 370 : 400">
                  <v-img
                    src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    :height="$vuetify.breakpoint.smAndDown ? 300 : 330"
                    :aspect-ratio="1 / 1"
                  ></v-img>
                  <h1 class="text-center goldman">Web app</h1>
                  <h4 class="text-center font-weight-light">
                    Short Description
                  </h4>

                  <v-fade-transition>
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="accent"
                      opacity="0.7"
                    >
                      <div class="px-2">
                        <h1
                          :class="`goldman ${
                            $vuetify.theme.dark && 'black--text'
                          }`"
                        >
                          Title
                        </h1>
                        <v-divider class="white"></v-divider>
                        <p
                          :class="`px-1 py-2 ${
                            $vuetify.theme.dark && 'black--text'
                          }`"
                        >
                          This is awesome Lorem, ipsum dolor sit amet
                          consectetur adipisicing elit. Quasi illum pariatur
                          eius aliquam totam laudantium provident laborum
                          debitis vitae maxime harum facilis, deleniti similique
                          delectus dolores explicabo, nostrum soluta voluptate.
                        </p>
                        <v-btn block dark>Visit website</v-btn>
                      </div>
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-card>
      <v-btn
        large
        block
        color="primary"
        class="mt-4 goldman"
        outlined
        to="/projects"
      >
        My Projects
      </v-btn>
    </div> -->
  </section>
</template>

<script>
export default {
  data: () => ({
    model: null,
    projects: [
      {
        name: 'Advance Todo',
        description: 'project1',
      },
      {
        name: 'Chathub',
        description: 'project2',
      },
      {
        name: 'Name3',
        description: 'project3',
      },
      {
        name: 'Name4',
        description: 'project4',
      },
    ],
  }),
}
</script>

<style scoped>
.my-head-font {
  font-size: 35px;
}
</style>