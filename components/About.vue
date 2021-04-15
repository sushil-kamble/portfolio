<template>
  <section class="sm-up-px4">
    <h1
      class="goldman primary--text my-head-font my-text-center"
      data-aos="fade-right"
    >
      About Me
    </h1>
    <v-divider
      class="primary"
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="1000"
    ></v-divider>
    <v-card
      class="mt-6 my-margin-bottom-large sm-up-px4"
      flat
      color="transparent"
    >
      <v-row>
        <v-col md="4" cols="12" data-aos="zoom-out-left">
          <v-card flat color="transparent" class="my-text-center">
            <v-img
              src="img/hero.jpg"
              lazy-src="img/hero_com.jpg"
              class="max-height-img"
              :contain="$vuetify.breakpoint.smAndUp"
            ></v-img>
          </v-card>
        </v-col>
        <v-col md="8" cols="12" data-aos="zoom-in-right">
          <h3 class="work-font text-justify mobile-font">
            I am a computer engineer, who is filled with enthusiasm about web
            development, building projects & learning new technologies. I love
            developing ideas that come to my mind. Learning new technologies is
            my hobby along with playing games and watching movies. I keep myself
            up-to-date with the new trends going around the world. Passionate
            about project planning and development. I have plesant knowledge
            about frontend and backend technologies as I have developed few
            interesting projects using them.
          </h3>
          <br />
          <div
            class="d-flex align-center work-font mb-2"
            v-for="(item, id) in items"
            :key="id"
          >
            <i :class="`${item.icon} my-skill-icon mr-4`"></i>
            <h3 class="mobile-font">{{ item.title }}</h3>
          </div>
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
          title: 'Pimpri Chichwad College of Engineering, Pune',
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

<style scoped>
.my-head-font {
  font-size: 35px;
}
.my-skill-icon {
  font-size: 30px;
}
</style>