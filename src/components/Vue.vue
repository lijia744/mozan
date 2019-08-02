<template>
  <div class="shoppingcart">
    <CartTop />
    <div class="list" v-if="carts.length">
      <div class="title">
        <span class="choose" @click="clickShow">
          <span class="none" v-if="zhanshi"></span>
          <span class="duigou" v-else>√</span>
          <span class="all">全选</span>
        </span>
        <span class="goods">商品</span>
        <span>单价</span>
        <span class="num">数量</span>
        <span class="totle">小计</span>
        <span>操作</span>
      </div>
      <div class="main">
        <ul>
          <li v-for="cart in carts" :key="cart.id">
            <div class="left">
              <span class="choose">
                <span class="none" v-if="chuxian=true"></span>
                <span class="duigou" v-else>√</span>
              </span>
              <img :src="cart.src" alt />
              <div class="dec">
                <p>{{cart.title}}</p>
                <span v-if="cart.style">款式：{{cart.style}}</span>
                <br />
                <span v-if="cart.size">尺码：{{cart.size}}</span>
              </div>
            </div>
            <div class="right">
              <span>￥{{cart.price.toFixed(2)}}</span>
              <button @click="add(cart.id)">+</button>
              <span>{{cart.num}}</span>
              <button @click="sub(cart.id)">-</button>
              <span class="price">￥{{(cart.num*cart.price).toFixed(2)}}</span>
              <span @click="cart.show=true">X</span>
              <div v-show="cart.show" class="del">
                <span class="jiantou"></span>
                <div>
                  <span class="yes" @click="sureDel(cart.id)">确定删除</span>
                  <span class="no" @click="cart.show=false">不删除</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <CartBot :carts="carts" @maskTan="maskTan" />
    </div>
    <img v-else src="../assets/7_03.jpg" alt />
    <div v-show="mask" class="fullbg">
      <div id="popframe1">
        <p @click="maskClose">X</p>
        <img src="../assets/2_003.jpg" />
        <form>
          <div class="biaoge">
            <img src="../assets/849894017540181162.jpg" alt />
            <input type="text" placeholder="请输入手机号" v-model="text" />
          </div>
          <div class="biaoge">
            <img src="../assets/873988897214803123.jpg" alt />
            <input type="password" placeholder="请输入密码" v-model="password" />
          </div>
          <div class="yanzheng">
            <input type="text" placeholder="请输入验证码" />
            <img src="../assets/173672681243773254.jpg" alt />
          </div>
          <input type="button" value="登陆" class="denglu" @click="clickDeng" />
        </form>
        <div class="forget">
          <span>忘记密码？</span>
          <span>注册</span>
        </div>
        <div class="icon">
          <img src="../assets/534613505657174369.jpg" alt />
          <img src="../assets/264748530312578005.jpg" alt />
          <img src="../assets/27616690279312282.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartTop from "../components/CartTop";
import CartBot from "../components/CartBot";
export default {
  name: "cart",
  data() {
    return {
      mask: false,
      text: "",
      password: "",
      jiesuan: false,
      zhanshi: true
    };
  },
  components: {
    CartTop,
    CartBot
  },
  computed: {
    carts() {
      return this.$store.state.carts;
    }
  },
  methods: {
    add(id) {
      this.$store.commit("addClick", id);
    },
    sub(id) {
      this.$store.commit("subClick", id);
    },
    maskTan() {
      if (this.jiesuan) {
        this.$router.push("/writeorder");
      } else {
        this.mask = true;
      }
    },
    maskClose() {
      this.mask = false;
    },
    clickDeng() {
      if (this.text === "1234" && this.password === "123") {
        this.mask = false;
        this.jiesuan = true;
      } else {
        alert("请输入正确的手机号码或密码");
      }
    },
    sureDel(id) {
      this.$store.commit("sureDel", id);
    },
    clickShow() {
      this.zhanshi = !this.zhanshi;
    }
  }
};
</script>

