<template>
  <v-footer padless>
    <v-row justify="center" no-gutters dense>
      <div
        :class="`py-3 flex-grow-1 text-center ${
          $vuetify.theme.dark ? 'blue-grey darken-3' : 'blue-grey lighten-5'
        } `"
      >
        <Icons />
      </div>
      <v-col class="blue accent-3 text-center work-font white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <a href="#" class="text-decoration-none white--text goldman">
          sushilkamble.live
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>
