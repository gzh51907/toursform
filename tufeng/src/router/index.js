import Vue from "vue"
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Home from '../pages/Home.vue';
import Discover from '../pages/Discover.vue';
import Destination from '../pages/Destination.vue';
import List from '../pages/List.vue';
import Mine from '../pages/Mine.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';

let router = new VueRouter({
    routes:[{
        name:"home",
        path:"/home",
        component:Home
    },{
        name:"discover",
        path:"/discover",
        component:Discover
    },{
        name:"destination",
        path:"/destination",
        component:Destination
    },{
        name:"list",
        path:"/list",
        component:List,
        //设置鉴权，需要满足条件才能访问
        meta:{
            requiresAuth:true
        }
    },{
        name:"mine",
        path:"/mine",
        component:Mine
    },{
        name:"reg",
        path:"/reg",
        component:Reg
    },{
        name:"login",
        path:"/login",
        component:Login
    }]

})

//设置全局路由守卫
router.beforeEach(function(to,from,next){
    window.console.log('beforeEach',to,from);
    //设置页面访问权限
    //先判断目标路由是否需要鉴权--->路由中是否有reuqireAuth属性
    if(to.meta.requiresAuth){
        let Authorization = localStorage.getItem("Authorization")
        if(Authorization){
            next()
        }else{
            router.push({
                path:'/login',
                query:{
                    targetUrl:to.fullPath
                }
            })
        }
    }else if(to.path!=from.path){
        next()
    }
    

})

export default router