/**
 * 项目中添加路由
 */
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const router = new Router({
    routes:[
      /*  {
            path:'/index',
            name:'index',
            component: ()=>import('../App.vue')
        },*/
        {
            path:'/search',
            name:'search',
            component: ()=>import('@/components/search/search.vue')
        },
        {
            path:'/view',
            name:'view',
            component: ()=>import('@/views/ViewIndex.vue')
        },
        {
            path:'/stops',
            name:'stops',
            component: ()=>import('@/views/events/eventTest.vue')
        },
        {
            path:'/debounce',
            name:'debounce',
            component: ()=>import('@/views/fun/DebounceTest.vue')
        },
        {
            path:'/localDebounce',
            name:'localDebounce',
            component: ()=>import('@/views/fun/LoaclDebounceTest.vue')
        },
        {
            path:'/transformTest',
            name:'transformTest',
            component: ()=>import('@/components/transformTest.vue')
        },
        {
            path:'/treeTest',
            name:'treeTest',
            component: ()=>import('@/components/MyTree/TreeTest.vue')
        },
        {
            path:'/treeTest2',
            name:'treeTest2',
            component: ()=>import('@/components/MyTree/TreeTest2.vue')
        },
        {
            path:'/treeTest3',
            name:'treeTest3',
            component: ()=>import('@/components/MyTree/TreeTest3.vue')
        },
        {
            path:'/treeTest4',
            name:'treeTest4',
            component: ()=>import('@/components/MyTree/TreeTest4.vue')
        },
        {
            path:'/treeScroll',
            name:'treeScroll',
            component: ()=>import('@/components/MyTree/TreeScroll.vue')
        },
        {
            path:'/treeScroll2',
            name:'treeScroll2',
            component: ()=>import('@/components/MyTree/TreeScroll2.vue')
        },
        {
            path:'/vuexTest',
            name:'vuexTest',
            component: ()=>import('@/views/components/counter.vue')
        },
        {
            path:'/axiosTest',
            name:'axiosTest',
            component: ()=>import('@/views/components/axiosTest.vue'),
            meta: {
                keepAlive: false
            }
        },
        {
            path:'/keepAliveTest',
            name:'keepAliveTest',
            component: ()=>import('@/views/components/KeepAliveTest.vue'),
            meta: {
                keepAlive: true
            }

        },
        {
            path:'/picTest',
            name:'picTest',
            component: ()=>import('@/views/components/PicTest.vue'),
            meta: {
                keepAlive: false
            }

        },
        {
            path:'/iconTest',
            name:'iconTest',
            component: ()=>import('@/views/components/iconTest.vue')
        },
        {
            path:'/slotTest',
            name:'slotTest',
            component: ()=>import('@/views/components/SlotTest.vue')
        },
        {
            path:'/tabTest',
            name:'tabTest',
            component: ()=>import('@/views/components/tableTest.vue')
        },
        {
            path:'/indexHome',
            name:'indexHome',
            component: ()=>import('@/views/index/index.vue')
        },
        {
            path:'/indexPage',
            name:'indexPage',
            component: ()=>import('@/views/index/indexPage.vue')
        },
        {
            path:'/circelTest',
            name:'circelTest',
            component: ()=>import('@/views/components/CirCelAnimation.vue')
        },
    ]
})
export default router
