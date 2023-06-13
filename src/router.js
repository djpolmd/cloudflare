import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import LoginForm from "./components/LoginForm.vue";
import SignInForm from "./components/SignInForm.vue";
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: App },
        { path: "/login", component: LoginForm },
        { path: "/sign-in", component: SignInForm }
    ]
});