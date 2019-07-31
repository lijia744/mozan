<template>
  <div class="logo">
    <div class="inner">
      <div class="left">
        <img src="../assets/商品详情页_全额预售_03.jpg" alt />
      </div>
      <div class="center">
        <img src="../assets/573705995429784301.png" alt />
      </div>
      <div class="right">
        <img src="../assets/341196301563881710.jpg" alt />
        <img src="../assets/699313727276410261.jpg" alt />
        <div class="text">
          <span class="land">登陆</span>
          <span class="line">/</span>
          <span class="zhuce">注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "logo"
};
</script>

<style>
.logo {
  background-color: #2b2e33;
}
.logo .inner {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding: 13px 38px 13px 56px;
}
.logo .inner .left img {
  width: 44px;
  height: 25px;
}
.logo .inner .center img {
  width: 190px;
  height: 61px;
}
.logo .inner .right {
  width: 244px;
  display: flex;
  justify-content: space-between;
  color: #585b60;
  align-items: center;
}
.logo .inner .right img {
  width: 28px;
  height: 36px;
}
.logo .inner .right .text .line {
  padding: 0 4px;
}
.logo .inner .right .text .land,
.logo .inner .right .text .zhuce {
  cursor: pointer;
}
</style>
