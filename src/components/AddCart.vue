<template>
  <div class="addcart">
    <div class="cart">
      <span class="left">已成功加入购物车</span>
    </div>
    <img style="display:block" src="../assets/购物车_03.jpg" alt />
    <div class="inner">
      <div class="center">
        <img src="../assets/2_03.jpg" alt />
        <span class="title">龙之谷六周年限定礼包大Boss冰龙款男士T恤</span>
        <div class="xiangqing">
          <div class="dec">
            <p>款式：iphone 5</p>
            <p>尺码：XL</p>
            <p>数量：x1</p>
          </div>
          <div class="btn">
            <button class="return">
              <router-link to="/mozan">返回</router-link>
            </button>
            <button>
              <router-link to="/mozan/shoppingcart">去购物车结算</router-link>
            </button>
          </div>
        </div>
      </div>
      <div class="else">
        <div class="title">
          <span>您可能还需要</span>
          <div class="line"></div>
        </div>
        <div class="pic">
          <div class="show">
            <img src="../assets/2_07.jpg" alt />
            <div class="text">
              <p>龙之谷六周年限定礼包大Boss冰龙款男士T恤</p>
              <div class="price">
                <span>￥88.00</span>
                <img src="../assets/1_74.jpg" alt />
              </div>
            </div>
          </div>
          <div class="show">
            <img src="../assets/2_07.jpg" alt />
            <div class="text">
              <p>龙之谷六周年限定礼包大Boss冰龙款男士T恤</p>
              <div class="price">
                <span>￥88.00</span>
                <img src="../assets/1_74.jpg" alt />
              </div>
            </div>
          </div>
          <div class="show">
            <img src="../assets/2_07.jpg" alt />
            <div class="text">
              <p>龙之谷六周年限定礼包大Boss冰龙款男士T恤</p>
              <div class="price">
                <span>￥88.00</span>
                <img src="../assets/1_74.jpg" alt />
              </div>
            </div>
          </div>
          <div class="show">
            <img src="../assets/2_07.jpg" alt />
            <div class="text">
              <p>龙之谷六周年限定礼包大Boss冰龙款男士T恤</p>
              <div class="price">
                <span>￥88.00</span>
                <img src="../assets/1_74.jpg" alt />
              </div>
            </div>
          </div>
          <div class="show">
            <img src="../assets/2_07.jpg" alt />
            <div class="text">
              <p>龙之谷六周年限定礼包大Boss冰龙款男士T恤</p>
              <div class="price">
                <span>￥88.00</span>
                <img src="../assets/1_74.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addcart"
};
</script>

<style>
.addcart {
  width: 1200px;
  margin: 0 auto;
  font-size: 14px;
  background-color: #fff;
}
.addcart .cart {
  background-color: #fdd900;
  padding: 24px 50px;
  display: flex;
  justify-content: space-between;
}
.addcart .cart .left {
  padding-left: 20px;
  border-left: 5px solid #000;
  font-size: 26px;
}
.addcart .inner {
  padding: 22px 50px 122px;
}
.addcart .inner .center {
  padding: 10px;
  border-top: 2px solid #b8beca;
  border-bottom: 2px solid #b8beca;
  display: flex;
  align-items: center;
  margin-bottom: 80px;
}
.addcart .inner .center img {
  width: 96px;
  height: 96px;
}
.addcart .inner .center .title {
  font-size: 16px;
  width: 238px;
  border-right: 2px solid #fdd900;
  padding: 10px 20px 10px 10px;
}
.addcart .inner .center .xiangqing {
  width: 714px;
  display: flex;
  justify-content: space-between;
}
.addcart .inner .center .xiangqing p {
  margin: 0 0 0 21px;
  color: #6f7277;
}
.addcart .inner .center .xiangqing button {
  border: none;
  width: 210px;
  height: 46px;
  background-color: #fdd900;
  outline: none;
}
.addcart .inner .center .xiangqing button a {
  color: #000;
}
.addcart .inner .center .xiangqing .return {
  width: 132px;
  background-color: #2b2e33;
  color: #fff;
  margin-right: 10px;
}
.addcart .inner .center .xiangqing .return a {
  color: #fff;
}
.addcart .inner .else .title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.addcart .inner .else .title .line {
  width: 1008px;
  border-bottom: 2px solid #fdd900;
}
.addcart .inner .else .pic {
  display: flex;
  justify-content: space-between;
}
.addcart .inner .else .pic .show {
  border: 1px solid #d1d7e3;
  width: 196px;
}
.addcart .inner .else .pic .show img {
  width: 195px;
  height: 196px;
}
.addcart .inner .else .pic .show .text {
  padding: 10px;
}
.addcart .inner .else .pic .show .text p {
  margin: 0 0 48px 0;
}
.addcart .inner .else .pic .show .text img {
  width: 66px;
  height: 25px;
}
.addcart .inner .else .pic .show .text .price {
  display: flex;
  justify-content: space-between;
}
.addcart .inner .else .pic .show .text span {
  color: #dc2424;
  font-size: 18px;
}
</style>
