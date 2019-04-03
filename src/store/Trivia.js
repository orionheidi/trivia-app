import {TriviaService} from './../services/TriviaService'

export const Trivia = {
    state: {
      trivias:null
    },
    getters: {
      trivias: state => state.trivias
    },
    mutations: {
      set_trivias(state, trivias) {
        state.trivias = trivias;
      }
    },
    actions: {
      async fatchTrivias(context){
        const response = await TriviaService.getRandomTrivias()
        context.commit('set_trivias',response.data)
      }
    }
  }; 