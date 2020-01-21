<template>
    <div class="sectionSet">
        <div>
            <h3>
                我是SectionSet,我在下面使用了 &lt;slot &gt;&lt; /slot&gt;
            </h3>
        </div>
        <div class="sectionHeader">
            <h3>{{title}}</h3>
        </div>
        <div class="sectionInfo">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SectionSet",
        props:{
            title:{
                required:true,
                default(){return ''}
            }
        },
        data(){
            return{}
        }
    }
</script>

<style scoped lang="stylus">
    .sectionSet{
        border:1px solid green;
        margin 20px
        .sectionHeader{
            width 1300px
            margin 0 auto
            h3{
                text-align center
            }
        }
        .sectionInfo{
            width: 1300px;
            margin:0 auto;
        }
    }

</style>