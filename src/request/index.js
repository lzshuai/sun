/**
 *axios 封装和实例化，加载axios拦截器
 *
 */

import Axios from "axios";

const  axios = Axios.create({
    baseURL : 'http://localhost:8080',
    timeout:20000,
    responseType:'json',
    withCredentials:false,//是否允许带cookie
    headers:{
        'Content-Type':'application/json;charset=utf-8',
        'X-Requested-With':'XMLHttpRequest'
    },
    showModal:true,
    showError:true
})

//对axios的实例封装成一个plugin，方便 Vue.use(x)
export default {
    install:function (Vue,option) {
        Object.defineProperty(Vue.prototype,'$http',{
            value:axios
        })

    }
}


export const request = axios
