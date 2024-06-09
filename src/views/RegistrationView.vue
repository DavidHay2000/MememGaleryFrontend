<template>
    <div class="container">
        <form class="row g-3" @submit.prevent="onsubmit">
            <div class="col-md-12">
                <label for="inputEmail4" class="form-label">Name</label>
                <input v-model="name" required type="name" class="form-control" id="name">
            </div>

            <div class="col-md-12">
                <label for="inputEmail4" class="form-label">Email</label>
                <input v-model="email" required type="email" class="form-control" id="inputEmail4">
            </div>
            <div class="col-md-12">
                <label for="inputPassword4" class="form-label">Password</label>
                <input @keyup="check" v-model="password" required type="password" class="form-control" id="inputPassword4">
            </div>

            <div class="col-12">
                <button :disabled="dis1"  type="submit" class="btn btn-primary" >Registration</button>

            </div>
        </form>
        <div>
            {{ errorMessage }}
        </div>
    </div>



</template>

<script setup>

    import { ref } from 'vue';
    import axios from 'axios';
    import { useUserStore } from '../store/store';
    import { storeToRefs } from 'pinia';
    import { useRouter } from 'vue-router';

    const name = ref("");
    const email = ref("");
    const password = ref("");
    const errorMessage = ref("");
    const dis1 = ref(false);



    const UserData = storeToRefs(useUserStore());

    const check = () => {

        if (password.value.length < 6) {

            errorMessage.value ="A jelszonak 6 karakter hosszunak kell lennie"
            dis1.value = true;
        }
        else {
            errorMessage.value =""
            dis1.value = false;
        }


    }

    const router = useRouter();
    const onsubmit = async () => {
        const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        {
            username: name.value,
            email: email.value,
            password: password.value,
        },
        {
            headers: {
            "Content-Type": "application/json",
            },
        }
        ).then(response => {
            UserData.UserId.value = response.data.id;
            console.log(UserData.UserId.value);
            console.log("nc");
            router.push({ name: 'GalleriesView' });
            return response.data;
            
        }).catch(error => {
            console.log(error);
            console.log("sad");
            errorMessage.value = "Username or email is wrong!";
        });


        


};

const push = () =>{
    
}




</script>