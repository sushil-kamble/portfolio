<template>
  <span>
    <a
      href="https://github.com/sushil-kamble"
      class="text-decoration-none"
      target="_blank"
    >
      <v-icon
        large
        :left="$vuetify.breakpoint.smAndUp"
        @mouseover="isHovering1 = true"
        @mouseout="isHovering1 = false"
        :color="isHovering1 ? 'info' : ''"
        >mdi-github
      </v-icon>
    </a>
    <a
      href="https://www.linkedin.com/in/sushil-kamble-51b9181a7/"
      class="text-decoration-none"
      target="_blank"
    >
      <v-icon
        large
        :left="$vuetify.breakpoint.smAndUp"
        @mouseover="isHovering2 = true"
        @mouseout="isHovering2 = false"
        :color="isHovering2 ? 'info' : ''"
        >mdi-linkedin
      </v-icon>
    </a>
    <a
      href="https://www.instagram.com/always_sushil/"
      class="text-decoration-none"
      target="_blank"
    >
      <v-icon
        large
        :left="$vuetify.breakpoint.smAndUp"
        @mouseover="isHovering3 = true"
        @mouseout="isHovering3 = false"
        :color="isHovering3 ? 'info' : ''"
        >mdi-instagram
      </v-icon>
    </a>
    <a
      href="https://twitter.com/SushilK28005811"
      class="text-decoration-none"
      target="_blank"
    >
      <v-icon
        large
        :left="$vuetify.breakpoint.smAndUp"
        @mouseover="isHovering4 = true"
        @mouseout="isHovering4 = false"
        :color="isHovering4 ? 'info' : ''"
        >mdi-twitter
      </v-icon>
    </a>
  </span>
</template>
<script>
export default {
  data() {
    return {
      isHovering1: false,
      isHovering2: false,
      isHovering3: false,
      isHovering4: false
    }
  }
}
</script>