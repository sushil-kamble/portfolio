<template>
  <v-card max-width="600" class="pa-6 mx-auto my-3 transparent work-font">
    <v-form autocomplete="off" name="google-sheet" class="goldman">
      <h2 class="mb-4 blue--text text--accent-3">Contact</h2>
      <v-btn
        block
        target="_blank"
        color="blue accent-3 "
        class="white--text"
        href="mailto:iamsushil303@gmail.com?subject=Your%20Subject"
      >
        <i class="bx bx-mail-send mr-4"></i>
        Mail me
      </v-btn>
      <h4 class="text-center mt-3 blue--text blue--text text--accent-3">OR</h4>
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
      <div class="d-flex justify-space-between">
        <v-btn
          class="blue accent-3 goldman"
          type="submit"
          dark
          @click.prevent="submitForm()"
          :loading="loading"
        >
          Submit
        </v-btn>
        <span
          :class="`pa-2 rounded white--text ${feedback[1]}`"
          v-if="feedback.length > 1"
        >
          {{ feedback[0] }}
        </span>
      </div>
    </v-form>
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
          .then(() => {
            this.feedback = ['Thanks for submitting the form', 'blue accent-3']
            this.name = ''
            this.gmail = ''
            this.message = ''
            this.loading = false
          })
          .catch((error) => console.error('Error!', error.message))
      } else {
        this.feedback = ['Please fill all the inputs', 'blue-grey darken-3']
        this.loading = false
      }
    }
  }
}
</script>
