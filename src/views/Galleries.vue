<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";
import { useUserStore } from '../store/store.js';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import dataservice from "../services/dataservice";

const UserData = storeToRefs(useUserStore());
const User = ref(0);
onMounted (async() => {
  if (UserData.UserId !=null) {
    console.log(UserData.UserId.value);
    User.value = await dataservice.getUserData(UserData.UserId.value);
    console.log(User);
  }
  
})



</script>

<template>
  <div>
    <div class="row">
      <div class="col-md-4" >
        <div class="row">
          <div class="userdata">
            {{ User.username }}
          </div>
        </div>
        
      </div>
      <div class="col-md-8">
        
      </div>
    </div>
  </div>
</template>
