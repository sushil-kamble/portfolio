<template>
  <div class="mb-4">
    <h1 class="goldman px-3 my-head-font">{{ name }}</h1>
    <v-sheet class="mx-3" v-for="val in iter" :key="val.id">
      <v-row no-gutters class="d-flex align-center">
        <v-col sm="2" cols="12" class="text-center">
          <i :class="`${val.icon} primary--text my-skill-icon`"></i>
        </v-col>
        <v-col sm="10" cols="12">
          <v-card class="pa-1" flat>
            <v-card-title>{{ val.name }}</v-card-title>
            <v-card-text class="font-details"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              suscipit ab mollitia molestiae eos error aut officia excepturi
              architecto velit.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: 'SkillsRow',
  props: ['name', 'iter'],
}
</script>

<style scoped>
.my-head-font {
  font-size: 38px;
}
.my-skill-icon {
  font-size: 120px;
}
.font-details {
  font-size: 20px;
}
</style>