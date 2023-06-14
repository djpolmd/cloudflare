import { createRouter, createWebHistory } from "vue-router";
import AppLayout from './layout/AppLayout.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/",
            component: AppLayout,
            children: [{
                path: '/',
                name: 'dashboard',
                component: () => import('./views/Dashboard.vue')
                }
            ],
        },
        { path: "/login", component: () =>  import("./components/LoginForm.vue") },
        { path: "/sign-in", component: () => import("./components/SignInForm.vue") },
        { path: "/userlist", component: () => import("./components/UserList.vue") }
    ]
});