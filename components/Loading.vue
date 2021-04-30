<template>
  <v-card :height="height || 300" flat color="transparent">
    <v-row class="fill-height ma-0" align="center" justify="center">
      <v-progress-circular
        indeterminate
        :size="size || 40"
        color="blue accent-3"
      ></v-progress-circular>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    height: Number,
    size: Number
  }
}
</script>