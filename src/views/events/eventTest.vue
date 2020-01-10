<template>
    <div>
        <!-- 使用 .stop阻止冒泡 -->
        <div @click="stopDivHandler" class="stop">
            <p>1,使用stop会阻止冒泡的事件</p>
            <p>2,div的click事件:stopDivHandler</p>
            <p>3,按钮的click事件:stopBtnHandler</p>
            <input type="button" value="stop事件" @click.stop="stopBtnHandler">
        </div>
        <div class="prevent">
            <!-- 使用 .prevent 阻止默认行为 -->
            <p>
                &lt;a href="http://www.baidu.com" @click.prevent="linkClick"&gt;去百度页&lt;/a&gt;

            </p>
             <a href="http://www.baidu.com" @click.prevent="linkClick">去百度页</a>
        </div>

        <!-- 使用  .capture 实现捕获触发事件的机制 -->
         <div class="capture" @click.capture="captureDivHandler">
             <p>capture 实现捕获触发事件的机制  </p>
             <p>capture 实现捕获触发事件 当元素发生冒泡时，先触发带有该修饰符的元素。若有多个该修饰符，则由外而内触发。
                 就是谁有该事件修饰符，就先触发谁。 </p>
          <input type="button" value="capture按钮" @click="captureBtnHandler">
        </div>
        <!-- 使用 .self 实现只有点击当前元素时候，才会触发事件处理函数 -->
         <div class="inner" @click.self="div1Handler">
             <p>
                 使用 .self 实现只有点击当前元素时候，才会触发事件处理函数
                 <br>
                 .self 放在div 元素上
             </p>
          <input type="button" value="self按钮" @click="btnHandler">
        </div>

        <div class="inner">
            <!-- 使用 .once 只触发一次事件处理函数 -->
             <a href="http://www.baidu.com" target="_blank" @click.prevent.once="linkClick">百度一下</a>
            <div @click.once="onceLice" style="width:100px;height: 100px;border:1px solid green">
                once
            </div>
        </div>

        <!--  .stop 和 .self 的区别 -->
         <div class="outer" @click="div2Handler">
          <div class="inner" @click="div1Handler">
            <input type="button" value="stop按钮" @click.stop="btnHandler">
          </div>
        </div>


        <!-- .self 只会阻止自己身上冒泡行为的触发，并不会真正阻止 冒泡的行为 -->
         <div class="outer" @click="div2Handler">
          <div class="inner" @click.self="div1Handler">
            <input type="button" value="普通按钮" @click="btnHandler" style="margin-top: 100px">
          </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "eventTest",
        methods:{
            stopDivHandler(){
                console.log("方法名称：stopDivHandler，触发了div的事件。。。");
            },
            stopBtnHandler(){
                console.log("方法名称：stopBtnHandler，触发了stop按钮的事件。。。");
            },
            captureDivHandler(){
                console.log("方法名称：captureDivHandler，触发了captureDiv事件。。。");
            },
            captureBtnHandler(){
                console.log("方法名称：captureBtnHandler，触发了capture 按钮事件。。。");
            },
            div1Handler() {
                console.log('这是触发了 inner div 的点击事件')
            },
            btnHandler() {
                console.log('这是触发了 btn 按钮 的点击事件')
            },
            div2Handler() {
                console.log('这是触发了 outer div 的点击事件')
            },
            linkClick() {
                console.log('触发了连接的点击事件')
            },

            onceLice(){
                console.log("once事件====")
            },
        }
    }
</script>

<style scoped lang="stylus">
    .stop{
        border  1px solid red;
        width:400px;
        height 200px;
    }
    .prevent{
        width:600px;
        height: 100px;
        border  1px solid green;
        margin-top 10px
    }
    .capture{
        width:800px;
        height: 200px;
        border  1px solid black;
        margin-top 10px
    }
    .inner{
        width:700px;
        height: 200px;
        border  1px solid pink;
        margin-top 10px
        margin 50px
    }
    .outer{
        width:800px;
        height: 300px;
        border  1px solid red;
        margin-top 10px
    }
</style>