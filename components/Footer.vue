<template>
  <v-footer dark padless>
    <v-card flat tile class="text-center" color="primary">
      <v-card-text
        :class="$vuetify.theme.dark ? 'grey darken-1' : 'blue accent-2'"
      >
        <Icons />
      </v-card-text>

      <v-card-text :class="$vuetify.theme.dark ? 'black--text' : 'white--text'">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
        vel ut orci. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>
          <a href="https://sushil-kamble.netlify.app/" class="white--text"
            >sushil-kamble.netlify.app/</a
          ></strong
        >
      </v-card-text>
    </v-card>
  </v-footer>
</template>