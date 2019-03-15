import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import message from '@/components/message'
import mess_son from '@/components/message_son'
import left from '@/components/left'
import right from '@/components/right'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
        path:'/',
        components:{
            left:left,
            right:right
        },
        children:[
            {
                path: '/message',
                redirect:'/mess_son',
                name: 'messagexxxx',
                component:message,
                children: [
                    {
                        path: '/mess_son',
                        name: 'mess_son',
                        component: mess_son
                    }
                ]
            }
        ]
    },
    // {
    //     path: '/',
    //     name: 'right',
    //     component: right,
    //     children:[
    //         {
    //             path: '/message',
    //             name: 'messagexxxx',
    //             component:message,
    //             children: [
    //                 {
    //                     path: '/mess_son',
    //                     name: 'mess_son',
    //                     component: mess_son
    //                 }
    //             ]
    //         }
    //     ]
    // },
  ]
})
