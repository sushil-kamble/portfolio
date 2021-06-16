<template>
  <v-container>
    <v-card flat class="sm-up-px4 pb-2 transparent">
      <h1 class="goldman blue--text text--accent-3 my-head-font my-text-center">
        MY SKILLS
      </h1>
      <v-divider class="blue accent-3 mb-2"></v-divider>
      <Loading :height="88" v-if="$fetchState.pending" />
      <div v-else>
        <v-chip-group class="work-font" column>
          <v-chip
            v-for="(tag, i) in skillData.tags"
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
      <Loading :height="200" :size="50" v-if="$fetchState.pending" />
      <div v-else>
        <SkillsRow name="Favourites" :iter="skillData.specialSkills.fav" />
        <SkillsRow name="Working On" :iter="skillData.specialSkills.working" />
      </div>
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
  fetchOnServer: false,
  async fetch() {
    this.skillData = await fetch(
      'https://sushil-kamble-default-rtdb.firebaseio.com/skills.json'
    ).then((res) => res.json())
  }
}
</script>

