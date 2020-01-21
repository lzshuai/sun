<template>
    <div class="indexHome">
        <div class="header">
            背景图,page
        </div>
        <div class="flowMenu" :class="flowBlock">
                <ul class="flow-ul">
                    <!--  v-scroll-to="'#'+item.id" -->
                    <li v-for="(item,index) in mainArr " :key="index" class="flow-item"

                        v-scroll-to="{ element: '#' + item.id, offset: item.id === 'appCenter'? 5:0 }"
                        @click="handleMenu(item.id)">
                            <span class="flow-text" :class=' item.id === liActive ? "li-active" :""' >{{item.name}}</span>
                    </li>
                </ul>
        </div>
        <div class="mainContent">
                <div class="app-center" id="appCenter">
                    客户中心
                </div>
                <div class="app-manger" id="appManger">
                    客户管理
                </div>
                <div class="app-adapt" id="appAdapt">
                    班车信息
                </div>

        </div>
    </div>
</template>

<script>

    export default {
        name: "indexPage",
        components:{},
        data(){
            return{
                liActive:'appCenter',
                scrollFlag:false,
                mainArr:[
                    {id:"appCenter",name:"客户中心"},
                    {id:"appManger",name:"客户管理"},
                    {id:"appAdapt",name:"班车信息"},
                ],
                flowBlock:'',
                topLength:120
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
                scrollTop > 550 ? this.flowBlock = 'flexLang' : this.flowBlock = '';
            },
            handleScroll(e){
                let target = e.target;
                let contentMain = document.querySelector('.mainContent');
                let nodes =contentMain.childNodes;
                let nowEl = null;
                let nodesArr= Array.prototype.slice.call(nodes); //将nodeList转成数组

                if((target.offsetHeight+target.scrollTop) >= (target.scrollHeight -10)){
                    nowEl = nodesArr.slice(-1)[0] //获取最后一个元素
                }else{
                    nodesArr.forEach(nodeItem => {
                        let top = nodeItem.offsetTop - target.scrollTop
                        nodeItem.positionTop = top;
                        if(top < this.topLength){
                            nowEl = nowEl === null ? nodeItem : (nodeItem.positionTop > nowEl.positionTop ? nodeItem : nowEl)
                        }
                    })
                }
                let blockId = '';
                if(nowEl){
                    blockId = nowEl.getAttribute('id')
                }
                if(blockId && (blockId !== this.liActive)){
                    this.liActive = blockId
                }
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
            document.querySelector('.appMain').removeEventListener('scroll',this.handleScroll)
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