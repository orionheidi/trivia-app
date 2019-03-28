import Chucknorris from 'chucknorris-io'

class ChuckService{

    constructor() {
        this.client = new Chucknorris ();
      }
    
    // Retrieve a random chuck joke
    getujMiJocks() {
        return this.client.getRandomJoke();

    }
  
    }

export const chuckService = new ChuckService;