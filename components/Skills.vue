<template>
  <section class="sm-up-px4">
    <h1
      class="goldman primary--text my-head-font my-text-center"
      data-aos="fade-right"
    >
      Skills
    </h1>
    <v-divider
      class="primary"
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="1000"
    ></v-divider>
    <v-card
      class="my-margin-bottom-large mt-6 sm-up-px4"
      flat
      color="transparent"
    >
      <v-row class="sm-col-rev">
        <v-col md="6" class="hero-two" cols="12" data-aos="zoom-out-left">
          <h4 class="mb-4 work-font my-text-center text-justify">
            Expertise in Core Python and Javascript, along with their famous
            framework like django and vue.js respectively. Desent knowlegde
            about Google's Cloud Platform & Firebase. git, github, react.js,
            nuxt.js, next.js, gatsby, flask, MySQL, vscode, webstorm,
            numpy/pandas are some of the libraries/technologies I have used.
          </h4>
          <v-card class="mb-2" v-for="skill in skills" :key="skill.id">
            <div class="d-flex justify-space-between px-3 align-center">
              <i :class="`${skill.icon} primary--text my-skill-icon`"></i>
              <h4 class="goldman pt-1">{{ skill.name }}</h4>
              <h4 class="goldman">{{ skill.per }}%</h4>
            </div>

            <v-progress-linear
              color="primary"
              :value="skill.per"
            ></v-progress-linear>
          </v-card>
          <h6 class="grey--text work-font">
            Click on MY SKILLS to check out My Skills and also my Technology
            Stack
          </h6>
        </v-col>
        <v-col md="6" cols="12" data-aos="zoom-in-right">
          <v-card flat class="d-flex justify-end align-center">
            <v-img
              :aspect-ratio="8 / 7"
              max-height="360"
              src="img/skills.jpg"
              lazy-src="img/skills_com.jpg"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-btn
        large
        block
        color="primary"
        class="mt-3 goldman"
        outlined
        to="/skills"
      >
        My Skills
      </v-btn>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          id: 1,
          name: 'CSS3',
          icon: 'bx bxl-css3',
          per: 60
        },
        {
          id: 2,
          name: 'Javascript - vue.js',
          icon: 'bx bxl-vuejs',
          per: 80
        },
        {
          id: 3,
          name: 'Python - django',
          icon: 'bx bxl-django',
          per: 70
        },
        {
          id: 4,
          name: 'React',
          icon: 'bx bxl-react',
          per: 50
        },
        {
          id: 6,
          name: 'Firebase',
          icon: 'bx bxl-firebase',
          per: 80
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