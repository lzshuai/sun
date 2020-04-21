<template>
 <div>

     <button @click="debounceTest"> debounce</button>
     <br>
     <div style="width: 30px;height:30px;border: 1px solid red" @click="testDD"> div触发</div>
 </div>
</template>

<script>
    import {debounce} from 'lodash'
    export default {
        name: "DebounceTest",
        methods:{
            debounceTest(){
                console.log(111)
                debounce(function () {
                    console.log("1s打印一次")
                },1000)
            },
            testDD: debounce(function() {
                console.log("testDD")
            },1000),


        }

    }
</script>

<style scoped>

</style>
