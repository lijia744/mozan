<template>
  <div class="carttop">
    <div class="cart">
      <span class="left">
        购物车
        <span class="num">
          [
          <span class="jianshu">{{this.$store.state.carts.length}}</span>件]
        </span>
      </span>
      <div class="right">
        <span>购物车</span>
        <span class="write">填写订单</span>
        <span>付款，购买成功</span>
      </div>
    </div>
    <img style="display:block" src="../assets/购物车_03.jpg" alt />
  </div>
</template>

<script>
export default {
  name: "carttop"
};
</script>

<style>
.carttop .cart {
  background-color: #fdd900;
  padding: 24px 50px;
  display: flex;
  justify-content: space-between;
}
.carttop .cart .left {
  padding: 10px 20px;
  border-left: 5px solid #000;
  font-size: 26px;
}
.carttop .cart .left .num {
  font-size: 22px;
}
.carttop .cart .left .num .jianshu {
  color: #f20000;
}
.carttop .cart .right span {
  border-bottom: 2px solid #000;
  padding-bottom: 10px;
}
.carttop .cart .right span:nth-child(1) {
  border-bottom: 5px solid #000;
}
.carttop .cart .right .write {
  margin: 20px;
}
</style>
