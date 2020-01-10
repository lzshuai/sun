<template>
    <div class="for-search">
        123
        <div>
            <el-input placeholder="请输入搜索内容"
                      v-model="searchWord"
                      ref="searchInput"
                      @click.native="searchClick"
                      class="searchInput"
                      @blur="blurSearch"
                      @keydown.down.native="selectLiItem"
                      @keydown.up.native="selectLiItemUp"
                      @keydown.enter.native="doSearch">

            </el-input>
            <el-button icon="el-icon-search" class="key-search" @click ="doSearch" type="primary"></el-button>
        </div>
        <div class="searchHistory" v-show="historyFlag">
            <ul ref="searchUl">
                <li class="searchLi"
                v-for="(item,index) in searchTop(searchArr)"
                :key="index"
                    @click="clickLi($event)"
                :class="{active:index === isActive}">
                    {{item}}
                </li>

                <div class="search-closeHis">
                    <span class="search-clearStore" @mousedown= downDrag($event) @click="clearHistory">删除历史</span>
                </div>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: "search",
        data(){
            return{
                historyFlag:false,
                searchFlag:true,
                searchWord:"",
                searchArr:[],
                isActive:-1,
                serachHistoryArr:[]
            }
        },
        methods:{
            //搜索
            doSearch(){
                //
              //  this.searchArr = ['hello','word'];
                //this.searchArr = Object.assign([],this.store.getters['search/searchArrs']);//从缓存中获取搜索历史
                if(this.searchWord.length>0){
                    //this.searchFlag = false;
                    this.$refs.searchInput.blur()//按回车时 或点击时 要失去焦点
                    let index = this.searchArr.indexOf(this.searchWord)
                    index !== -1 ? this.searchArr.splice(index,1):'';
                }else{
                    this.searchFlag = true;
                }
                //
                this.searchWord.length >0 ? this.searchArr.unshift(this.searchWord):'';
                //this.$store.commit("search/SET_SEARCH_HISTORY",this.searchArr)
            },
            //按键盘下键
            selectLiItem(){
                let lis = this.$refs.searchUl.getElementsByTagName('li');
                this.isActive === this.searchArr.length -1 ? this.isActive = -1 : this.isActive ++;
                this.isActive >= 8 ? this.isActive = -1 :'';
                this.isActive !== -1 ? this.searchWord = lis[this.isActive].innerHTML : this.searchWord = "";
            },
            //按键盘上键
            selectLiItemUp(){
                if(this.isActive <= -1 && this.searchArr.length>8){
                    this.isActive =8
                }else if(this.isActive <= -1 && this.searchArr.length > 0){
                    this.isActive = this.searchArr.length
                }
                this.isActive --;
                let lis = this.$refs.searchUl.getElementsByTagName('li')
                this.isActive !== -1 ? this.searchWord = lis[this.isActive].innerHTML : this.searchWord="";
            },
            //输入框点击时
            searchClick(){
                this.searchArr.length >0 ? this.historyFlag = true : this.historyFlag =false;
            },
            blurSearch(){
               this.historyFlag=false
            },
            //点击li执行的函数
            clickLi(el){
                this.searchWord  =el.currentTarget.innerHTML;
                this.historyFlag = false
            },
            downDrag(el){
                el.preventDefault();//阻止input失去焦点事件时的影响
            },
            searchTop(arr){
                if(arr.length>0){
                    return arr.slice(0,8)
                }
            },
            clearHistory(){
                this.searchArr = [];
                //this.$store.commit("search/SET_SEARCH_HISTORY",this.searchArr);
                this.historyFlag = false;
            }




        }
    }
</script>

<style scoped lang="stylus">
    .for-search{
        width 600px;
        .searchInput{
            width 440px;
        }
        .searchHistory{
            height auto;
            position absolute
            z-index 3
            margin-left: 54px;
            border 1px solid #dcdfe6
            width 440px;
            ul{
                list-style-type:none
               /* border 1px solid red*/
            }

            .searchLi{
                color #409EFF
                font 14px;
                line-height 22px;
                /*padding 0 0 0 15px;*/
                position relative;
                cursor default;
               /* border 1px solid red*/
                text-align: left;
                margin-left: -40px;
            }
            .searchLi:hover{
                background darkgray
            }
            .search-closeHis{
                text-align:right;
                color:#666
                height 25px
                line-height 25px

                .search-clearStore{
                    margin-right 10px;
                    text-decoration underline
                    cursor pointer
                    font-size 14px
                }
            }
        }

    }

</style>