<template>
  <v-container>
    <SkillsRow name="Front End" :iter="frontend" />
    <SkillsRow name="Back End" :iter="backend" />
    <SkillsRow name="Technology Stack" :iter="techStack" />
    <SkillsRow name="Working On" :iter="workOn" />
  </v-container>
</template>

<script>
export default {
  head: {
    titleTemplate: 'Sushil - %s',
    title: 'Skills',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
  },
  data() {
    return {
      frontend: [
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
          name: 'Vue',
          icon: 'bx bxl-vuejs',
          per: 75,
        },
        {
          id: 5,
          name: 'React',
          icon: 'bx bxl-react',
          per: 75,
        },
      ],
      backend: [
        {
          id: 1,
          name: 'Python',
          icon: 'bx bxl-python',
          per: 75,
        },
        {
          id: 2,
          name: 'Django',
          icon: 'bx bxl-django',
          per: 75,
        },
        {
          id: 3,
          name: 'Firebase',
          icon: 'bx bxl-firebase',
          per: 75,
        },
      ],
      techStack: [
        {
          id: 1,
          name: 'Vuejs +  Firebase',
          icon: 'bx bxl-vuejs',
          per: 75,
        },
        {
          id: 2,
          name: 'Django Rest Framework + Vuejs',
          icon: 'bx bxl-django',
          per: 75,
        },
        {
          id: 3,
          name: 'MERN',
          icon: 'bx bxl-react',
          per: 75,
        },
      ],
      workOn: [
        {
          id: 1,
          name: 'Kotlin',
          icon: 'bx bxl-android',
          per: 75,
        },
        {
          id: 2,
          name: 'Data Structures and Algorithms',
          icon: 'bx bxs-data',
          per: 75,
        },
        {
          id: 3,
          name: 'Dev Ops',
          icon: 'bx bxl-kubernetes',
          per: 75,
        },
      ],
    }
  },
}
</script>

