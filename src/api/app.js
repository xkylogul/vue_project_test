import {instance} from './request'
const httpRequest=function(){
    instance.request({
        url:'/get',params:{
            name:"夏克玉",age:12
        }
    })
    
    
}
export default httpRequest

