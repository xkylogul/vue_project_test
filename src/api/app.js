import {instance} from './request'
const httpRequest=function(){
    instance.request({
        url:'/get',params:{
            name:"xia",age:12
        }
    })
    
    
}
export default httpRequest

