import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Welcome from '@/components/Welcome'
import Admin from '@/components/Admin'
import Login from '@/components/Login'
import Register from '@/components/Register'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/Login',
      name: 'login',
      component: Login,
      meta: {
        auth: true
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
});

router.beforeEach((to, from, next) => {
  var user = firebase.auth().currentUser
  if(to.matched.some(record => record.meta.auth)){
    if(!user){
      //not logged in redirect
      next({
        path: '/login', //where to redirect if not logged in
        query: {
          redirect: to.fullPath //direct user to full login page
        }
      });
  }else{
    next();
  }
  }else{
    next();
  }
  
});

export default router;