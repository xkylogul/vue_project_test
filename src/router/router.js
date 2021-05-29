import Home from '@/views/Home.vue'
export default [
    {
        path:'/',
        name : 'home',
        component : Home,
        props:route=>({
            food:route.query.food
        })
    },
    {
        path:'/about',
        name: 'about',
        component : ()=>import('@/views/About.vue'),
        props:{food:'banana'},
        meta:{
            title:'关于'
        }
    },
    {
        path:'/action/:id',
        name:'action',
        component:()=>import('@/views/Action.vue'),
        props:true  //传入的props值
    },
    {
   path:'/store',
   name:'store',
   component:()=>import('@/views/Store.vue')
    },
    {
        path:'/parents',
        name:'parents',
        component:()=>import('@/views/Parents.vue'),
        children:[
            {
                path:'child',
                name:'child',
                component:()=>import('@/views/Child.vue')
            }
        ]

    },
    {
        path:'/named_view',
        components:{
 default:()=>import('@/views/Child'),
 email:()=>import('@/views/Email'),
 tel:()=>import('@/views/Tel')
        }
    },
    {
        path:'/main',
        redirect:to=>{
            
            console.log(to)
                '/'
            
        }
    },
    {
        path:'*',
        component:()=>import('@/views/error.vue')
    }



]
   