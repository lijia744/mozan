<template>
  <div class="shouyin">
    <ShouYinTop />
    <div class="inner">
      <div class="title">
        <div class="left">
          <h4>订单提交成功，请您尽快付款！</h4>
          <span>
            请您在提交订单后
            <span class="time">24小时</span>内完成支付，否则订单会自动取消。
          </span>
        </div>
        <div class="right">
          <span>
            应付金额：
            <span class="money">￥168.00</span>
          </span>
        </div>
      </div>
      <div class="danhao">
        <div class="left">
          <h4>订单号：12345678912345</h4>
        </div>
        <div class="right">
          <div class="top">
            <img src="../assets/6 (1).jpg" alt />
            <span class="name">第嘉</span>
            <img src="../assets/6 (5).jpg" alt />
            <span>186****5149</span>
          </div>
          <div>
            <img src="../assets/6 (2).jpg" alt />
            <span>河北省秦皇岛市海港区秦海路84号</span>
          </div>
        </div>
      </div>
      <div class="fangshi">
        <h4>选择支付方式</h4>
        <img src="../assets/9_03.jpg" alt class="weixin" />
        <img src="../assets/9_05.jpg" alt />
        <img src="../assets/9_07.jpg" alt />
        <img src="../assets/9_09.jpg" alt />
      </div>
      <button>
        <router-link to="/mozan/weixin">付款</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import ShouYinTop from "./ShouYinTop";
export default {
  name: "shouyin",
  components: {
    ShouYinTop
  }
};
</script>

<style>
.shouyin {
  background-image: url("../assets/cart2_02.jpg");
}
.shouyin .inner {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  padding: 10px 50px;
}
.shouyin .inner .title {
  padding-bottom: 20px;
  border-bottom: 2px solid #2b2e33;
  display: flex;
  justify-content: space-between;
}
.shouyin .inner .title h4 {
  margin: 0 0 5px 0;
}
.shouyin .inner .title span {
  font-size: 14px;
}
.shouyin .inner .title .right {
  padding-top: 20px;
}
.shouyin .inner .title .time,
.shouyin .inner .title .money {
  color: #f42628;
}
.shouyin .inner .title .money {
  font-size: 20px;
}
.shouyin .inner .danhao {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  align-items: center;
  border-bottom: 1px solid #babec9;
}
.shouyin .inner .danhao .right .top {
  padding-left: 64px;
}
.shouyin .inner .danhao .right img {
  margin-right: 5px;
}
.shouyin .inner .danhao .right .name {
  margin-right: 30px;
}
.shouyin .inner .fangshi {
  align-items: center;
  padding: 10px 0;
  border-bottom: 2px solid #2b2e33;
  display: flex;
}
.shouyin .inner .fangshi h4,
.shouyin .inner .fangshi img {
  margin-right: 10px;
}
.shouyin .inner .fangshi img {
  border: 1px solid #ccc;
}
.shouyin .inner .fangshi .weixin {
  border: none;
}
.shouyin .inner button {
  width: 220px;
  height: 60px;
  background-color: #fdd900;
  border: none;
  font-size: 20px;
  margin: 50px 0 88px 880px;
}
.shouyin .inner a {
  color: #000;
  outline: none;
}
</style>
