import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cars from '../views/Cars.vue'
import Admin from '../views/Admin.vue'
import BuyCar from '../views/BuyCar.vue'
import Car from '../views/CarInformation.vue'
import Login from '../components/admin/Login.vue'
import AddNew from '../components/admin/AddNewItems.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
   
  },
  {
    path: '/cars',
    name: 'Cars',
    component: Cars,
  },
  {
    path: '/car/:id',
    name: 'car',
    component: Car
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/buycar/:id',
    name: 'buycar',
    component: BuyCar,
    meta:{
      requiresAuth:true,
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta:{
      requiresAuth:true,
      requiresAuth2:true
    }
  },
  {
    path: '/addNew',
    name: 'addNew',
    component: AddNew,
    meta:{
      requiresAuth:true,
      requiresAuth2:true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  var currentUser;
  if(store.state.user==null ||store.state.user.length==0){
    currentUser = null;
  }else{
    currentUser = store.state.user;
  }
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('/login');
  else next();

});

router.beforeEach((to, from, next) => {
  var currentUser;
  if(store.state.user==null ||store.state.user.length==0){
    currentUser = null;
  }else{
    currentUser = store.state.user;
  }
  const requiresAuth2 = to.matched.some(record => record.meta.requiresAuth2);
  var admin;
  if(store.state.user==null || store.state.user.length==0){
    admin=null;
  }else{
  admin=store.state.user[0]["admin"];
  }

  if (requiresAuth2 && !currentUser  ){
    alert('You are not allowed');
   
  }else if(admin=="0" && requiresAuth2){
    alert('You are not allowed');
     
  }else{
    next();
  }
});

export default router
