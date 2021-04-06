<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters dense>
      <div
        :class="`py-3 flex-grow-1 text-center ${
          !$vuetify.theme.dark ? 'white' : 'primary darken-3'
        }`"
      >
        <v-divider class="mb-3"></v-divider>
        <Icons />
      </div>
      <v-col class="primary darken-2 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>
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