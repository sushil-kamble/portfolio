<template>
  <div class="sm-up-px4 my-margin-bottom-large">
    <h1 class="goldman blue--text text--accent-3 my-text-center big-font">
      Certificates
    </h1>
    <v-divider class="blue accent-3 mb-4"></v-divider>
    <Grid :items="certificates" />
  </div>
</template>

<script>
export default {
  data: () => ({
    certificates: {
      'applied-data-science-with-python': {
        id: 1,
        link: 'https://firebasestorage.googleapis.com/v0/b/sushil-kamble.appspot.com/o/certificates%2Fapplied_data_science.jpg?alt=media',
        name: 'Applied Data Science with Python'
      },
      'applied-machine-learning-in-python': {
        id: 5,
        link: 'https://firebasestorage.googleapis.com/v0/b/sushil-kamble.appspot.com/o/certificates%2Fapplied_machine_learning_in_python.jpg?alt=media',
        name: 'Applied Machine Learning in Python'
      },
      'introduction-to-data-science': {
        id: 2,
        link: 'https://firebasestorage.googleapis.com/v0/b/sushil-kamble.appspot.com/o/certificates%2Fintro_to_data_science.jpg?alt=media&token=04001281-0e7c-46a1-8798-c6a0b9f47143',
        name: 'Introduction to Data Science'
      },
      'neural-network-and-deep-learning': {
        id: 3,
        link: 'https://firebasestorage.googleapis.com/v0/b/sushil-kamble.appspot.com/o/certificates%2Fdeep_learning.jpg?alt=media',
        name: 'Neural Network and Deep Learning'
      },
      'using-python-to-access-web-data': {
        id: 4,
        link: 'https://firebasestorage.googleapis.com/v0/b/sushil-kamble.appspot.com/o/certificates%2Fusing_python_access_web_data.jpg?alt=media',
        name: 'Using Python to Access Web Data'
      }
    }
  })
}
</script>
