<template>
  <div class="order">
    <OrderTop />
    <div class="address">
      <div class="title">
        <b>收货地址</b>
        <b>
          <span class="jiahao">+</span>新增地址
        </b>
      </div>
      <ul>
        <li>
          <div class="left">
            <div>
              <img src="../assets/6 (1).jpg" alt />
              <span>第嘉</span>
            </div>
            <div>
              <img src="../assets/6 (2).jpg" alt />
              <span>河北省秦皇岛市海港区秦海路84号</span>
            </div>
            <div>
              <img src="../assets/6 (5).jpg" alt />
              <span>186****5149</span>
            </div>
          </div>
          <div class="right">
            <span>设为默认</span>
            <div class="bianji">
              <img src="../assets/6 (3).jpg" alt />
              <span>编辑</span>
            </div>
            <div>
              <img src="../assets/6 (4).jpg" alt />
              <span>删除</span>
            </div>
          </div>
        </li>
        <li>
          <div class="left">
            <div>
              <img src="../assets/6 (1).jpg" alt />
              <span>第嘉</span>
            </div>
            <div>
              <img src="../assets/6 (2).jpg" alt />
              <span>河北省秦皇岛市海港区秦海路84号</span>
            </div>
            <div>
              <img src="../assets/6 (5).jpg" alt />
              <span>186****5149</span>
            </div>
          </div>
          <div class="right">
            <span class="moren">设为默认</span>
            <div class="bianji">
              <img src="../assets/6 (3).jpg" alt />
              <span>编辑</span>
            </div>
            <div>
              <img src="../assets/6 (4).jpg" alt />
              <span>删除</span>
            </div>
          </div>
        </li>
        <li>
          <div class="left">
            <div>
              <img src="../assets/6 (1).jpg" alt />
              <span>第嘉</span>
            </div>
            <div>
              <img src="../assets/6 (2).jpg" alt />
              <span>河北省秦皇岛市海港区秦海路84号</span>
            </div>
            <div>
              <img src="../assets/6 (5).jpg" alt />
              <span>186****5149</span>
            </div>
          </div>
          <div class="right">
            <span>设为默认</span>
            <div class="bianji">
              <img src="../assets/6 (3).jpg" alt />
              <span>编辑</span>
            </div>
            <div>
              <img src="../assets/6 (4).jpg" alt />
              <span>删除</span>
            </div>
          </div>
          <span class="duigou">√</span>
        </li>
      </ul>
      <div class="more">显示更多</div>
    </div>
    <div class="goods">
      <div class="title">
        <b>商品信息</b>
        <span>返回购物车修改</span>
      </div>
      <ul>
        <li>
          <div class="left">
            <img src="../assets/2_03.jpg" alt class="shangpin" />
            <img src="../assets/6_38.jpg" alt />
            <span>龙之谷六周年限定礼包大Boss冰龙款男士T恤</span>
          </div>
          <div class="right">
            <span class="kuanshi">款式：iphone5</span>
            <span>尺码：XL</span>
            <span class="price">￥79.00</span>
            <span>x1</span>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="../assets/2_03.jpg" alt class="shangpin" />
            <span>龙之谷六周年限定礼包大Boss冰龙款男士T恤</span>
          </div>
          <div class="right">
            <span class="kuanshi">款式：iphone5</span>
            <span>尺码：XL</span>
            <span class="price">￥79.00</span>
            <span>x1</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="pay">
      <div class="inner">
        <div class="box">
          <b>支付方式</b>
          <span class="choose">在线支付</span>
          <span class="duigou">√</span>
        </div>
        <div class="box">
          <b>物流方式</b>
          <span class="duigou">√</span>
          <span class="choose">普通快递</span>
        </div>
        <div class="box">
          <b>发票信息</b>
          <div>
            <span class="fapiao">不开发票</span>
            <span class="choose">开发票</span>
            <input type="text" placeholder="请输入个人/单位名称" />
            <span class="duigou">√</span>
            <span class="baocun">保存</span>
          </div>
        </div>
      </div>
    </div>
    <div class="money">
      <div class="title">
        <span>数量</span>
        <span>单价</span>
        <span>小计</span>
        <span>优惠</span>
        <span>运费</span>
        <span>实际应付</span>
      </div>
      <div class="num">
        <span>2</span>
        <span>x</span>
        <span>￥79.00</span>
        <span>=</span>
        <span>￥158.00</span>
        <span>-</span>
        <span>￥0.00</span>
        <span>+</span>
        <span>￥10.00</span>
        <span>=</span>
        <span class="total">￥168.00</span>
      </div>
      <button>
        <router-link to="/shouyin">提交订单</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import OrderTop from "../components/OrderTop";
