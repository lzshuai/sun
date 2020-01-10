<template>
    <div class="tree">

        <el-tree
                :data="data3"
                show-checkbox
                node-key="id"
                :check-on-click-node="checkNodeFlag"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5,2,7]">
        </el-tree>

        <!-- check-on-click-node 可以让复选框连续点击的效果-->
    </div>

</template>

<script>
    export default {
        name: "TreeTest2",
        data() {
            return {
                checkNodeFlag:false,
                data3: [{
                    id: 1,
                    label: '一级 2',
                    children: [{
                        id: 3,
                        label: '二级 2-1',
                    }, {
                        id: 2,
                        label: '二级 2-2',
                    },
                    {id: 4, label: '2级 4',},
                    {id: 5, label: '2级 5',},
                    {id: 6, label: '2级 6',},
                    {id: 7, label: '2级 7',},
                    {id: 8, label: '2级 8',},
                    {id: 9, label: '2级 9',},
                    {id: 10, label: '2级 10',},
                    {id: 11, label: '2级 11',},
                    {id: 12, label: '2级 12',},
                    {id: 13, label: '2级 13',},
                    {id: 14, label: '2级 14',},
                    {id: 15, label: '2级 15',},
                    {id: 16, label: '2级 16',},
                    {id: 17, label: '2级 17',},
                    {id: 18, label: '2级 18',},


                    ]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        }
    }
</script>

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