<template>
  <v-card max-width="600" class="mt-2 pa-4 mx-auto">
    <h2 class="goldman mb-4">Contact</h2>
    <v-text-field label="First name" required></v-text-field>
    <v-text-field label="Gmail" required></v-text-field>
    <v-textarea label="Message"></v-textarea>
  </v-card>
</template>

<script>
export default {
  head: {
    titleTemplate: 'Sushil - %s',
    title: 'Contact',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
  },
}
</script>