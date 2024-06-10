<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";
import { useUserStore } from '../store/store.js';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import dataservice from "../services/dataservice";

const UserData = useUserStore();
const User = ref(0);
const hide = ref(false);


const router = useRouter();

onMounted (async() => {
  console.log("Mounted");
  console.log(UserData.UserId);
  if (UserData.UserId !=0) {
    hide.value = false;
    console.log(UserData.UserId);
    User.value = await dataservice.getUserData(UserData.UserId);
    console.log(User);
  }
  else{
    hide.value = true;
  }

  const galleries = dataservice.getAllGallery();
  //console.log(galleries);
  
})

const Logout = () =>{
  UserData.UserId.value = 0;
  hide.value = true
}

const Login = () =>{
    router.push({name: "LoginView"})
}

const Register = () =>{
    router.push({name: "RegistrationView"})
}





</script>

<template>
  <div>
    <h1 class="d-flex justify-content-center mb-0 bg-primary text-white">Galleries</h1>
    <div class="row">
      <div class="col-md-3 mb-2 bg-primary text-white" >

        <div class="row m-5">
          <div v-if="hide">
            <h3 col-md-12>You can register or login to store your favorite memes!</h3>
            <button class="btn btn-success m-3" @click="Login()">Login</button>
            <button class="btn btn-success m-3" @click="Register()">Registration</button>

          </div>
          <div v-else class="userdata row">
            <h3 class="col-md-12">{{ User.username }}</h3>
            <h4 class="col-md-12">{{ User.email }}</h4>


            <button class="btn btn-success m-3" @click="Logout()">Log out</button>
          </div>
        </div>
        
      </div>
      <div class="col-md-9 d-flex justify-content-end row">
        <h3 class="m-3 col-md-12 d-flex justify-content-center">You can make youre own galleries to find your funnyest memes!</h3>
        <button class="btn btn-primary btn-lg col-md-8">Add gallery</button>
      </div>
    </div>
  </div>
</template>

<style>


</style>
