<template>
  <div>
    <v-icon
      large
      left
      @mouseover="isHovering1 = true"
      @mouseout="isHovering1 = false"
      :color="isHovering1 ? 'primary' : ''"
      >mdi-github
    </v-icon>
    <v-icon
      large
      left
      @mouseover="isHovering2 = true"
      @mouseout="isHovering2 = false"
      :color="isHovering2 ? 'primary' : ''"
      >mdi-linkedin
    </v-icon>
    <v-icon
      large
      left
      @mouseover="isHovering3 = true"
      @mouseout="isHovering3 = false"
      :color="isHovering3 ? 'primary' : ''"
      >mdi-instagram
    </v-icon>
    <v-icon
      large
      left
      @mouseover="isHovering4 = true"
      @mouseout="isHovering4 = false"
      :color="isHovering4 ? 'primary' : ''"
      >mdi-facebook
    </v-icon>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHovering1: false,
      isHovering2: false,
      isHovering3: false,
      isHovering4: false,
    }
  },
}
</script>