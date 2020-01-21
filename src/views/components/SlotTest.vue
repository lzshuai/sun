<template>
    <div style="border:1px solid red;width: 100%;height: 400px; ">
        <div>
            <h3>我是SlotTest组件，我在下面调用了 SectionSet组件</h3>
            <section-set title="应用中心" >
                <div>
                    使用slot占个坑
                </div>
            </section-set>
        </div>

    </div>
</template>

<script>
    import SectionSet from "../../components/slots/SectionSet";
    export default {
        name: "SlotTest",
        components:{SectionSet}
    }
</script>

<style scoped>

</style>