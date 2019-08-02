<template>
  <div class="success">
    <ShouYinTop />
    <div class="main">
      <div class="left">
        <img src="../assets/66_03.jpg" alt />
      </div>
      <div class="right">
        <span>支付成功</span>
        <div class="line"></div>
        <div class="infor">
          <div class="danhao">
            <p>订单号：12345678912345</p>
            <p>成功支付：￥168.00</p>
          </div>
          <div class="btn">
            <button>继续逛逛</button>
            <button>查看订单</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShouYinTop from "./ShouYinTop";
export default {
  name: "success",
  components: {
    ShouYinTop
  }
};
</script>

<style>
.success {
  width: 1200px;
  margin: 0 auto;

  background-color: #fff;
}
.success .main {
  display: flex;
  padding: 20px 50px;
  align-items: center;
}
.success .main .right {
  margin-left: 30px;
  flex-grow: 1;
}
.success .main .right .line {
  border-bottom: 1px solid #000;
  margin: 10px 0;
}
.success .main .right p {
  margin: 0;
}
.success .main .right .infor {
  display: flex;
  justify-content: space-between;
}
.success .main .right button {
  width: 220px;
  height: 60px;
  background-color: #fdd900;
  border: none;
  margin-left: 10px;
  font-size: 18px;
}
</style>
