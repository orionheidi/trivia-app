
<template>
  <div class="container">
    <!-- {{ randomJoke}} -->
     <!-- <div class="card" style="width: 18rem;">
      <img class="card-img-top"
           :src="randomJoke.iconUrl">
        <p class="card-text" v-text="randomJoke.value">
        </p>
     </div> -->
    <input class="form-control mb-2 mt-2" type="text" placeholder="Enter Joke Category" @input="setCategory"/>
     <button @click="updateCategory" class="btn btn-primary">Update category</button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { store } from './../store';
export default {
  name: 'Chuck',
  computed: {
    ...mapGetters({
      randomJoke: 'getRandomJoke'
    })
  },
  
  methods: {
    // ...mapActions([
    //   'fetchRandomJoke'
    // ]),
      ...mapMutations([
      'setJokeCategory'
    ]),
      updateCategory() {
      store.dispatch('fetchRandomJoke', () => {});
    },
    setCategory(event) {
      this.setJokeCategory(event.target.value);
    }
  },
  // created() {
  //   this.fetchRandomJoke();
  // },
  // beforeRouteEnter(to, from, next) {
  //   store.dispatch('fetchRandomJoke', next);
  //   // next();
  // }
}
</script>
 