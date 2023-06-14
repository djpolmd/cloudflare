<script setup>
import axiosService from "../axiosService";
import Logo from "./icons/IconCommunity.vue";
import {Field, Form} from 'vee-validate';
import * as yup from 'yup';
import InputTextWithValidation from './validation/InputTextWithValidation.vue';

const schema = yup.object({
  email: yup.string().required().email().label('Email address'),
  fullName: yup.string().required().label('Full name'),
  password: yup.string().required().min(6).label('Password'),
});


function onSubmit(values, actions) {
  axiosService.setUserParams(data).catch((error) => {
    if(error.response.status === 404) {
      alert('Wrong credentials')
    };
  });
  actions.resetForm();
}

function mounted() {
  console.log('Mounted hook called')
}
</script>

<template>
  <div class="grid">
    <div class="surface-card col-6 col-offset-3 p-4 shadow-2 border-round w-full lg:w-6 md:w-3">
      <div class="text-center mb-5">
        <Logo alt="Image" height="50" class="mb-3"/>
        <div class="text-900 text-3xl font-medium mb-3">Create User</div>
        <span class="text-600 font-medium line-height-3">Have an account?</span>
        <a href="/login" class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">go to Login Page!</a>
      </div>
      <Form
          :validation-schema="schema"
          @submit="onSubmit"
      >
        <div>
          <InputTextWithValidation name="email" id="email" label="User email"/>

          <InputTextWithValidation name="fullName" id="username" label="User name"/>

          <InputTextWithValidation name="password" id="password" label="Password" />

          <Button  type="submit" label="Sign In" icon="pi pi-user" class="w-full"></Button>

        </div>
      </Form>
    </div>
  </div>
</template>

<style scoped>
.p-error {
  display: block;
}
</style>
