<template>
    <div>

        <index-menu></index-menu>

        <!--<my-tree></my-tree>
        <tree-test></tree-test>
        <search></search>-->

    </div>
</template>

<script>
    import MyTree from "./MyTree/MyTree";
    import TreeTest from "./MyTree/TreeTest";
    import search from "./search/search";
    import IndexMenu from "./index-menu";
    export default {
        name: "ComIndex",
        components: {IndexMenu},
      /*  comments:{MyTree}   components: {MyTree,TreeTest,search,IndexMenu},*/
    }
</script>

<style scoped>

</style>

