import axios from 'axios'
import {TIMEOUT,baseURL} from './config'
 
const instance = axios.create({
    timeout:TIMEOUT,
    baseURL:baseURL
})
axios.interceptors.request.use(
    config=>{
        return config
    },err=>{
        return err
    }
)
instance.interceptors.response.use(
    res=>{
        return res.data
    },err=>{
       if(err&&err.response){
           switch(err.reponse.status){
               case 400:
                   err.message="请求错误";
                   break;
                   case 401:
                       err.message="未授权访问";
                       break

           }
       }
       return err
    }
)
export default instance