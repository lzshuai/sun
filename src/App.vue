<template>
  <div id="app" class="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <!--<el-tabs-test></el-tabs-test>-->
   <!-- <transform-test></transform-test>-->
    <el-container>
      <el-aside width="220px" style="background-color: rgb(238, 241, 246)">
        <com-index>
        </com-index>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>

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
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
