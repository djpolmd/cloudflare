<script setup>
import axiosService from "../axiosService";
import { reactive, computed } from 'vue'
const checked =  reactive({
  checked: false
});
const data = reactive({
  userData: {
    userName: 'Vasile',
    userPassword: 'dskjdk',
    userEmail: 'jksaj@jskj'
  }
})

function post() {
  axiosService.setUserParams(this.data);
}
function mounted() {
  console.log('Mounted hook called')
}
</script>

<template>
  <div class="grid">
    <div class="surface-card col-6 col-offset-3 p-4 shadow-2 border-round w-full lg:w-6 md:w-3">
      <div class="text-center mb-5">
        <img src="hyper.svg" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Create User</div>
        <span class="text-600 font-medium line-height-3">Have an account?</span>
        <a href="/login" class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">go to Login Page!</a>
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText v-model="data.userData.userEmail" id="email1" type="text" class="w-full mb-3"/>

        <label for="username" class="block text-900 font-medium mb-2">Email</label>
        <InputText v-model="data.userData.userName" id="username" type="text" class="w-full mb-3"/>

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <InputText v-model="data.userData.userPassword" id="password1" type="password" class="w-full mb-3"/>

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <Checkbox id="rememberme1" :binary="true" v-model="checked.checked" class="mr-2"></Checkbox>
            <label for="rememberme1">Create</label>
          </div>
          <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
        </div>

        <Button v-on:click="post()" label="Sign In" icon="pi pi-user" class="w-full"></Button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
