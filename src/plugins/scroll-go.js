/**
 * 引入滚动组件
 * */
import Vue from 'vue'
import VueScroll from 'vue-scrollto'
Vue.use(VueScroll,{
    container: ".appMain",
    duration:500,
    easing:"linear",
    offset:-60,
    force:true,
    cancelable:true,
    onStart:false,
    onDone:false,
    onCancel:false,
    x:false,
    y:true

})