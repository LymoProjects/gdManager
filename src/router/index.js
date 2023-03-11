import {createRouter, createWebHashHistory} from "vue-router";

import GdWelcome from "../components/mainComps/views/gdWelcome.vue";
import GdLogOperation from "../components/mainComps/views/gdLogOperation.vue";
import GdIdentify from "../components/mainComps/views/gdIdentify.vue";
import GdWeather from "../components/mainComps/views/gdWeather.vue";

import GdUserInsert from "../components/mainComps/views/userOperationViews/gdUserInsert.vue";
import GdUserUpdate from "../components/mainComps/views/userOperationViews/gdUserUpdate.vue";
import GdUserDelete from "../components/mainComps/views/userOperationViews/gdUserDelete.vue";
import GdUserSelect from "../components/mainComps/views/userOperationViews/gdUserSelect.vue";

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
        path : "/identify",
        component : GdIdentify
    },
    {
        path : "/weather",
        component : GdWeather
    },
    {
        path : "/userInsert",
        component : GdUserInsert
    },
    {
        path : "/userUpdate",
        component : GdUserUpdate
    },
    {
        path : "/userDelete",
        component : GdUserDelete
    },
    {
        path : "/userSelect",
        component : GdUserSelect
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router