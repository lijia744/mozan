<template>
  <div class="mozan">
    <Logo />
    <router-view></router-view>
    <Information />
    <Copyright />
  </div>
</template>

<script>
import Logo from "./components/Logo";

import Information from "./components/Information";
import Copyright from "./components/Copyright";
export default {
  name: "app",
  components: {
    Logo,
    Information,
    Copyright
  }
};
</script>

<style>
.mozan {
  width: 100%;
  height: 100%;
  background-image: url("./assets/3_02.jpg");
  background-size: cover;
}

</style>
