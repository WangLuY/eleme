import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Landing from '@/components/sgl/landing'
import Citysearch from '@/components/sgl/citysearch'
import Restpassword from '@/components/sgl/restpassword'
import First from '@/components/sgl/first'
import Fecond from '@/components/sgl/second'
import Third from '@/components/sgl/third'
import Four from '@/components/sgl/four'
import Xiadan from '@/components/sgl/xiadan'
import ShangjiaDetails from '@/components/sgl/shangjiaDetails'
import Xiadangoods from '@/components/sgl/xiadangoods'
import Xiadanevaluation from '@/components/sgl/xiadanevaluation'
import Qiyedetails from '@/components/sgl/qiyedetails'
import Caipin from '@/components/sgl/caipin'

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
