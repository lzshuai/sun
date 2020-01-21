<template>

    <div style="width:1300px;height: 600px;border: 1px solid red;margin:0 auto">
        <div class="circel">
        </div>
        <div class="unCircel">
        </div>
    </div>

</template>

<script>
    export default {
        name: "CirCelAnimation"
    }
</script>

<style scoped lang="stylus">
    .circel{
        width 100px;
        height 100px;
        background url(../../assets/images/circel.png) no-repeat
        background-size cover
        animation goCircel 2s linear infinite
       /* position absolute*/

    }
    .unCircel{
        width 100px;
        height 100px;
        background url(../../assets/images/circel.png) no-repeat
        background-size cover
        animation unCircel 2s linear infinite
        /*position absolute*/
    }

    @keyframes goCircel{
        0%{
            transform rotate(0deg)
        }
        100%{
            transform rotate(360deg)
        }
    }

    @keyframes unCircel{
        0%{
            transform rotate(360deg)
        }
        100%{
            transform rotate(0deg)
        }
    }

</style>