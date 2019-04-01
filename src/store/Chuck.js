import { ChuckService } from './../services/ChuckService';

export const Chuck = {
  state: {
    randomJoke: null
  },
  getters: {
    getRandomJoke(state) {
      console.log(state.randomJoke.id)
      return state.randomJoke
    }
  },
  mutations: {
    setRandomJoke(state, joke) {
      console.log(joke)
      state.randomJoke = joke;
      console.log(state.randomJoke.id)
    }
  },
  actions: {
    fetchRandomJoke(store, next) {
      ChuckService.getRandomJoke().then((joke) => {
        store.commit('setRandomJoke', joke);
        next();
      })
    }
  }
}