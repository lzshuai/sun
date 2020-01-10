<template>
    <div class="my-tree-main">
        <el-tree ref="myTree" :data="treeData"
                 :props="defaultProps"
                 :render-content="renderContent">

        </el-tree>
    </div>
</template>

<script>
    export default {
        name: "MyTree",
        data(){
            return{
                treeData:[
                    {
                        id:"1",
                        name:"schoolDb",
                        type:"category",
                        children:[
                            {id:"1-1", name:"user_t", type:'rain'},
                            {id:"1-2", name:"class_t", type:'rain'},
                            {id:"1-3", name:"grade_t", type:'rain'},
                        ]
                    }
                ],
                defaultProps:{ //el-tree 树结构默认渲染的字段
                    children:'children',
                    label:"name"
                },
                renderContent:function (h,{node,data,store}) {
                    let addElement = arguments[0];
                    if(data.type === 'rain'){
                        return addElement('span',[
                            addElement('i',{class:"el-icon-heavy-rain"}),
                            addElement('span',"    "),
                            addElement('span',arguments[1].node.label)
                        ]);
                    }else{
                        return addElement('span',[
                            addElement('i',{class:"el-icon-sunny"}),
                            addElement('span',"    "),
                            addElement('span',arguments[1].node.label)
                        ]);
                    }
                }

            }
        }
    }
</script>

<style scoped>

</style>