<template>
  <section class="sm-up-px4 my-margin-bottom-large">
    <h1 class="goldman blue--text text--accent-3 my-text-center big-font">
      Skills
    </h1>
    <v-divider class="blue accent-3"></v-divider>
    <v-card class="mt-6" flat color="transparent">
      <v-row>
        <v-col md="4" cols="12">
          <v-card flat class="d-flex justify-end align-center">
            <v-img
              :aspect-ratio="8 / 7"
              max-height="250"
              src="img/skills.jpg"
              lazy-src="img/skills_com.jpg"
            ></v-img>
          </v-card>
        </v-col>
        <v-col md="8" cols="12">
          <Loading :height="220" v-if="$fetchState.pending" />
          <div v-else>
            <h3 class="mb-4 work-font text-justify mobile-font">
              {{ skills.desp }}
            </h3>
            <v-card color="transparent" flat>
              <div>
                <v-chip-group column>
                  <v-chip
                    v-for="(tag, i) in skills.tags"
                    :key="i"
                    class="primary goldman"
                    small
                    outlined
                    label
                    :href="tag.link"
                    target="_blank"
                  >
                    {{ tag.name }}
                  </v-chip>
                </v-chip-group>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  fetchOnServer: false,
  async fetch() {
    this.skills = await fetch(
      'https://sushil-kamble-default-rtdb.firebaseio.com/skills.json'
    ).then((res) => res.json())
  }
}
</script>


