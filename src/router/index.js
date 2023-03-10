import {createRouter, createWebHashHistory} from "vue-router";

import GdWelcome from "../components/mainComps/views/gdWelcome.vue";
import GdLogOperation from "../components/mainComps/views/gdLogOperation.vue";
import GdUserOperation from "../components/mainComps/views/gdUserOperation.vue";
import GdIdentify from "../components/mainComps/views/gdIdentify.vue";
import GdWeather from "../components/mainComps/views/gdWeather.vue";

const routes = [
    {
        path : "/",
        component : GdWelcome
    },
    {
        path : "/logOperation",
        component : GdLogOperation
    },
    {
        path : "/userOperation",
        component : GdUserOperation
    },
    {
        path : "/identify",
        component : GdIdentify
    },
    {
        path : "/weather",
        component : GdWeather
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router