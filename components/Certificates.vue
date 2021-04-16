<template>
  <div class="sm-up-px4">
    <div data-aos="fade-right" data-aos-duration="1000">
      <h1 class="goldman primary--text my-head-font my-text-center">
        Certificates
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
            v-for="(certificate, n) in certificates"
            :key="n"
            v-slot="{ toggle }"
          >
            <v-card class="ma-3 grow width-card" @click="toggle">
              <v-img
                :src="`${certificate.img}`"
                class="height-img"
                position="center"
              ></v-img>
              <h2 class="text-center goldman mobile-font px-1">
                {{ certificate.name }}
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
  </div>
</template>

<script>
export default {
  data: () => ({
    model: null,
    certificates: [
      {
        name: 'Applied Data Science with Python',
        img: 'img/certificates/applied_data_science.jpg'
      },
      {
        name: 'Introduction to Data Science',
        img: 'img/certificates/intro_to_data_science.jpg'
      },
      {
        name: 'Neural Network and Deep Learning',
        img: 'img/certificates/deep_learning.jpg'
      },
      {
        name: 'Using Python to Access Web Data',
        img: 'img/certificates/using_python_access_web_data.jpg'
      },
      {
        name: 'Applied Machine Learning in Python',
        img: 'img/certificates/applied_machine_learning_in_python.jpg'
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