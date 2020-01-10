<template>
    <div>
        <template>

            <div>
                <el-button>默认按钮</el-button>
                <el-button type="primary">主要按钮</el-button>
                <el-button type="success">成功按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
            </div>

            <div style="margin: 20px 0">
                <el-button plain>朴素按钮</el-button>
                <el-button type="primary" plain>主要按钮</el-button>
                <el-button type="success" plain>成功按钮</el-button>
                <el-button type="info" plain>信息按钮</el-button>
                <el-button type="warning" plain>警告按钮</el-button>
                <el-button type="danger" plain>危险按钮</el-button>
            </div>

            <div>
                <el-button round>圆形按钮</el-button>
                <el-button type="primary" round>主要按钮</el-button>
                <el-button type="success" round>成功按钮</el-button>
                <el-button type="info" round>信息按钮</el-button>
                <el-button type="warning" round>警告按钮</el-button>
                <el-button type="danger" round>危险按钮</el-button>
            </div>

            <el-tabs type="border-card" style="min-width: 1000px">
                <el-tab-pane label="用户管理1">用户管理</el-tab-pane>
                <el-tab-pane label="配置管理1">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理1">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿1">定时任务补偿</el-tab-pane>
            </el-tabs>
           <!-- <el-col :span = "24">

            </el-col>-->

        </template>

        <div class="demo-image__preview">
            <el-image
                    style="width: 100px; height: 100px"
                    :src="url"
                    :preview-src-list="srcList">
            </el-image>
        </div>

    </div>
</template>

<script>


    export default {
        name: "ElTabsTest",

        data() {
            return {
                activeName: 'second',
                input: '',
                url:'',
                srcList:[]
            };
        },
        methods: {

        },
        created() {
            window.console.log("hello")
        }


    }
</script>

<style scoped>

</style>