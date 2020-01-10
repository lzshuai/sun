<template>
    <div class="tree3">
        <span>设置多选复选框为不可编辑，只要选中就不可编辑</span>
        <div style="margin-left: 600px;width:100%">
            <el-tree
                    :data="data3"
                    ref="tree"
                    show-checkbox
                    node-key="id"
                    :check-on-click-node="checkNodeFlag"
                    :default-expanded-keys="[2, 3]"

                    @check-change="handleCheckChageFun"
                    @check="handleCheckFun"
            >
            </el-tree>
        </div>

        <!--  :default-checked-keys="defaultCheckedKeys" -->
    </div>

</template>

<script>
    export default {
        name: "TreeTest3",
        data() {
            return {
                checkNodeFlag:false,
                currNodeId:'',//当前选中nodeId
                defaultCheckedKeys:[],
                data3: [{
                    id: 1,
                    label: '一级 2',
                    disabled:false,
                    children: [{
                        id: 3,
                        label: '二级 2-1',disabled:false
                    }, {
                        id: 2,
                        label: '二级 2-2',
                        disabled:false
                    },
                    {id: 4, label: '2级 4',disabled:false},
                    {id: 5, label: '2级 5',disabled:false},
                    {id: 6, label: '2级 6',disabled:false},
                    {id: 7, label: '2级 7',disabled:false},
                    {id: 8, label: '2级 8',disabled:false},
                    {id: 9, label: '2级 9',disabled:false},
                    {id: 10, label: '2级 10',disabled:false},
                    {id: 11, label: '2级 11',disabled:false},
                    {id: 12, label: '2级 12',disabled:false},
                    {id: 13, label: '2级 13',disabled:false},
                    {id: 14, label: '2级 14',disabled:false},
                    {id: 15, label: '2级 15',disabled:false},
                    {id: 16, label: '2级 16',disabled:false},
                    {id: 17, label: '2级 17',disabled:false},
                    {id: 18, label: '2级 18',disabled:false},

                    ]
                }],
                disableData:this.data3,
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods:{
            handleCheckChageFun(currNode){
                console.log("hanleCheckChageFun---");
            },
            handleCheckFun(currNode){
                this.currNodeId = currNode.id;
                this.defaultCheckedKeys= null
                this.dealTreeOnceChecked(this.data3)
            },
            dealTreeOnceChecked(arrMenus){
                arrMenus === undefined ?  arrMenus=[]:''
                if(arrMenus.length > 0){
                    //let disarr = [];
                    arrMenus.forEach(item => {
                        let arrChildren = item.children
                        if(arrChildren  !== null) this.dealTreeOnceChecked(arrChildren)
                        item.id === this.currNodeId ?  item.disabled = true :'';

                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>
<style lang="stylus" >

</style>