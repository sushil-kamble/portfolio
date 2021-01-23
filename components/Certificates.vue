<template>
  <section :class="$vuetify.breakpoint.smAndUp ? 'px-4 mt-15' : 'mt-10'">
    <h1
      :class="`goldman primary--text my-head-font ${
        $vuetify.breakpoint.smAndDown && 'text-center'
      }`"
    >
      Certificates
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
          v-for="n in certificates.length"
          :key="n"
          v-slot="{ active, toggle }"
        >
          <v-card
            class="ma-3 grow"
            :width="$vuetify.breakpoint.smAndUp ? 300 : 180"
            @click="toggle"
          >
            <v-img
              :src="`https://drive.google.com/uc?export=view&id=${
                certificates[n - 1].imgId
              }`"
              :lazy-src="`https://drive.google.com/uc?export=view&id=${
                certificates[n - 1].lazyId
              }`"
              :height="$vuetify.breakpoint.smAndDown ? 150 : 180"
              contain
            ></v-img>
            <h2
              :class="`text-center goldman ${active && 'black--text'} ${
                $vuetify.breakpoint.smAndDown && 'mobile-font'
              }`"
              v-if="$vuetify.theme.dark"
            >
              {{ certificates[n - 1].name }}
            </h2>
            <h2
              :class="`text-center goldman ${active && 'white--text'} ${
                $vuetify.breakpoint.smAndDown && 'mobile-font'
              }`"
              v-else
            >
              {{ certificates[n - 1].name }}
            </h2>
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
              {{ certificates[model].name }}
            </h2>
            <v-divider class="primary"></v-divider>
            <h4 class="work-font">
              {{ certificates[model].description }}
            </h4>
            <v-btn
              class="px-4 mt-5"
              color="secondary"
              :small="$vuetify.breakpoint.smAndDown"
              :href="certificates[model].link"
              target="_blank"
            >
              <v-icon left>mdi-arrow-top-right</v-icon>
              View Certificate
            </v-btn>
          </div>
        </v-sheet>
      </v-expand-transition>
    </v-sheet>
  </section>
</template>

<script>
export default {
  data: () => ({
    model: null,
    certificates: [
      {
        name: 'Applied Data Science with Python',
        description: 'In this application we can set timer for a todo.',
        imgId: '11LqCGGBOHwRtRjG6OhjnEAfbyDeJe1_L',
        lazyId: '1Qy3xV117-4N7oxmm4arjCu2lsPhO4kGr',
        link:
          'https://www.coursera.org/account/accomplishments/specialization/certificate/P27GDLJU9AXU',
      },
      {
        name: 'Introduction to Data Science',
        description: 'This is a group chat application.',
        imgId: '16xDp2mOcXxJ28CPKx6K_SJZfs3hWJha0',
        lazyId: '1Qy3xV117-4N7oxmm4arjCu2lsPhO4kGr',
        link:
          'https://www.coursera.org/account/accomplishments/specialization/certificate/VG7VXC75AYS3',
      },
      {
        name: 'Neural Network and Deep Learning',
        description: 'this is awesome',
        imgId: '1ImTTizOKo_wwBt-nWnRON6gg2boxBhwV',
        lazyId: '1Qy3xV117-4N7oxmm4arjCu2lsPhO4kGr',
        link:
          'https://www.coursera.org/account/accomplishments/certificate/KWV9EZWBJ66B',
      },
      {
        name: 'Using Python to Access Web Data',
        description: 'this is awesome',
        imgId: '1S7Dw2pd8PM7CY0TeYNu10SiqzfbfUZvI',
        lazyId: '1Qy3xV117-4N7oxmm4arjCu2lsPhO4kGr',
        link:
          'https://www.coursera.org/account/accomplishments/certificate/EKGC3AP3NHZE',
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