<template>
  <div class="mb-4">
    <h1 class="goldman mb-2 sm-heading-font">
      {{ name }}
    </h1>
    <v-sheet v-for="(val, i) in iter" :key="i" color="transparent">
      <v-row no-gutters class="d-flex align-center">
        <v-col sm="2" cols="12" class="text-center">
          <i :class="`${val.icon} primary--text my-skill-icon`"></i>
        </v-col>
        <v-col sm="10" cols="12">
          <v-card class="pa-0 ma-0 work-font" flat color="transparent">
            <h2 class="mb-1">{{ val.name }}</h2>
            <p class="mobile-font">
              {{ val.desp }}
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: 'SkillsRow',
  props: ['name', 'iter']
}
</script>

<style scoped>
.my-head-font {
  font-size: 38px;
}
.my-skill-icon {
  font-size: 120px;
}
</style>