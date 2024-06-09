import { defineStore } from 'pinia';

export const useUserStore = defineStore('FaithUserStore', {
    state: () => {
      return { 
        UserId: 0,
    }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
      
    },
  })