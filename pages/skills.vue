<template>
  <v-container>
    <v-card flat class="sm-up-px4 pb-2 transparent">
      <h1 class="goldman blue--text text--accent-3 my-head-font my-text-center">
        MY SKILLS
      </h1>
      <v-divider class="blue accent-3 mb-2"></v-divider>
      <Loading :height="80" v-if="$fetchState.pending" />
      <div v-else>
        <v-chip-group class="work-font" column>
          <v-chip
            v-for="(tag, i) in tags"
            :key="i"
            class="my-text-center"
            label
            link
            outlined
            :href="tag.link"
            target="_blank"
          >
            {{ tag.name }}
          </v-chip>
        </v-chip-group>
      </div>

      <v-divider class="blue accent-3 my-2"></v-divider>
      <SkillsRow name="Favourites" :iter="favTech" />
      <SkillsRow name="Working On" :iter="workOn" />
    </v-card>
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
      { hid: 'description', name: 'description', content: '' }
    ]
  },
  data() {
    return {
      tags: [],
      favTech: [
        {
          name: 'Vue',
          icon: 'bx bxl-vuejs',
          desp:
            'Getting better a vue.js every single day, Have a in-depth knowledge of vue framework as I have done few interesting projects using the same. I am quite familiar with Vuex, Vue Router & also Nuxt.js.'
        },
        {
          name: 'Firebase',
          icon: 'bx bxl-firebase',
          desp:
            'Done many projects using Firebase Authentication Service, Realtime DB, Cloud Firestore. Have a good knowledge about the query structure of Firestore.'
        },
        {
          name: 'Django',
          icon: 'bx bxl-django',
          desp:
            'Python being my most favourite language, pushed me towards django framework. Have a good hold over authentication, CRUD operations, jinja templating etc.'
        }
      ],
      workOn: [
        {
          name: 'DS ALGO',
          icon: 'bx bxs-data',
          desp:
            'Brushing up my Data Structures and Algorithms skills by frequently solving problems on HackerRank and HackerEarth.'
        },
        {
          name: 'Dev Ops',
          icon: 'bx bxl-kubernetes',
          desp:
            'Signed in for Google Cloud Training to learn Kubernetes and get a hands on experience.'
        }
      ]
    }
  },
  fetchOnServer: false,
  async fetch() {
    this.tags = await fetch(
      'https://sushil-kamble-default-rtdb.firebaseio.com/tags.json'
    ).then((res) => res.json())
  }
}
</script>

