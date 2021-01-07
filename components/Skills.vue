<template>
  <section class="px-4 mt-15">
    <h1 class="goldman primary--text my-head-font">Skills</h1>
    <v-divider class="primary"></v-divider>
    <v-card class="mt-6 px-4" flat>
      <v-row>
        <v-col md="6" class="hero-two">
          <h4 class="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur, accusantium doloribus eligendi non itaque debitis
            reiciendis corporis laboriosam suscipit sed.
          </h4>
          <v-card class="mb-2" v-for="skill in skills" :key="skill.id">
            <div class="d-flex justify-space-between px-4 align-center">
              <i :class="`${skill.icon} primary--text my-skill-icon`"></i>
              <h3 class="goldman mx-4 pt-1">{{ skill.name }}</h3>
              <div>{{ skill.per }}%</div>
            </div>

            <v-progress-linear
              color="indigo"
              rounded
              :value="skill.per"
            ></v-progress-linear>
          </v-card>
        </v-col>
        <v-col md="6">
          <v-card flat class="d-flex justify-end">
            <img src="~/assets/img/work3.jpg" width="470" />
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
      skills: [
        {
          id: 1,
          name: 'HTML5',
          icon: 'bx bxl-html5',
          per: 85,
        },
        {
          id: 2,
          name: 'CSS3',
          icon: 'bx bxl-css3',
          per: 60,
        },
        {
          id: 3,
          name: 'Javascript',
          icon: 'bx bxl-javascript',
          per: 75,
        },
        {
          id: 4,
          name: 'Python',
          icon: 'bx bxl-python',
          per: 80,
        },
        {
          id: 5,
          name: 'Vue',
          icon: 'bx bxl-vuejs',
          per: 75,
        },
        {
          id: 6,
          name: 'Firebase',
          icon: 'bx bxl-firebase',
          per: 70,
        },
      ],
    }
  },
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