<template>
  <div id="app" class="app appMain">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <!--<el-tabs-test></el-tabs-test>-->
   <!-- <transform-test></transform-test>-->
    <!--<el-container>

      <el-aside width="220px" style="background-color: rgb(238, 241, 246)">
        <com-index>
        </com-index>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>-->
    <div class="appContent">
      <div class="appLeft">
        <com-index>
        </com-index>
      </div>
      <div class="appRight">
        <!--<router-view></router-view>-->
        <!--<keep-alive :include="keepComName">
          <router-view></router-view>
        </keep-alive>-->

        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </div>

    </div>

  </div>
</template>

<script>
/*import ElTabsTest from './components/ElTabsTest.vue';*/
import ComIndex from './components/ComIndex.vue';
/*import TransformTest from './components/transformTest.vue';*/

export default {
  name: 'app',
  components: {
    ComIndex
  },
  created() {
    console.log("router===",this.$router)
  },
  data(){
    return{
      keepComName:'KeepAliveTest'
    }
  }
}
</script>

<style scoped lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .appMain{
    overflow-y auto;
    height 100%
    width 100%
    position relative
  }
  .appContent{
    display: flex ;
    .appLeft{
      width: 300px;
    }
    .appRight{
      flex:1;
    }
  }
</style>
