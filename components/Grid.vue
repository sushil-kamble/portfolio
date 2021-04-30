<template>
  <v-row>
    <v-col v-for="(item, n) in items" :key="n" cols="6" md="4">
      <v-card
        class="grow rounded-lg elevation-4"
        :href="item.link || item.github"
        target="_blank"
        rel="noopener"
      >
        <v-img
          :src="project ? item.img : item.link"
          aspect-ratio="1"
          class="grid-height"
          dark
          gradient="180deg, rgba(255,255,255,0.1) 0%, rgba(34,39,46,0.7) 85%"
        >
          <v-row
            class="fill-height goldman text-center text-overlay ma-0"
            align="end"
            justify="center"
          >
            <h2 class="mobile-font" v-if="project">{{ item.name }}</h2>
            <h4 class="mobile-font" v-else>{{ item.name }}</h4>
          </v-row>
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-card>
    </v-col>
    <v-col :key="6" cols="6" md="4" v-if="project">
      <v-card
        class="pa-2 grow blue accent-3 fill-height rounded-lg elevation-4"
        to="/projects"
        flat
        max-height="200"
        dark
      >
        <v-row
          class="fill-height text-overlay ma-0"
          align="center"
          justify="center"
        >
          <h4 class="goldman">To See Projects, Click Here</h4>
        </v-row>
      </v-card>
    </v-col>
    <v-col :key="6" cols="6" md="4" v-else>
      <v-card
        class="pa-2 grow blue accent-3 fill-height rounded-lg elevation-4"
        href="https://drive.google.com/drive/folders/1JkQzuXrddb1A_k4DCSJ7vZfMreMoDSa-?usp=sharing"
        target="_black"
        rel="noopener"
        flat
        max-height="200"
        dark
      >
        <v-row
          class="fill-height text-overlay ma-0"
          align="center"
          justify="center"
        >
          <h4 class="goldman">To See More Certificates, Click Here</h4>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Grid',
  props: ['items', 'project']
}
</script>

<style>
.grow {
  transition: all 0.2s ease-in-out;
}
.grow:hover {
  transform: scale(1.02);
}
</style>
