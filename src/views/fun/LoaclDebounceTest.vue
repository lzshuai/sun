<template>
    <div>

        <button @click="bTest">按钮2</button>
        <br/>
        <div style="margin-top: 20px">
            <button @click="bMethonTest">按钮3</button>
        </div>
        <div style="margin-top: 20px">
            <button @click="test4">按钮4</button>
        </div>

        <div style="margin-top: 20px">
            <button @click="rightGo">正确调用</button>
        </div>


    </div>
</template>

<script>
    import debounce from "../../util/debounce";
    let that = this;
    export default {
        name: "LoaclDebounceTest",
        methods:{
            bTest: debounce(function() {
                console.log("bTest")
            },1000),
            bMethonTest(){
                console.log(11);
                debounce(this.test(),1000) //这种会执行，但是会报错
            },
            test(){
                console.log("进去了");
            },
            test4(){
                var that = this
                // 防止每次输入都会触发查询事件
                debounce(function () {
                    that.conTest();
                }, 1000)()
            },
            conTest(){
                console.log("打印1次");
            },
            rightGo:debounce(function() {
               this.right2()
            },1000),
            right2(){
                console.log("right2")
            }

        }
    }
</script>

<style scoped>

</style>
