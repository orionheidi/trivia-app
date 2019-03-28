import {chuckService} from '../services/ChuckService'

export const Chuck = {
    state: {
        jocke:[]
    },
    getters: {
      getJockes(state) {
        return state.jocke
      }
    },
    mutations: {
        setJockes(state, jocke) {
            state.jockes = jocke
          }
    },
    actions: {
        
        fetchJockes(store,next) {
        chuckService.getujMiJocks().then(response => {
          store.commit('setJockes',response.value)
        })
    
    }

    }
  };