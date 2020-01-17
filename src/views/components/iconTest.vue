<template>
    <div>
        引用iconfont的图标
        <br>
        <br>
        <i class="iconfont icon-leibie1" icon-sel></i>
        <br>
        <i class="iconfont icon-yezi-copy  icon-sel"></i>

        <br>
        <svg class="icon myIcon" aria-hidden="true">
            <use xlink:href="#icon-yezi-copy "></use>
        </svg>
        <br>
        <svg class="icon myIcon" aria-hidden="true">
            <use xlink:href="#icon-yezi "></use>
        </svg>
        <br>
        <i class="iconfont icon-leibie2 icon-sel"></i>
        <br>
        <svg class="icon myIcon" aria-hidden="true">
            <use xlink:href="#icon-leibie2 "></use>
        </svg>

    </div>
</template>


<script >

    import '../../assets/icons/iconfont/iconfont.js'
    export default {
        name: "iconTest"
    }
</script>

<style scoped>

    .icon-sel{
       font-size: 30px;
    }
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    .myIcon{
        font-size: 30px;
    }

</style>