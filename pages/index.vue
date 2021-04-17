<template>
  <v-container>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Certificates />
  </v-container>
</template>

<script>
export default {
  head: {
    titleTemplate: 'Sushil',
    title: 'Home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'I am a computer engineer, who is filled with enthusiasm about web development, building projects & learning new technologies. I love developing ideas that come to my mind. Learning new technologies is my hobby along with playing games and watching movies. I keep myself up-to-date with the new trends going around the world. Passionate about project planning and development. I have plesant knowledge about frontend and backend technologies as I have developed few interesting projects using them.'
      }
    ]
  }
}
</script>


 