import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Citylist from '@/components/home/citylist'
import Register from '@/components/home/register'
import Resetpasswords from '@/components/df/resetpasswords'
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
import Wode from '@/components/df/wode'
import Information from '@/components/df/information'
import Username from '@/components/df/username'
import Add from '@/components/df/add'
import Editaddress from '@/components/df/editaddress'
import Balance from '@/components/df/balance'
import Balexplain from '@/components/df/balexplain'
import Discounts from '@/components/df/discounts'
import Redpacket from '@/components/df/redpacket'
import Redexplain from '@/components/df/redexplain'
import Voucher from '@/components/df/voucher'
import Download from '@/components/df/download'
import Paidapian from '@/components/df/paidapian'
import Djqshuoming from '@/components/df/djqshuoming'
import Jifen from '@/components/df/jifen'
import Jfwenti from '@/components/df/jfwenti'
import Fuwuzhongxin from '@/components/df/fuwuzhongxin'
import Huiyuansm from '@/components/df/huiyuansm'
import Huiyuanwt from '@/components/df/huiyuanwt'
import Sousuo from '@/components/df/sousuo'
import Duihuan from '@/components/df/duihuan'
import Tuijianyj from '@/components/df/tuijianyj'
import Jifensc from '@/components/df/jifensc'
import Historyrb from '@/components/df/historyrb'
import Huiyuanzhongxin from '@/components/df/huiyuanzhongxin'
import Goumaivip from '@/components/df/goumaivip'
import Duihuanvip from '@/components/df/duihuanvip'
import Goumaijilu from '@/components/df/goumaijilu'
import Dingdan from '@/components/home/dingdan'
import Dingwei from '@/components/home/dingwei'
import History from '@/components/home/history'
import FirstPage from '@/components/wly/firstpage'
import Family from '@/components/wly/family'
import Shangjialist from '@/components/wly/shangjialist'
import Shoplist from '@/components/sgl/shoplist'
import FindFood from '@/components/wly/findFood'
import FindHistory from '@/components/wly/findHistory'
import test from '@/components/sgl/test'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'citylist',
      component: Citylist
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/citylist',
      name: 'citylist',
      component: Citylist
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/resetpasswords',
      name: 'resetpasswords',
      component: Resetpasswords
    },
    {
      path: '/paidapian',
      name: 'paidapian',
      component: Paidapian
    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: Dingdan
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
      // redirect:'/xiadangoods',
      redirect:'/test',
      children:[
        // {
        //   path: '/xiadangoods',
        //   name: 'xiadangoods',
        //   component: Xiadangoods,
        // },
        {
          path: '/test',
          name: 'test',
          component: test,
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
    {
      path: '/wode',
      name: 'wode',
      component: Wode
    },
{
  path: '/information',
  name: 'information',
  component: Information
},
{
  path: '/username',
  name: 'username',
  component: Username
},
{
  path: '/add',
  name: 'add',
  component: Add
},
{
  path: '/editaddress',
  name: 'editaddress',
  component: Editaddress
},
{
  path: '/balance',
  name: 'balance',
  component: Balance
},
{
  path: '/balexplain',
  name: 'balexplain',
  component: Balexplain
},
{
  path: '/discounts',
  name: 'discounts',
  component: Discounts,
  redirect: '/redpacket',
  children: [
    {
      path: '/redpacket',
      name: 'redpacket',
      component: Redpacket,
    },
    
    {
      path: '/voucher',
      name: 'voucher',
      component: Voucher,
    }
    
  ]
},
{
  path: '/redexplain',
  name: 'redexplain',
  component:Redexplain
},
{
  path: '/download',
  name: 'download',
  component:Download
},
{
  path: '/djqshuoming',
  name: 'djqshuoming',
  component:Djqshuoming
},
{
  path: '/jifen',
  name: 'jifen',
  component:Jifen
},
{
  path: '/jfwenti',
  name: 'jfwenti',
  component:Jfwenti
},
{
  path: '/fuwuzhongxin',
  name: 'fuwuzhongxin',
  component:Fuwuzhongxin
},
{
  path: '/huiyuansm',
  name: 'huiyuansm',
  component:Huiyuansm
},
{
  path: '/huiyuanwt',
  name: 'huiyuanwt',
  component:Huiyuanwt
},
{
  path: '/sousuo',
  name: 'suosou',
  component:Sousuo
},
{
  path: '/duihuan',
  name: 'duihuan',
  component:Duihuan
},
{
  path: '/tuijianyj',
  name: 'tuijianyj',
  component:Tuijianyj
},
{
  path: '/jifensc',
  name: 'jifensc',
  component:Jifensc
},
{
  path: '/historyrb',
  name: 'historyrb',
  component:Historyrb
},
{
  path: '/huiyuanzhongxin',
  name: 'huiyuanzhongxin',
  component:Huiyuanzhongxin
},
{
  path: '/goumaivip',
  name: 'goumaivip',
  component:Goumaivip
},
{
  path: '/duihuanvip',
  name: 'duohuanvip',
  component:Duihuanvip
},
{
  path: '/goumaijilu',
  name: 'goumaijilu',
  component:Goumaijilu
},
{
  path: '/dingwei',
  name: 'dingwei',
  component: Dingwei,
  children:[
    {
      path:"",
      name:"history",
      component: History
    },
    {
      path:"/history",
      name:"history",
      component: History
    }
  ]
},
{
  path:"/family",
  name:"family",
  component: Family,
  // redirect:"/firstpage",
  // children:[
  //   {
  //     path:"/firstpage",
  //     // name:"firstpage",
  //     components:{
  //       header:FirstPage,
  //       default:FirstPage,
  //       content:Shoplist
  //     } 
  //   },
  // ]
}, //点击firstpage后进入的页面
{
  path:"/shangjialist",
  name:"shangjia",
  component:Shangjialist,
  redirect:"/shoplist",
  children:[
    {
      path:"/shoplist",
      name:"shoplist",
      component:Shoplist
    }
  ]
},
//搜索按钮的路由跳转
{
  path:"/findFood",
  name:"findFood",
  component:FindFood,
  // redirect:"/findHistory",
  // children:[
  //   {
  //     path:"/findHistory",
  //     name:"findHistory",
  //     component:FindHistory
  //   }
  // ]
}
]})
