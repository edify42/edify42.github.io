// routes.js

import Blog from './components/Blog.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
];

export default routes;