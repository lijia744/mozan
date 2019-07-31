<template>
  <div class="sale">
    <div class="top">
      <div class="left">
        <div class="title">
          <img src="../assets/2_12.jpg" alt />
          <span>龙之谷六周年限定礼包大BOSS冰龙款男士T恤</span>
        </div>
        <div class="clock">
          <div class="end">
            <p>距预售结束</p>
            <div class="time">
              <span id="time1"></span>
              <div class="word">
                <span>天</span>
                <span>时</span>
                <span>分</span>
                <span>秒</span>
              </div>
            </div>
          </div>
          <div class="zhuanqu">
            <p>相关专区</p>
            <img src="../assets/商品详情页_全额预售_58.jpg" alt />
          </div>
        </div>
        <div class="add">
          <img src="../assets/1_08.jpg" alt />
          <div class="text">
            <span class="yel">注：</span>
            <span>商品将于5</span>
            <span class="yel">2019/12/25</span>
            <span>统一发货</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="box">
          <span class="title">预售价</span>
          <span class="fuhao">
            ￥
            <span class="price">700.00</span>
          </span>
        </div>
        <div class="box">
          <span class="title">款式</span>
          <div class="kuanshi">
            <span>iPhone 5</span>
            <span class="six">iPhone 6</span>
            <span>iPhone 6+</span>
          </div>
        </div>
        <div class="box">
          <span class="title">尺码</span>
          <div class="chima">
            <span>XXS</span>
            <span>XS</span>
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
            <span>XXL</span>
          </div>
        </div>
        <div class="box">
          <span class="title">数量</span>
          <div class="num">
            <span>-</span>
            <span class="one">1</span>
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bot">
      <b>
        <router-link to="/addcart">立即预购</router-link>
      </b>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "sale",
  mounted() {
    (function() {
      var Ticts = function Ticts() {
        this.ticts = {};
      };
      Ticts.prototype.createTicts = function(id, dealline) {
        var ticts = this;
        var time = moment(dealline).diff(moment());
        var _ticts = (this.ticts[id] = {
          dealine: dealline,
          id: id,
          time: time,
          interval: setInterval(function() {
            var t = null;
            var d = null;
            var h = null;
            var m = null;
            var s = null;
            //js默认时间戳为毫秒,需要转化成秒
            t = _ticts.time / 1000;
            d = Math.floor(t / (24 * 3600));
            h = Math.floor((t - 24 * 3600 * d) / 3600);
            m = Math.floor((t - 24 * 3600 * d - h * 3600) / 60);
            s = Math.floor(t - 24 * 3600 * d - h * 3600 - m * 60);
            //这里可以做一个格式化的处理,甚至做毫秒级的页面渲染,基于DOM操作,太多个倒计时一起会导致页面性能下降
            document.getElementById(id).innerHTML =
              [d < 10 ? "0" + d : d] +
              "&nbsp&nbsp&nbsp&nbsp&nbsp" +
              ":" +
              "&nbsp&nbsp&nbsp&nbsp&nbsp" +
              [h < 10 ? "0" + h : h] +
              "&nbsp&nbsp&nbsp&nbsp&nbsp" +
              ":" +
              "&nbsp&nbsp&nbsp&nbsp&nbsp" +
              [m < 10 ? "0" + m : m] +
              "&nbsp&nbsp&nbsp&nbsp&nbsp" +
              ":" +
              "&nbsp&nbsp&nbsp&nbsp&nbsp" +
              [s < 10 ? "0" + s : s];
            _ticts.time -= 1000;
            if (_ticts.time < 0) ticts.deleteTicts(id); //判断是否到期,到期后自动删除定时器
          }, 1000)
        });
      };
      Ticts.prototype.deleteTicts = function(id) {
        clearInterval(this.ticts[id].interval); //清楚定时器的方法,需要定时器的指针作为参数传入clearInterval
        delete this.ticts[id]; //通过delete的方法删除对象中的属性
      };
      //新建一个ticts对象,放到window全局函数中,那么在html页面是(或者其他js文件)可以访问该对象
      window.Ticts = new Ticts();
    })();
    Ticts.createTicts("time1", "2019-12-25 00:00:00");
  }
};
</script>

<style>
.sale {
  width: 1200px;
  margin: 0 auto;
  padding: 30px 50px;
  background-color: #2b2e33;
}
.sale .top {
  display: flex;
}
.sale .top .left {
  padding-right: 50px;
  border-right: 2px solid #707378;
}
.sale .top .left .title {
  display: flex;
  /* justify-content: space-between; */
  margin-bottom: 60px;
}
.sale .top .left .title img {
  margin-right: 38px;
}
.sale .top .left .title span {
  width: 406px;
  font-size: 34px;
  color: #fff;
}
.sale .top .left p {
  color: #6f7478;
  margin: 0;
}
.sale .top .left .clock {
  display: flex;
}
.sale .top .left .time {
  width: 418px;
  background-color: #707378;
  border-radius: 8px;
  padding: 8px 20px;
}
.sale .top .left .time #time1 {
  color: #fddb00;
  font-size: 26px;
}
.sale .top .left .time .word {
  display: flex;
  justify-content: space-between;
}
.sale .top .left .time .word span {
  color: #fddb00;
  margin-left: 12px;
}
.sale .top .left .time .word span:nth-child(2) {
  margin-left: 64px;
}
.sale .top .left .time .word span:nth-child(3) {
  margin-left: 52px;
}
.sale .top .left .time .word span:nth-child(4) {
  margin-left: 54px;
}
.sale .top .left .clock .zhuanqu {
  margin-left: 10px;
}
.sale .top .left .clock .zhuanqu img {
  height: 72px;
}
.sale .top .left .add {
  color: #fff;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.sale .top .left .add .yel {
  color: #fddb00;
}
.sale .top .right {
  padding-left: 50px;
}
.sale .top .right .box {
  margin-bottom: 30px;
  display: flex;
}
.sale .top .right .box span {
  color: #fff;
}
.sale .top .right > div .title {
  display: block;
  width: 65px;
  line-height: 26px;
  background-color: #fff;
  font-size: 14px;
  border-radius: 5px;
  margin-right: 30px;
  text-align: center;
  color: #000;
}
.sale .top .right > div .fuhao {
  color: #fddb00;
}
.sale .top .right > div .price {
  color: #fddb00;
  font-size: 26px;
}
.sale .top .right .box .kuanshi,
.sale .top .right .box .chima {
  display: flex;
}
.sale .top .right .box .kuanshi span,
.sale .top .right .box .chima span {
  display: block;
  text-align: center;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 3px;
}
.sale .top .right .box .chima span {
  margin-left: 10px;
}
.sale .top .right .box .kuanshi .six {
  margin: 0 10px;
}
.sale .top .right .box .num {
  display: flex;
  justify-content: space-between;
}
.sale .top .right .box .num span {
  display: block;
  width: 70px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
}
.sale .top .right .box .num .one {
  border: none;
}
.sale .bot {
  border-top: 2px solid #4f4f4f;
  border-bottom: 2px solid #4f4f4f;
  margin-top: 20px;
}
.sale .bot b {
  display: block;
  width: 100%;
  font-size: 20px;
  color: #fddb00;
  border: 3px solid #fddb00;
  border-radius: 7px;
  text-align: center;
  padding: 30px 0;
  margin: 20px 0;
}
.sale .bot b a {
  color: #fddb00;
}
</style>
