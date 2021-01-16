<template>
  <section :class="$vuetify.breakpoint.smAndUp ? 'px-4 mt-15' : 'mt-10'">
    <h1
      :class="`goldman primary--text my-head-font ${
        $vuetify.breakpoint.smAndDown && 'text-center'
      }`"
    >
      Skills
    </h1>
    <v-divider class="primary"></v-divider>
    <v-card
      :class="$vuetify.breakpoint.smAndUp ? 'mt-6 px-4' : 'mt-6'"
      flat
      color="transparent"
    >
      <v-row
        :class="`${
          $vuetify.breakpoint.smAndDown && 'd-flex flex-column-reverse'
        }`"
      >
        <v-col md="6" class="hero-two" cols="12">
          <h4 :class="`mb-4 ${$vuetify.breakpoint.smAndDown && 'text-center'}`">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur, accusantium doloribus eligendi non itaque debitis
            reiciendis corporis laboriosam suscipit sed.
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
        </v-col>
        <v-col md="6" cols="12">
          <v-card flat class="d-flex justify-end align-center">
            <v-img
              :aspect-ratio="8 / 7"
              max-height="360"
              :lazy-src="`https://drive.google.com/uc?export=view&id=${skillImgMin}`"
              :src="`https://drive.google.com/uc?export=view&id=${skillImg}`"
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
      topSkills: [],
      skillImg: '1sXGoYAzprv9FNmUO1LgFYwk9ibhAtC7S',
      skillImgMin: '1od9XCRaVjYqv8W1RfrOqkzcYqxFR76Mm',
      skills: [
        {
          id: 1,
          name: 'CSS3',
          icon: 'bx bxl-css3',
          per: 60,
        },
        {
          id: 2,
          name: 'Javascript',
          icon: 'bx bxl-javascript',
          per: 75,
        },
        {
          id: 3,
          name: 'Vue.js',
          icon: 'bx bxl-vuejs',
          per: 75,
        },
        {
          id: 4,
          name: 'React',
          icon: 'bx bxl-react',
          per: 75,
        },
        {
          id: 5,
          name: 'Python - django',
          icon: 'bx bxl-django',
          per: 80,
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
  async fetch() {
    this.topSkills = await fetch(
      'https://sushil-kamble-default-rtdb.firebaseio.com/users/Y7ydFmn3A2ekCeNA8V2QM6EZTnz1/top-skills.json'
    ).then((res) => res.json())
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