<style>
.shoppingcart {
  width: 1200px;
  margin: 0 auto;
  font-size: 14px;
}
.fullbg {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  position: fixed;
  top: 0;
  z-index: 1;
}
#popframe1 {
  z-index: 2;
  font-size: 16px;
  width: 418px;
  position: fixed;
  top: 6%;
  left: 36%;
  background-color: #ffffff;
  text-align: center;
  padding: 10px 20px 20px 20px;
}
#popframe1 p {
  float: right;
}
#popframe1 img {
  margin: 44px 0 30px 0;
}
#popframe1 form .biaoge {
  display: flex;
  margin-bottom: 20px;
}
#popframe1 form img {
  margin: 0;
  border: 2px solid #ccc;
  width: 46px;
  height: 46px;
}
#popframe1 form input {
  width: 334px;
  height: 46px;
  padding-left: 15px;
}
#popframe1 form .yanzheng {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
}
#popframe1 form .yanzheng input {
  width: 223px;
}
#popframe1 form .yanzheng img {
  width: 138px;
}
#popframe1 form .denglu {
  width: 376px;
  background-color: #fdd900;
  border: none;
  font-size: 22px;
  margin-bottom: 30px;
}
#popframe1 .forget {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
#popframe1 .icon {
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #ccc;
  margin-top: 24px;
  padding-top: 20px;
}
#popframe1 .icon img {
  margin: 0;
}
.shoppingcart .list {
  background-color: #fff;
  padding: 10px 50px 78px;
}
.shoppingcart .list .title {
  display: flex;
  margin-bottom: 10px;
  padding-right: 12px;
}
.shoppingcart .list .title .goods {
  margin-left: 30px;
  margin-right: 460px;
}
.shoppingcart .list .title .num {
  margin-left: 163px;
  margin-right: 171px;
}
.shoppingcart .list .title .totle {
  margin-right: 66px;
}
.shoppingcart .list .choose {
  display: flex;
}
.shoppingcart .list .text {
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid #b8beca;
  text-align: center;
  line-height: 20px;
  margin-right: 10px;
}
/* .shoppingcart .list .checkbox {
  display: none;
} */

.shoppingcart .list .text span {
  display: none;
}
.shoppingcart .list .choose .none {
  width: 20px;
  height: 20px;
  border: 2px solid #b8beca;
}
.shoppingcart .list .choose .all {
  margin-left: 10px;
}
.shoppingcart .list .choose .duigou {
  width: 20px;
  text-align: center;
  height: 20px;
  background-color: #fdd900;
  border: none;
}
/* .shoppingcart .list .choose span {
  display: block;
} */
.shoppingcart .list .main {
  border-top: 2px solid #2b2e33;
  border-bottom: 2px solid #2b2e33;
  margin-bottom: 50px;
}
.shoppingcart .list .main li {
  border-bottom: 1px solid #d1d7e3;
  display: flex;
  padding: 20px 0px 20px 20px;
}
.shoppingcart .list .main li .left {
  display: flex;
  width: 50%;
  align-items: center;
}
.shoppingcart .list .main li img {
  width: 96px;
  height: 96px;
  margin: 0 38px 10px;
}
.shoppingcart .list .main li .left .dec {
  width: 240px;
}
.shoppingcart .list .main li .left .dec span {
  font-size: 12px;
  color: #848589;
}
.shoppingcart .list .main li .right {
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  position: relative;
}
.shoppingcart .list .main li .right .price {
  color: #f30004;
}
.shoppingcart .list .main li .right button {
  width: 38px;
  height: 38px;
  text-align: center;
  border: 1px solid #000;
  background-color: #fff;
  font-size: 18px;
  outline: none;
  outline: none;
}
.shoppingcart .list .main li .del {
  position: absolute;
  left: 63%;
  top: 75%;
}
.shoppingcart .list .main li .del > div {
  display: flex;
}
.shoppingcart .list .main li .right .jiantou {
  border: 10px solid #2b2e33;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  position: absolute;
  top: -20px;
  left: 83%;
}
.shoppingcart .list .main li .right .yes {
  width: 74px;
  height: 32px;
  background-color: #f50000;
  color: #fff;
  padding: 6px 10px;

  font-size: 12px;
}
.shoppingcart .list .main li .right .no {
  width: 126px;
  background-color: #2b2e33;
  padding: 6px 10px;
  color: #fff;
  text-align: center;
}
</style>
