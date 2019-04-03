<template>
    <div class="container">Trivijala
            <div v-for="trivia in trivias" :key="trivia.id" @click="toggleTrivia(trivia.id)">
             <div>'Question is: '   {{   trivia.question }}</div>
              <button name="submit" type="submit mb-2" class="btn btn-primary">Answer Toggle</button>
              <!-- <input class="form-control mb-2 mt-2" type="text" placeholder="Enter The Right Answer" v-model="triviaAnswer"/> -->
             <br>
            <div class="collapse" :class="{'show':isVisableTriviaAnswer(trivia.id)}"> 'Answer is: '  {{ trivia.answer }} </div>
            </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
      data() {
        return {
        selectedTriviasIds: []
    };
  },
    computed: {
        ...mapGetters(['trivias'])
    },
    methods:{
        ...mapActions(['fatchTrivias']),
        // toggle(triviaAnswer){
        //     this.trivias.filter(trivia => trivia.answer === triviaAnswer)
        
        // }
        toggleTrivia(triviaId){
           let triviaIdIndex = this.selectedTriviasIds.indexOf(triviaId);
           let isSelectedTriviaId = triviaIdIndex > -1;
           if(isSelectedTriviaId){
               return this.selectedTriviasIds.splice(triviaIdIndex,1);
           }
           this.selectedTriviasIds.push(triviaId)
        },
        isVisableTriviaAnswer(triviaId){
            return this.selectedTriviasIds.indexOf(triviaId) > -1
        }
    },

    created(){
        this.$store.dispatch('fatchTrivias')
    }
}
</script>

