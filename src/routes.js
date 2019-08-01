// routes.js

import Blog from './components/Blog.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import NotFound from './components/NotFound.vue'
import Services from './components/Services.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/services', component: Services},
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
    { path: '/error.html', component: NotFound },
];

export default routes;