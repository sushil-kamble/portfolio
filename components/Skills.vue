<template>
  <section class="sm-up-px4 my-margin-bottom-large">
    <h1
      class="goldman blue--text text--accent-3 my-text-center"
      style="font-size: 35px"
    >
      Skills
    </h1>
    <v-divider class="blue accent-3"></v-divider>
    <v-card class="mt-6" flat color="transparent">
      <v-row class="sm-col-rev">
        <v-col md="6" cols="12">
          <h3 class="mb-4 work-font text-justify mobile-font">
            Expertise in Core Python and Javascript, along with their famous
            framework like django and vue.js respectively. Decent knowledge
            about Google's Cloud Platform & Firebase. git, github, react.js,
            nuxt.js, next.js, gatsby, flask, MySQL, vscode, webstorm,
            numpy/pandas are some of the libraries/technologies I have used.
          </h3>
          <v-card
            class="mb-2 transparent"
            elevation="6"
            v-for="skill in skills"
            :key="skill.id"
          >
            <div class="d-flex justify-space-between px-3 align-center">
              <i
                :class="`${skill.icon} blue--text text--accent-3`"
                style="font-size: 30px"
              ></i>
              <h4 class="goldman pt-1">{{ skill.name }}</h4>
              <h4 class="goldman">{{ skill.per }}%</h4>
            </div>

            <v-progress-linear
              color="blue accent-3"
              :value="skill.per"
            ></v-progress-linear>
          </v-card>
          <h6 class="grey--text work-font mt-4">
            Click on MY SKILLS button to get more info.
          </h6>
        </v-col>
        <v-col md="6" cols="12">
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
        color="blue accent-3"
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
  name: 'Skills',
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
          per: 60
        },
        {
          id: 5,
          name: 'Firebase',
          icon: 'bx bxl-firebase',
          per: 80
        }
      ]
    }
  }
}
</script>


