import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Landing from '@/components/landing'
import Citysearch from '@/components/citysearch'
import Restpassword from '@/components/restpassword'
import First from '@/components/first'
import Fecond from '@/components/second'
import Third from '@/components/third'
import Four from '@/components/four'
import Xiadan from '@/components/xiadan'
import ShangjiaDetails from '@/components/shangjiaDetails'
import Xiadangoods from '@/components/xiadangoods'
import Xiadanevaluation from '@/components/xiadanevaluation'
import Qiyedetails from '@/components/qiyedetails'
import Caipin from '@/components/caipin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/landing',
      name: 'landing',
      component: Landing
    },
    {
      path: '/restpassword',
      name: 'restpassword',
      component: Restpassword
    },
    {
      path: '/citysearch',
      name: 'citysearch',
      component: Citysearch
    },
    {
      path: '/first',
      name: 'first',
      component: First,
    },
    {
      path: '/xiadan',
      name: 'xiadan',
      component: Xiadan,
      redirect:'/xiadangoods',
      children:[
        {
          path: '/xiadangoods',
          name: 'xiadangoods',
          component: Xiadangoods,
        },
        {
          path: '/xiadanevaluation',
          name: 'xiadanevaluation',
          component: Xiadanevaluation,
        }
      ]
    },
    {
      path: '/shangjiaDetails',
      name: 'shangjiaDetails',
      component: ShangjiaDetails
    },
    {
      path: '/qiyedetails',
      name: 'qiyedetails',
      component: Qiyedetails
    },
        {
          path: '/caipin',
          name: 'caipin',
          component: Caipin,
        },
    {
      path: '/second',
      name: 'second',
      component: Fecond
    },
    {
      path: '/third',
      name: 'third',
      component: Third
    },
    {
      path: '/four',
      name: 'four',
      component: Four
    },
  ]
})
