import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {   
        name: 'Home',
        path: '/', 
        component: () => import( /* webpackChunkName: "HomePage" */ '../pages/Home.vue') 
    },
    {   
        name: 'AuthorQuotes',
        path: '/author-quotes', 
        component: () => import( /* webpackChunkName: "AuthorQuotes" */ '../pages/AuthorQuotes.vue') 
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router;