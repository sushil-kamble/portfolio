<template>
  <v-card max-width="600" class="mt-2 pa-4 mx-auto" data-aos="zoom-in">
    <v-form autocomplete="off" name="google-sheet">
      <h2 class="goldman mb-4">Contact</h2>
      <v-text-field
        label="Name"
        v-model="name"
        name="name"
        required
      ></v-text-field>
      <v-text-field
        label="Gmail"
        v-model="gmail"
        name="gmail"
        required
      ></v-text-field>
      <input type="hidden" :value="Date().toLocaleString()" name="timestamp" />
      <v-textarea label="Message" v-model="message" name="message"></v-textarea>
      <v-btn
        color="primary"
        type="submit"
        @click.prevent="submitForm()"
        :loading="loading"
      >
        Submit
      </v-btn>
    </v-form>
    <v-alert outlined text type="success" v-if="feedback" class="mt-4">
      {{ feedback }}
    </v-alert>
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
      { hid: 'description', name: 'description', content: '' }
    ]
  },
  data() {
    return {
      name: '',
      gmail: '',
      message: '',
      feedback: '',
      loading: false
    }
  },
  methods: {
    submitForm() {
      this.loading = true
      const form = document.forms['google-sheet']
      const script =
        'https://script.google.com/macros/s/AKfycbwhkNgMbHRL3z0vD9jxmifXZRmiiHKu8DiuESq-z0dwjNgOdIIs53flVi3zda2iPkdE/exec'
      fetch(script, { method: 'POST', body: new FormData(form) })
        .then((response) => {
          this.feedback = 'Thanks for submitting the form'
          this.name = ''
          this.gmail = ''
          this.message = ''
          this.loading = false
        })
        .catch((error) => console.error('Error!', error.message))
    }
  }
}
</script>