export default {
  name: "writeorder",
  components: {
    OrderTop
  }
};
</script>

<style>
.order {
  background-image: url("../assets/cart2_02.jpg");
}
.order .address,
.order .goods,
.order .pay,
.order .money {
  width: 1200px;
  margin: 0 auto;
  padding: 15px 50px;
  background-color: #fff;
}
.order .address .title,
.order .goods .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #2b2e33;
}
.order .goods .title span {
  font-size: 12px;
}
.order .address .title b {
  display: flex;
  font-size: 14px;
}
.order .address .title .jiahao {
  display: block;
  width: 18px;
  height: 18px;
  line-height: 18px;
  border: 1px solid #000;
  text-align: center;
  margin-right: 10px;
}
.order .address ul li {
  padding: 20px 24px;
  justify-content: space-between;
  display: flex;
  border-bottom: 1px solid #d1d7e3;
}
.order .address ul li .left > div {
  margin-bottom: 5px;
}
.order .address ul li .left > div img {
  margin-right: 6px;
}
.order .address ul li .right {
  display: flex;
  align-items: center;
}
.order .address ul li .right .bianji {
  align-items: center;
  margin: 0 48px;
}
.order .address ul li .right > div {
  align-items: center;
  text-align: center;
}
.order .address ul li .right > div img {
  margin-right: 6px;
}
.order .address ul li .right .moren {
  display: block;
  width: 96px;
  height: 36px;
  color: #fff;
  background-color: #2b2e33;
  text-align: center;
  line-height: 36px;
}
.order .address ul li:nth-child(3) {
  border: 3px solid #fdd900;
  position: relative;
}
.order .address ul li .duigou {
  display: block;
  width: 16px;
  height: 16px;
  color: #fff;
  background-color: #fdd900;
  position: absolute;
  left: 0;
  bottom: 0;
}
.order .address .more {
  background-image: url("../assets/cart1_07.jpg");
  margin-top: 20px;
  height: 63px;
  text-align: center;
  line-height: 63px;
  font-weight: 800;
}
.order .goods ul li {
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d1d7e3;
  color: #82858a;
}
.order .goods ul li img {
  margin-right: 20px;
}
.order .goods ul li .shangpin {
  width: 66px;
  height: 66px;
  margin-right: 10px;
}
.order .goods ul li .kuanshi {
  margin: 0 30px 0 150px;
}
.order .goods ul li .price {
  padding: 0 56px 0 98px;
}
.order .goods ul li .left {
  display: flex;
  align-items: center;
}
.order .goods ul {
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
}
.order .pay .inner {
  padding-bottom: 30px;
  justify-content: space-between;
  display: flex;
  border-bottom: 2px solid #babec9;
}
.order .pay .box {
  display: flex;
  align-items: center;
  position: relative;
  font-size: 14px;
}
.order .pay .box b {
  margin-right: 22px;
}
.order .pay .box > div {
  align-items: center;
  display: flex;
}
.order .pay .box > div span {
  padding: 0 5px;
}
.order .pay .box .choose {
  display: block;
  width: 132px;
  height: 46px;
  border: 3px solid #fdd900;
  text-align: center;
  line-height: 46px;
  align-items: center;
}
.order .pay .box .fapiao {
  display: block;
  width: 100px;
  height: 46px;
  border: 3px solid #babec9;
  text-align: center;
  line-height: 46px;
  align-items: center;
  margin-right: 10px;
}
.order .pay .box .duigou {
  display: block;
  width: 16px;
  height: 16px;
  color: #fff;
  background-color: #fdd900;
  position: absolute;
  left: 81px;
  bottom: 3px;
}
.order .pay .box:nth-child(3) .duigou {
  left: 190px;
}
.order .pay .box:nth-child(3) .choose {
  margin-right: 10px;
  width: 100px;
}
.order .money .title {
  justify-content: space-between;
  display: flex;
  font-size: 12px;
  border-bottom: 2px solid #000;
  padding: 0 30px 10px 10px;
}
.order .money .title span,
.order .money .num span {
  display: block;
  width: 60px;
  height: 14px;
  text-align: center;
}
.order .money .num {
  padding-top: 10px;
  justify-content: space-between;
  display: flex;
  font-size: 12px;
  align-items: center;
}
.order .money .num .total {
  color: #ef0101;
  font-size: 24px;
  width: 100px;
  height: 27px;
}
.order .money button {
  width: 220px;
  height: 60px;
  background-color: #fdd900;
  border: none;
  font-size: 16px;
  margin: 50px 0 88px 880px;
}
.order .money a {
  color: #000;
  outline: none;
}
</style>
