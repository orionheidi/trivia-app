<template>
      <div class="row">
    <div class="card col-md-4" v-for="jocke in jockes" :key="jocke.id">
        {{ jocke.url }}
        {{ jocke.value}}
    </div>
      </div>
</template>

<script>
import {chuckService} from './../services/ChuckService'
import {store} from '../store/store'
import { mapGetters } from 'vuex'

export default {

    data() {
    // return {
    //   jockes: 'jockes'
    // };
  },
    computed: {
    ...mapGetters([
      'getJockes'
    ]),
    },

      beforeRouteEnter(to, from, next) {
        store.dispatch('fetchJockes',next)
  },

    
}
</script>