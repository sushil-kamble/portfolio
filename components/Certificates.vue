<template>
  <section class="sm-up-px4">
    <h1
      class="goldman primary--text my-head-font my-text-center"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      Certificates
    </h1>
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
          :class="$vuetify.breakpoint.smAndUp && 'pa-3'"
          center-active
          active-class="primary"
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
                :src="`img/certificates/${certificates[n - 1].img}`"
                :height="$vuetify.breakpoint.smAndDown ? 150 : 180"
                contain
              ></v-img>
              <h2
                :class="`text-center goldman mobile-font px-1 ${
                  active && 'black--text'
                } `"
                v-if="$vuetify.theme.dark"
              >
                {{ certificates[n - 1].name }}
              </h2>
              <h2
                :class="`text-center goldman mobile-font px-1 ${
                  active && 'white--text'
                }`"
                v-else
              >
                {{ certificates[n - 1].name }}
              </h2>
            </v-card>
          </v-slide-item>
        </v-slide-group>
        <h6 class="grey--text work-font text-center">
          To see all my certificates click on the link below
        </h6>
        <v-btn
          large
          block
          color="primary"
          class="mt-2 goldman"
          outlined
          target="_black"
          href="https://drive.google.com/drive/folders/1JkQzuXrddb1A_k4DCSJ7vZfMreMoDSa-?usp=sharing"
        >
          My Certificates
        </v-btn>
      </v-sheet>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    model: null,
    certificates: [
      {
        name: 'Applied Data Science with Python',
        img: 'applied_data_science.jpg'
      },
      {
        name: 'Introduction to Data Science',
        img: 'intro_to_data_science.jpg'
      },
      {
        name: 'Neural Network and Deep Learning',
        img: 'deep_learning.jpg'
      },
      {
        name: 'Using Python to Access Web Data',
        img: 'using_python_access_web_data.jpg'
      },
      {
        name: 'Applied Machine Learning in Python',
        img: 'applied_machine_learning_in_python.jpg'
      }
    ]
  })
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