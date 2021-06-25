<template>
  <section class="sm-up-px4 my-margin-bottom-large">
    <h1 class="goldman blue--text text--accent-3 my-text-center big-font">
      About Me
    </h1>
    <v-divider class="blue accent-3"></v-divider>
    <v-card class="mt-6" flat color="transparent">
      <v-row class="sm-col-rev">
        <v-col md="8" cols="12">
          <h3 class="mb-2 work-font text-justify mobile-font">
            I am a computer engineer, who is filled with enthusiasm about web
            development, building projects & learning new technologies. I love
            developing ideas that come to my mind. Learning new technologies is
            my hobby along with playing games and watching web series and
            movies. I keep myself up-to-date with the new trends going around
            the world. Passionate about project planning and development. I have
            pleasant knowledge about frontend and backend technologies as I have
            developed few interesting projects using them.
          </h3>
          <br />
          <div
            class="d-flex align-center work-font mb-2"
            v-for="(item, id) in items"
            :key="id"
          >
            <i
              :class="`${item.icon} mr-4 blue--text text--accent-2`"
              style="font-size: 30px"
            ></i>
            <h3 class="mobile-font">
              {{ item.title }}
            </h3>
          </div>
        </v-col>
        <v-col md="4" cols="12">
          <v-card flat class="d-flex justify-end align-center">
            <v-img
              :aspect-ratio="8 / 7"
              max-height="280"
              src="img/hero.jpg"
              lazy-src="img/hero_com.jpg"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Pimpri Chinchwad College of Engineering, Pune',
          icon: 'bx bxs-school'
        },
        {
          title: 'B.E. Computer Engineering',
          icon: 'bx bxs-book-alt'
        },
        {
          title: 'Expected Graduation 2022',
          icon: 'bx bxs-graduation'
        }
      ]
    }
  }
}
</script>
