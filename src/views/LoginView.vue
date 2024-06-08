<template>
    <div class="container">
        <form class="row g-3">
            <div class="col-md-12">
                <label for="inputEmail4" class="form-label">Email</label>
                <input v-model="email" required type="email" class="form-control" id="email">
            </div>
            
            
            <div class="col-md-12">
                <label for="inputPassword4" class="form-label">Password</label>
                <input v-model="password" required type="password" class="form-control" id="inputPassword4">
            </div>
            
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
        </form>
    </div>

</template>

<script>
    import { ref } from 'vue';

    const email = ref("");
    const password = ref("");


</script>

<style></style>