<template>
  <div>
    <input type="button" value="减少" @click="remove">
    <input type="button" value="增加" @click="add">
    <br>
    <input type="text" v-model="$store.state.count">
    <h3>{{ $store.getters.optCount }}</h3>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // count: 0
    };
  },
  methods: {
    add() {
      // this.$store.state.count++;  // 注意：不要这么用，不符合 vuex 的设计理念
      this.$store.commit("increment");
    },
    remove() {
      this.$store.commit("subtract", { c: 1, d: 1 });
    }
  },
  computed:{
  }
};
</script>

<style scoped>

</style>
