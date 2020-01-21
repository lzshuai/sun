<template>
    <div class="indexHome">
        <div class="header">
            背景图
        </div>
        <div class="flowMenu" :class="flowBlock">
                <ul class="flow-ul">
                    <li v-for="(item,index) in mainArr " :key="index" class="flow-item" v-scroll-to="'#'+item.id" @click="handleMenu(item.id)">
                            <span class="flow-text" :class=' item.id === liActive ? "li-active" :""' >{{item.name}}</span>
                    </li>
                </ul>
        </div>
        <div class="mainContent">
            <scroll-container :container = "'.appMain'" @currentChange="currentChange">
                <div class="app-center" id="appCenter">
                    应用中心
                </div>
                <div class="app-manger" id="appManger">
                    应用管理
                </div>
                <div class="app-adapt" id="appAdapt">
                    应用适配
                </div>
            </scroll-container>
        </div>
    </div>
</template>

<script>
    import ScrollContainer from '../../components/scroll/ScrollSet';
    export default {
        name: "index",
        components:{ScrollContainer},
        data(){
            return{
                liActive:'appCenter',
                scrollFlag:false,
                mainArr:[
                    {id:"appCenter",name:"应用中心"},
                    {id:"appManger",name:"应用管理"},
                    {id:"appAdapt",name:"应用适配"},
                ],
                flowBlock:''
            }
        },
        props:{

        },
        methods:{
            handleMenu(id){
                this.liActive = id;
                this.scrollFlag = false;
                let thisOut = this;
                setTimeout(function () {
                    thisOut.scrollFlag = true
                },1100)
            },
            currentChange(id){
                this.liActive = id;
            },
            goScroll(e){

                let scrollTop = document.querySelector('.appMain').scrollTop || document.documentElement.scrollTop;
                scrollTop > 600 ? this.flowBlock = 'flexLang' : this.flowBlock = '';
            },
            handleScroll(){
                console.log("绑定上了。。。。====");
            }
        },
        mounted() {
            window.addEventListener('scroll',this.goScroll,true);
            document.querySelector('.appMain').addEventListener('scroll',this.handleScroll,true)
            let indexDom =document.querySelector('.indexHome');
            this.liActive = 'appCenter';
            let thisOut = this;
            setTimeout(function () {
                thisOut.scrollFlag = true
            },1100)

        },
        beforeDestroy() {
            window.removeEventListener('scroll',this.goScroll)
        }
    }
</script>

<style scoped lang="stylus">
    .flexLang{
        position fixed;
        top 0;
    }

    .indexHome{
       /* overflow-y auto;
        height 100%;
        width 100%;*/
        position relative;

        .header{
             /* background :url(../../assets/city3.jpg)  0 0 no-repeat;*/
              width: 100%;
            height 600px;
            border 1px solid red
        }
        .flowMenu{
            height: 60px;
            width:100%;
            border 1px solid green
            background-color :#FFFFFF;
            border-bottom 1px solid #e7e1cd
            z-index 3
          /*  position fixed
            top 0*/

            .flow-ul{
                width:1300px;
                height: 100%;
                margin 0 auto;
                display flex
                .flow-item{
                    flex 1
                    cursor pointer
                    justify-content center ;
                    list-style-type: none;

                    .flow-text{
                        border-bottom 2px solid transparent
                        display inline-block
                        line-height 60px
                    }
                    .li-active{
                        color:blue;
                        border-bottom 1px solid blue;
                    }
                }
            }
        }
        .mainContent{
            .app-center{
                height 600px
                width 100%
                border 1px solid rosybrown
                /*margin 0 auto;*/
            }
            .app-manger{
                height 800px
                width 100%
                border 1px solid royalblue
                /*margin 0 auto;*/
            }
            .app-adapt{
                height 700px
                width 100%
                border 1px solid blueviolet
            }
        }

    }

</style>