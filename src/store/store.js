import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('UserData', {
    state: () => {
      return { 
        UserId: 0,
      }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
      save(id){
        console.log(id);
        this.UserId = id;
        console.log("saved");
      }
    },
  })