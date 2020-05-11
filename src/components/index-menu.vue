<template>

    <div class="id-menu">

        <!--  <el-row class="tac">
          <el-col :span="12">
                <h5>默认颜色</h5>
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                </el-menu>
            </el-col>-->
           <!-- <el-col :span="12">
                &lt;!&ndash;<h5>自定义颜色</h5>&ndash;&gt;
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                </el-menu>
            </el-col
        </el-row>>-->
        <el-menu :default-openeds="['1', '3']" @open="handleOpen"  @select="handleSelect">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>导航一</template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="view">view</el-menu-item>
                    <el-menu-item index="search">搜索</el-menu-item>
                    <el-menu-item index="vuexTest">vuexTest</el-menu-item>
                    <el-menu-item index="debounce">debounceTest</el-menu-item>
                    <el-menu-item index="localDebounce">localDebounce</el-menu-item>
                    <el-menu-item index="axiosTest">axiosTest</el-menu-item>
                    <el-menu-item index="picTest">picTest</el-menu-item>
                    <el-menu-item index="keepAliveTest">keepAliveTest</el-menu-item>
                    <el-menu-item index="iconTest">iconTest</el-menu-item>
                    <el-menu-item index="slotTest">SlotTest</el-menu-item>
                    <el-menu-item index="tabTest">tabTest</el-menu-item>
                    <el-menu-item index="indexHome">indexHome</el-menu-item>
                    <el-menu-item index="indexPage">indexPage</el-menu-item>
                    <el-menu-item index="stops">stop</el-menu-item>
                    <el-menu-item index="circelTest">circelTest</el-menu-item>
                </el-menu-item-group>
              <!--  <el-submenu >
                    <template slot="title">事件修饰符</template>
                    <el-menu-item index="stops">stop</el-menu-item>
                </el-submenu>-->
                <!--<el-menu-item-group title="分组2">
                    <el-menu-item index="transformTest">穿梭框</el-menu-item>
                </el-menu-item-group>-->
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="treeTest">Tree</el-menu-item>
                    <el-menu-item index="treeTest2">Tree2</el-menu-item>
                    <el-menu-item index="treeTest3">Tree3</el-menu-item>
                    <el-menu-item index="treeTest4">Tree4</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="search" >搜索</el-menu-item>
                    <el-menu-item index="treeScroll">treeScroll</el-menu-item>
                    <el-menu-item index="treeScroll2">treeScroll2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="3-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="3-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
    </div>

</template>

<script>
    export default {
        name: "index-menu",
        methods: {
            handleOpen(key, keyPath) {

                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                console.log("key===",key);
                this.$router.push({name:key})
               /* if(key==='search'){

                }*/
            }
        }
    }
</script>

<style scoped lang="stylus">

    .id-menu{
//width:100%
       // width:220px;

    }
</style>
