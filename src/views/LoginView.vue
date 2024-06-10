<template>
    <div class="container">
        <form class="row g-3" @submit.prevent="onsubmit">
            
            <div class="col-md-12">
                <label for="inputEmail4" class="form-label">Email</label>
                <input v-model="email" required type="email" class="form-control" id="inputEmail4">
            </div>
            <div class="col-md-12">
                <label for="inputPassword4" class="form-label">Password</label>
                <input @keyup="check" v-model="password" required type="password" class="form-control" id="inputPassword4">
            </div>
            
            <div class="col-12">
                <button :disabled="dis1"  type="submit" class="btn btn-primary" >Login</button>
            </div>
        </form>
        <div>
            {{ error }}
        </div>
    </div>

</template>

<script setup>

    import { ref } from 'vue';
    import axios from 'axios';
    import { useUserStore } from '../store/store.js';
    import { storeToRefs } from 'pinia';
    import { useRouter } from 'vue-router';

    
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const dis1 = ref(false);
    const router = useRouter();

    const UserData = storeToRefs(useUserStore());

    const check = () => {
        
        if (password.value.length < 6) {
            
            error.value ="A jelszonak 6 karakter hosszunak kell lennie"
            dis1.value = true;
        } 
        else {
            error.value =""
            dis1.value = false;
        }
        
        
    }

    const onsubmit = async () => {
        
            const response = await axios.post(
            "http://127.0.0.1:8000/api/login",
            {
                email: email.value,
                password: password.value,
            },
            {
                headers: {
                "Content-Type": "application/json",
                },
            }
            )
            .then(response => {
                
                return response.data;
            })
            .catch(err => {
                console.log(err);
            });

            if (response != 402) {
                UserData.UserId.value = response;
                console.log(UserData.UserId.value);
                console.log("nc");
                router.push({ name: 'GalleriesView' });
            }
            else{
                error.value = "Wrong email or password";
            }
        
    };



    

</script>
<style>


</style>