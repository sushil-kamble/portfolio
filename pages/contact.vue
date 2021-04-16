<template>
  <v-card max-width="600" class="mt-2 pa-4 mx-auto transparen work-font">
    <v-form autocomplete="off" name="google-sheet" data-aos="zoom-in">
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
        class="primary goldman"
        type="submit"
        @click.prevent="submitForm()"
        :loading="loading"
      >
        Submit
      </v-btn>
    </v-form>
    <p
      :class="`mt-4 pa-3 white--text ${feedback[1]}`"
      v-if="feedback.length > 1"
    >
      {{ feedback[0] }}
    </p>
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
      { hid: 'description', name: 'description', content: 'Contact Me' }
    ]
  },
  data() {
    return {
      name: '',
      gmail: '',
      message: '',
      feedback: [],
      loading: false
    }
  },
  methods: {
    submitForm() {
      this.loading = true
      if (this.name && this.gmail && this.message) {
        const form = document.forms['google-sheet']
        const script =
          'https://script.google.com/macros/s/AKfycbwhkNgMbHRL3z0vD9jxmifXZRmiiHKu8DiuESq-z0dwjNgOdIIs53flVi3zda2iPkdE/exec'
        fetch(script, { method: 'POST', body: new FormData(form) })
          .then((response) => {
            this.feedback = ['Thanks for submitting the form', 'success']
            this.name = ''
            this.gmail = ''
            this.message = ''
            this.loading = false
          })
          .catch((error) => console.error('Error!', error.message))
      } else {
        this.feedback = ['Please fill all the inputs', 'error']
        this.loading = false
      }
    }
  }
}
</script>