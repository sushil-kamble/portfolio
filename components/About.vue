<template>
  <section class="px-4">
    <h1
      :class="`goldman primary--text my-head-font ${
        $vuetify.breakpoint.smAndDown && 'text-center'
      }`"
    >
      About Me
    </h1>
    <v-divider class="primary"></v-divider>
    <v-card class="mt-6 px-4" flat color="transparent">
      <v-row>
        <v-col md="5" cols="12">
          <v-card
            flat
            color="transparent"
            :class="`${$vuetify.breakpoint.smAndDown && 'text-center'}`"
          >
            <img src="~/assets/img/me1.jpg" height="370" />
          </v-card>
        </v-col>
        <v-col md="7" class="hero-two" cols="12">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quaerat
            minus voluptatum laborum ipsa est, repudiandae possimus quam sequi
            optio sunt enim eos tempore suscipit, sint adipisci. Quaerat, a
            inventore.
          </h2>
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>

<style scoped>
.my-head-font {
  font-size: 35px;
}
</style>