// routes.js

import HelloWorld from './components/HelloWorld.vue'
import Landing from './components/Landing.vue'
import Register from './components/Register.vue'

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/blog', component: Landing },
    { path: '/contact', component: Register },
];

export default routes;