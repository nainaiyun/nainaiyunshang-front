import Vue from 'vue'
import Router from 'vue-router';
import Home from '@/components/user/home'
import Information from '@/components/user/information'
import Baseinfo from '@/components/user/information/baseinfo'
import Changepaypwd from '@/components/user/information/changePayPwd'
import Changepwd from '@/components/user/information/changePwd'
import Changetel from '@/components/user/information/changetel'
import Appealpay from '@/components/user/information/appealpay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/information/home',
      name: 'Information',
      component: Information,
      children: [
        {
          path: '/information',
          name: 'Baseinfo',
          component: Baseinfo
        },
        {
          path: '/information/changePayPwd',
          name: 'Changepaypwd',
          component: Changepaypwd
        },
        {
          path: '/information/changePwd',
          name: 'Changepwd',
          component: Changepwd
        },
          {
              path: '/information/changeTel',
              name: 'Changetel',
              component: Changetel
          },
          {
              path: '/information/appealPay',
              name: 'Appealpay',
              component: Appealpay
          }
      ]
    }

  ]
})
