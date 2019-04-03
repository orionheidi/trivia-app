import { ChuckService } from '@/services/ChuckService';

export const Chuck = {
  state: {
    randomJoke: null,
    jokeCategory: ''
  },
  getters: {
    randomJocke(state) {
      // console.log(state.randomJoke.id)
      return state.randomJoke
    }
  },
  mutations: {
    setRandomJoke(state, joke) {
      // console.log(joke)
      state.randomJoke = joke;
      // console.log(state.randomJoke.id)
    },
    setJokeCategory(state, jokeCategory) {
      state.jokeCategory = jokeCategory;
    }
  },
  actions: {
    // fetchRandomJoke(store, next) {
    //   ChuckService.getRandomJoke().then((joke) => {
    //     store.commit('setRandomJoke', joke);
    //     next();
    //   })
    // },
    fetchRandomJoke(store, next) {
      ChuckService.getRandomJoke(store.state.jokeCategory).then((joke) => {
        // console.log(joke)
        store.commit('setRandomJoke', joke);
        next();
      })
    },
    
  }
}