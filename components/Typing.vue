<template>
  <client-only>
    <vue-typer
      :text="skills"
      class="mobile-font"
      erase-style="backspace"
      :pre-type-delay="70"
      :erase-delay="50"
      :type-delay="80"
    ></vue-typer>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      skills: ['Computer Engineer', 'Web Developer', 'Python Enthusiast']
    }
  }
}
</script>

<style scoped>
::v-deep .custom.caret {
  width: 3px;
  margin-left: 3px !important;
  background-color: #2979ff !important;
}
::v-deep .typed {
  color: #2979ff !important;
}
@media only screen and (max-width: 960px) {
  /* SM and DOWN (MOBILE) */
  .mobile-font {
    font-size: 24px;
  }
}
</style>
