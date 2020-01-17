/**
 * ajax 请求时显示 loading模态框
 */

import {Loading,Notification} from "element-ui";

//loading组件的实例对象
let loadinginstace

/**
 * 请求拦截器
 */

const requestHandler = function (config) {
    //防止一次请求结束后模态框关闭导致多次请求会刷新多次的问题

    if(config && config.showModal){
        if(window.loadingCloseTimeOut)
            clearTimeout(window.loadingCloseTimeOut)

        loadinginstace = Loading.service({
            fullscreen:true,
            text:'加载中',
            spinner:'el-icon-loading',
            background:'rgba(0,0,0,0.31)'
        })
    }
    return config

}
/*
* 请求失败拦截器
* */
const requestErrorHandler = function (error) {
    loadinginstace.close()
    Notification({
        showClose:true,
        duration:2000,
        message:'加载超时',
        type:'error',
        offset:120
    })
    return Promise.reject(error)
}

/**
 * 响应拦截器
 * */

const responseHandler =function (response) {
    if(loadinginstace){
        window.loadingCloseTimeOut = setTimeout(() =>{
            loadinginstace.close()
        },200)
    }
    return response
}


/***
 * 响应失败拦截器
 * @param error
 * @returns {Promise<never>}
 */
const  responseErrorHandler = function (error) {
    loadinginstace.close();
    return Promise.reject(error)
}

let loadingRequestInterceptor = null
let loadingResponseInterceptor =null

export  default {
    install :(axios) =>{
        loadingRequestInterceptor = axios.interceptors.request.use(requestHandler,requestErrorHandler)
        loadingResponseInterceptor = axios.interceptors.response.use(responseHandler,responseErrorHandler)
    },
    uninstall:(axios) =>{
        if(loadingRequestInterceptor){
            axios.interceptors.request.eject(loadingRequestInterceptor)
        }
        if(loadingResponseInterceptor){
            axios.interceptors.request.eject(loadingResponseInterceptor)
        }
    }

}
