<template>
    <div class="tree">

        <el-tree
                :data="data3"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5,2,7]">
        </el-tree>
    </div>

</template>

<script>
    export default {
        name: "TreeTest",
        data() {
            return {
                data3: [{
                    id: 1,
                    label: '一级 2',
                    children: [{
                        id: 3,
                        label: '二级 2-1',
                        children: [{
                            id: 4,
                            label: '三级 3-1-1'
                        }, {
                            id: 5,
                            label: '三级 3-1-2',
                            disabled: true
                        }]
                    }, {
                        id: 2,
                        label: '二级 2-2',
                        disabled: true,
                        children: [{
                            id: 6,
                            label: '三级 3-2-1'
                        }, {
                            id: 7,
                            label: '三级 3-2-2',
                            disabled: true
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        }
    }
</script>
s
<style scoped>

</style>
<style lang="stylus" >

    .tree{

        .el-checkbox .is-checked .el-checkbox__inner{
            background-color: greenyellow !important;
            border: #43a6ff;
        }
        .el-checkbox .is-disabled.is-checked .el-checkbox__inner{
            background-color: #4c5e7b !important;
            border: #43a6ff;
        }

        .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
            background-color: red ;
            border-color: #409EFF;
        }

    }

</style>