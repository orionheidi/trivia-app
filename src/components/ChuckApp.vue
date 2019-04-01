
<template>
  <div class="container">
    {{ randomJoke}}
    <!-- <input class="form-control mb-2" type="text" placeholder="Enter Joke Category" @input="setCategory"/>
     <button @click="updateCategory" class="btn btn-primary">Update category</button> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { store } from './../store';
export default {
  name: 'Chuck',
  computed: {
    ...mapGetters({
      randomJoke: 'getRandomJoke'
    })
  },
  methods: {
    ...mapActions([
      'fetchRandomJoke'
    ])
  },
  // created() {
  //   this.fetchRandomJoke();
  // },
  beforeRouteEnter(to, from, next) {
    store.dispatch('fetchRandomJoke', next);
    // next();
  }
}
</script>
 