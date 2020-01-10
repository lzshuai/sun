<template>
    <div class="tree-scroll">
        <el-input style="width: 180px;margin-top: 10px"
                placeholder="输入关键字进行过滤"
                v-model="filterText">
        </el-input>

        <el-tree
                class="flow-tree"
                :data="data2"
                :props="defaultProps"
                default-expand-all
                :filter-node-method="filterNode"
                ref="tree2">
        </el-tree>

    </div>
</template>

<script>
    export default {
        name: "TreeScroll",
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val);
            }
        },

        methods: {
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            }
        },

        data() {
            return {
                filterText: '',
                data2: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2滚动条滚动条二级 3-2滚动条滚动条'
                    }]
                }, {
                    id: 4,
                    label: '一级 4',
                    children: [{
                        id: 71,
                        label: '二级 4-1'
                    }, {
                        id: 81,
                        label: '二级 4-2滚动条滚动条二级 3-2滚动条滚动条'
                    }]
                }, {
                    id: 5,
                    label: '一级 5',
                    children: [{
                        id: 711,
                        label: '二级 5-1'
                    }, {
                        id: 811,
                        label: '二级 5-2滚动条滚动条二级 3-2滚动条滚动条'
                    }]
                }, {
                    id: 6,
                    label: '一级 6',
                    children: [{
                        id: 7116,
                        label: '二级 5-1'
                    }, {
                        id: 8116,
                        label: '二级 5-2滚动条滚动条二级 3-2滚动条滚动条'
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

<style scoped lang="stylus">
    .tree-scroll{
        width 200px
        border 1px solid #E7E7E7
        height 100%
    }

    .flow-tree{
        overflow auto;
        /*flex 1*/
        height 300px
        margin  10px
        >>>.el-tree-node{
            > .el-tree-node__children{
                overflow visible !important
            }
        }

        >>> .el-tree-node__expand-icon{
            position :absolute;
            right 2%
        }
        >>> .el-tree-node__label{
            padding-left 15px;
        }
    }
</style>
<style>
    ::-webkit-scrollbar{
        width: 5px;
        height: 5px;
    }
    ::-webkit-scrollbar-track-piece{
        background-color: rgba(0,0,0,0.2);
        -webkit-border-radius: 7px;
    }

    ::-webkit-scrollbar-thumb:vertical{
        height: 5px;
        background-color: rgba(125,125,125,0.7);
        -webkit-border-radius: 7px;
    }
    ::-webkit-scrollbar-thumb:horizontal{
        width: 7px;
        background-color: rgba(125,125,125,0.7);
        -webkit-border-radius: 7px;
    }

</style>