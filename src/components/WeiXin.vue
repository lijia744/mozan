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
      <div class="saoma">
        <span class="text">微信支付</span>
        <div class="erwei">
          <p>
            距离二维码过期还剩
            <span class="time">42</span>秒过期后请刷新页面重新获取二维码
          </p>
          <img src="../assets/99_06.jpg" alt />
          <span class="zhifu">请使用微信扫一扫扫描二维码支付!</span>
        </div>
        <img src="../assets/99_03.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import ShouYinTop from "./ShouYinTop";
export default {
  name: "weixin",
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
  border-bottom: 2px solid #2b2e33;
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
.shouyin .inner .saoma {
  padding-top: 20px;
  display: flex;
  margin-bottom: 150px;
}
.shouyin .inner .saoma .text {
  font-size: 20px;
  margin-right: 143px;
}
.shouyin .inner .saoma p {
  margin: 0 0 10px 0;
}
.shouyin .inner .saoma .time {
  color: #f42628;
}
.shouyin .inner .saoma .erwei {
  width: 234px;
  margin-right: 150px;
  text-align: center;
}
.shouyin .inner .saoma .erwei .zhifu {
  display: block;
  width: 234px;
  height: 60px;
  background-color: #fdd900;
  padding: 10px 50px;
}
</style>
