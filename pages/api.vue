<template>
  <p v-if="$fetchState.pending">Fetching Skills...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Top Skills</h1>
    <ul>
      <li v-for="topSkill in topSkills" :key="topSkill.id">
        {{ topSkill.name }} - {{ topSkill.per }} - {{ topSkill.icon }}
      </li>
    </ul>
    <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topSkills: [],
    }
  },
  async fetch() {
    this.topSkills = await fetch(
      'https://sushil-kamble-default-rtdb.firebaseio.com/users/Y7ydFmn3A2ekCeNA8V2QM6EZTnz1/top-skills.json'
    ).then((res) => res.json())
  },
}
</script>