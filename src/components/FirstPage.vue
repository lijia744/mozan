<template>
  <div class="firstpage">
    <Lunbo />
    <Sale />
    <Jieshao />
  </div>
</template>

<script>
import Lunbo from "./Lunbo";
import Sale from "./Sale";
import Jieshao from "./Jieshao";
export default {
  name: "firstpage",
  components: {
    Lunbo,
    Sale,
    Jieshao
  }
};
</script>

<style>
</style>
