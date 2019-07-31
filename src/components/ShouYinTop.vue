<template>
  <div class="shouyin-top">
    <div class="cart">
      <span class="left">收银台</span>
      <div class="right">
        <span>购物车</span>
        <span class="write">填写订单</span>
        <span class="pay">付款，购买成功</span>
      </div>
    </div>
    <img style="display:block" src="../assets/购物车_03.jpg" alt />
  </div>
</template>

<script>
export default {
  name: "shouyin"
};
</script>

<style>
.shouyin-top {
  width: 1200px;
  margin: 0 auto;
}
.shouyin-top .cart {
  background-color: #fdd900;
  padding: 24px 50px;
  display: flex;
  justify-content: space-between;
}
.shouyin-top .cart .left {
  padding: 10px 20px;
  border-left: 5px solid #000;
  font-size: 26px;
}
.shouyin-top .cart .left .num {
  font-size: 22px;
}
.shouyin-top .cart .left .num .jianshu {
  color: #f20000;
}
.shouyin-top .cart .right span {
  border-bottom: 2px solid #000;
  padding-bottom: 10px;
}
.shouyin-top .cart .right .write {
  margin: 20px;
}
.shouyin-top .cart .right .pay {
  border-bottom: 5px solid #000;
}
</style>
