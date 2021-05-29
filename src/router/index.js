import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import {setTitle} from '@/lib/util.js'

Vue.use(Router)

const router= new Router({
    mode:'hash',
    routes
})

const IS_LOGIN = true
router.beforeEach(
    (to,from,next)=>{
        to.meta && setTitle(to.meta.title)
        if(to.name!=='login'){
            if(IS_LOGIN)  next()
            else next({name:'login'})    
        }else{
            if(IS_LOGIN) next({name:'home'})
            else next()
        }
    }
)

export default router