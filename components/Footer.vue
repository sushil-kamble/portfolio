<template>
  <v-footer padless>
    <v-row justify="center" no-gutters dense>
      <div
        :class="`py-3 flex-grow-1 text-center ${
          !$vuetify.theme.dark ? 'grey lighten-2' : 'primary darken-2'
        }`"
      >
        <Icons />
      </div>
      <v-col
        :class="`primary darken-3 text-center work-font ${
          $vuetify.theme.dark && 'black--text'
        }`"
        cols="12"
      >
        <strong class="white--text">
          {{ new Date().getFullYear() }} —
          <a
            href="https://www.sushilkamble.live/"
            class="text-decoration-none white--text"
          >
            sushilkamble.live
          </a>
        </strong>
      </v-col>
    </v-row>
  </v-footer>
</template>