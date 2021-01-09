<template>
  <section :class="$vuetify.breakpoint.smAndUp ? 'px-4 mt-15' : 'mt-10'">
    <h1 class="goldman primary--text my-head-font">Projects</h1>
    <v-divider class="primary"></v-divider>
    <div :class="`${$vuetify.breakpoint.smAndUp && 'px-4'}`">
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
                      color="primary"
                      opacity="0.8"
                    >
                      <div class="px-2">
                        <h1 class="goldman">Title</h1>
                        <v-divider class="white"></v-divider>
                        <p class="px-1 py-2">
                          This is awesome Lorem, ipsum dolor sit amet
                          consectetur adipisicing elit. Quasi illum pariatur
                          eius aliquam totam laudantium provident laborum
                          debitis vitae maxime harum facilis, deleniti similique
                          delectus dolores explicabo, nostrum soluta voluptate.
                        </p>
                        <v-btn block color="secondary">Visit website</v-btn>
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
    </div>
  </section>
</template>

<style scoped>
.my-head-font {
  font-size: 35px;
}
</style>