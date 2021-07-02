<template>
  <div class="sm-up-px4 my-margin-bottom-large">
    <h1 class="goldman blue--text text--accent-3 my-text-center big-font">
      Projects
    </h1>
    <v-divider class="blue accent-3 mb-4"></v-divider>
    <Grid :items="projects" :project="true" />
  </div>
</template>

<script>
export default {
  data: () => ({
    projects: {
      '1-advanced-todo-list': {
        description:
          'My Todos is an advance Todo PWA with auth system, timed todo feature and many real-time functionalities.',
        features: 'Authentication%Realtime todo sync%Set a deadline for a todo',
        github: 'https://github.com/sushil-kamble/advanced-todo',
        id: 1,
        img: 'https://drive.google.com/uc?export=view&id=1jY7ITngwWPvFJe3oaB3eerFZYSVxhoor',
        link: 'https://allofmytodo.web.app/',
        name: 'Advanced Todo List',
        techStack:
          'vue.js, vue-router & vuex%Firebase Auth and Cloud Firestore%vuetify'
      },
      '2-chat-hub': {
        description:
          'ChatHub is a group chat Progressive Web App(PWA) which involving authentication and real-time presence system.',
        features:
          'Responsive and Simple UI%Authenticatiion & Realtime Chat Sync%Realtime Presence',
        github: 'https://github.com/sushil-kamble/chat-hub',
        id: 2,
        img: 'https://firebasestorage.googleapis.com/v0/b/sushil-kamble.appspot.com/o/projects%2Fchathub.png?alt=media',
        link: 'https://chatonweb-chathub.web.app/',
        name: 'Chat-Hub',
        techStack:
          'vue.js, vue-router & vuex%Firebase Auth and Database%vuetify'
      },
      '3-trasaction-dairy-2': {
        description:
          'Transaction Dairy is a bill splitter as well as a dairy to manage all of your transactions.',
        features:
          'Smart Bill Split%Available on every device, PWA compatible &Responsive Ui%Authentication System',
        github: 'https://github.com/sushil-kamble/transaction-dairy',
        id: 3,
        img: 'https://firebasestorage.googleapis.com/v0/b/sushil-kamble.appspot.com/o/projects%2Ftransaction-v2.jpg?alt=media',
        link: 'https://transaction-dairy.web.app/',
        name: 'Transaction Dairy v2',
        techStack:
          'vue.js, vue-router & vuex%Firebase Auth, Firebase realtime DB and Cloud Firestore%vuetify'
      },
      '4-movie-hub': {
        description:
          'Movie Hub is complete platform for movie lovers, with recommendation, chat, watchlist and reviews.',
        features:
          'Authentication%Recommendation System & Chat System%Watchlist, Reviews and Rating',
        github: 'https://github.com/sushil-kamble/movie-recommender',
        id: 4,
        img: 'https://firebasestorage.googleapis.com/v0/b/sushil-kamble.appspot.com/o/projects%2Frec.jpg?alt=media',
        name: 'Movie-Hub',
        techStack:
          'Django, Django-channels and rest-framework%Pandas, Numpy, bs4, Requests%Vue.js & Bootstrap'
      },
      '5-next-whats-app': {
        description:
          'A Simple WhatsApp Clone built with next.js connected to firebase makes you have personal chat with your friends.',
        features: 'Google Authentication%Realtime Status%Responsive Ui',
        github: 'https://github.com/sushil-kamble/next-whatsapp',
        id: 5,
        img: 'https://firebasestorage.googleapis.com/v0/b/sushil-kamble.appspot.com/o/projects%2Fnext-whatsapp.jpg?alt=media',
        link: 'https://next-whatsapp-sushil-kamble.vercel.app/',
        name: 'Next-WhatsApp',
        techStack:
          'Next.js & React%Material-ui, firebase-auth & firestore%Styled Components, ssr & versel'
      }
    }
  })
}
</script>
