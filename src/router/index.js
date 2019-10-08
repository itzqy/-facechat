import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/components/chat/chat'
import Chatroom from '@/components/chatroom/chatroom'
import Search from '@/components/search/search'
import ChatroomUser from '@/components/chatroom/chatroom-user/chatroom-user'
import Address from '@/components/address/address'
import Find from '@/components/find/find'
import Me from '@/components/me/me'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/login',
    component: resolve => require(['../views/auth/login'], resolve)
  },
  {
    path: '/register',
    component: resolve => require(['../views/auth/register'], resolve)
  },
  {
    path: '/',
    redirect: '/chat'
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/chatroom',
    component: Chatroom,
    children: [
      {
        path: 'user',
        component: ChatroomUser
      }
    ]
  },
  {
    path: '/',
    redirect: '/chat'
  },
  {
    path: '/chat',
    component: Chat
  },
  {
    path: '/address',
    component: Address
  },
  {
    path: '/find',
    component: Find
  },
  {
    path: '/me',
    component: Me
  }
  ]
})
