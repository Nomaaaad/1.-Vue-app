import { createRouter, createWebHistory } from "vue-router";

import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachRegistation from './pages/coaches/CoachRegistation.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import ReguestsReceived from './pages/requests/ReguestsReceived.vue'
import NotFound from './pages/NotFound.vue'
import UserAuth from './pages/auth/UserAuth.vue'
import store from './store/index'




const router = createRouter({
   history: createWebHistory(),
   routes: [
      { path: '/', redirect: '/coaches' },
      { path: '/coaches', component: CoachesList },
      {
         path: '/coaches/:id', component: CoachDetail, props: true, children: [
            { path: 'contact', component: ContactCoach },
         ]
      },
      { path: '/register', component: CoachRegistation, meta: { requiresAuth: true } },
      { path: '/requests', component: ReguestsReceived, meta: { requiresAuth: true } },
      { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
      { path: '/:notFound(.*)', component: NotFound },
   ],
});

router.beforeEach((to, _, next) => {
   if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
      next('/auth');
   } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
      next('/coaches')
   } else {
      next();
   }
});

export default router;