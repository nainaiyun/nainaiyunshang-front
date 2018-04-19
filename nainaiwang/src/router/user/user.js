import Vue from 'vue'
import Router from 'vue-router';
import Home from '@/components/user/home'
import Information from '@/components/user/information'
import Baseinfo from '@/components/user/information/baseinfo'
import Changepaypwd from '@/components/user/information/changePayPwd'
import Changepwd from '@/components/user/information/changePwd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/information',
      name: 'Information',
      component: Information,
      children: [
        {
          path: '/baseInfo',
          name: 'Baseinfo',
          component: Baseinfo
        },
        {
          path: '/changePayPwd',
          name: 'Changepaypwd',
          component: Changepaypwd
        },
        {
          path: '/changePwd',
          name: 'Changepwd',
          component: Changepwd
        }
      ]
    }

  ]
})
