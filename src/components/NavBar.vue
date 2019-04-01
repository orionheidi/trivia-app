<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="nav-item nav-link" to="/trivia">Trivia App</router-link>
      <router-link class="nav-item nav-link" to="/chuck">Chuck App</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  components: {
  },
  
}
</script>