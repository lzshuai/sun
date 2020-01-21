<template>
    <div :class="defaultClass">
        <slot></slot>
    </div>
</template>

<script>
    import {throttle} from 'lodash'
    export default {
        name: "ScrollSet",
        props:{
            currentBlock:{
                required:false,
                type:String
            },
            attributeType:{//id或者class，也可以是自定义的属性
                required:false,
                default(){
                    return 'id'
                },
            },
            //滚动条所在容器的选择器
            container:{
                default() {
                    return ".main";
                }
            },
            defaultClass:{
                type:String,
                default(){
                    return 'scrollSet'
                }
            }
        },
        data(){
            return{
                intoViewTop:120,
                currentBlockId:this.currentBlock,
                containerTarget:null
            }
        },
        provide:{
            scrollContainer:this
        },
        mounted() {
            this.containerDom().addEventListener('scroll',this.scrolling)
        },
        beforeDestroy() {
            this.containerDom().removeEventListener('scroll',this.scroll)
            this.containerTarget =null
        },
        methods:{
            scrolling:throttle(function (e){
                let target = e.target
                let currentPositionCate = null

                //判断是否滚动到底部
                if((target.offsetHeight + target.scrollTop) >= (target.scrollHeight-10)){
                    currentPositionCate = this.$slots.default.slice(-1)[0].elm
                }else{
                    this.$slots.default.forEach(vnode =>{
                        let searchDiv = vnode.elm
                        let top = searchDiv.offsetTop - target.scrollTop
                        searchDiv.positionTop = top
                        if(top < this.intoViewTop){
                            currentPositionCate = currentPositionCate=== null ? searchDiv:(searchDiv.positionTop > currentPositionCate.positionTop ? searchDiv : currentPositionCate)
                        }
                    })
                }
                let blockId = ''
                if(currentPositionCate){
                    blockId = currentPositionCate.getAttribute(this.attributeType)
                }
                if(blockId && (blockId !== this.currentBlockId)){
                    this.currentBlockId = blockId
                    this.$emit('currentChange',this.currentBlockId)
                }
            },200),
            scrollTo(blockKey){},
            containerDom(){
                if(this.containerTarget){
                    return this.containerTarget
                }else{
                    let target =document.querySelector(this.container)
                    if(Array.isArray(target)){
                        target = target[0]
                    }
                    this.containerTarget = target
                    return target
                }
            }
        },
        watch:{
            'currentBlock':function (nv,ov) {
                this.scrollTo(nv)
            }
        }

    }
</script>

<style scoped>
    .scrollSet{}
</style>