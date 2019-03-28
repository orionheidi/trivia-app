import Vue from 'vue'
import Vuex from 'vuex'

import {Chuck} from './Chuck';
import {Trivia} from './Trivia';

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        Chuck,
        Trivia
    }
})