<template>
  <div class="order">
    <OrderTop />
    <div class="address">
      <div class="title">
        <b>收货地址</b>
        <b @click="addressShow=true">
          <span class="jiahao">+</span>新增地址
        </b>
      </div>
      <ul>
        <li :class="add=='one'?'active':''" @click="add='one'">
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
        <li :class="add=='two'?'active':''" @click="add='two'">
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
        <li :class="add=='three'?'active':''" @click="add='three'">
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
    <div v-show="addressShow" class="new-address">
      <div class="address-box">
        <h1>
          <span>新增地址</span>
          <span @click="addressShow=false">×</span>
        </h1>
        <div class="address-info">
          <div>
            <span>
              <span class="form-txt">
                <span>*收货人</span>
                <!-- <span>请填写收货人！</span> -->
              </span>
              <input class="people" type="text" v-model=" user_name" />
            </span>
            <span>
              <span class="form-txt">
                <span>*联系电话</span>
                <!-- <span>填写的手机号格式错误</span> -->
              </span>
              <input class="phone-txt" type="text" v-model=" user_phoneNum" />
            </span>
          </div>
          <div>
            <span>*所在地区</span>
            <span>请填写完整的所在地区</span>
          </div>
          <div class="linkage">
            <el-select v-model="sheng" @change="choseProvince" placeholder="省级地区">
              <el-option
                v-for="item in province"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              ></el-option>
            </el-select>
            <el-select v-model="shi" @change="choseCity" placeholder="市级地区">
              <el-option v-for="item in shi1" :key="item.id" :label="item.value" :value="item.id"></el-option>
            </el-select>
            <el-select v-model="qu" @change="choseBlock" placeholder="区级地区">
              <el-option v-for="item in qu1" :key="item.id" :label="item.value" :value="item.id"></el-option>
            </el-select>
          </div>

          <div class="width-100">
            <span>
              <span class="form-txt">
                <span>*收货人</span>
                <!-- <span>请填写收货人！</span> -->
              </span>
              <input type="text" />
            </span>
          </div>
          <div>
            <span>
              <span class="form-txt">
                <span>地址别名</span>
              </span>
              <input class="address" type="text" />
            </span>
            <span class="other-name">
              <span class="form-txt">
                <span>常用别名</span>
              </span>
              <span class="df">
                <span class="btn">家</span>
                <span class="btn">公司</span>
                <span class="btn">父母家</span>
              </span>
            </span>
          </div>
        </div>
        <div class="save-address">
          <div @click.stop="change">
            <span class="df">
              <span v-if="!defaultChecked" class="checkbox"></span>
              <span v-else class="check">√</span>
            </span>
            <span>设为默认地址</span>
          </div>
          <span @click="addAddress" class="save">保存地址</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderTop from "../components/OrderTop";
export default {
  name: "writeorder",
  data() {
    return {
      defaultChecked: false,
      addressShow: false,
      province: "",
      sheng: "",
      shi: "",
      shi1: [],
      qu: "",
      qu1: [],
      city: "",
      block: "",
      user_name: "",
      user_phoneNum: "",
      add: ""
    };
  },
  components: {
    OrderTop
  },
  methods: {
    choseProvince: function(e) {
      for (var index2 in this.province) {
        if (e === this.province[index2].id) {
          console.log(this.province[index2].id); //你选择的省级编码
          console.log(this.province[index2].value); //省级编码 对应的汉字
          this.shi1 = this.province[index2].children;
          this.shi = this.province[index2].children[0].value;
          this.qu1 = this.province[index2].children[0].children;
          this.qu = this.province[index2].children[0].children[0].value;
          this.E = this.qu1[0].id;
        }
      }
    },
    // 选市
    choseCity: function(e) {
      for (var index3 in this.city) {
        if (e === this.city[index3].id) {
          this.qu1 = this.city[index3].children;
          this.qu = this.city[index3].children[0].value;
          this.E = this.qu1[0].id;
          // console.log(this.E)
        }
      }
    },
    // 选区
    choseBlock: function(e) {
      this.E = e;
      // console.log(this.E)
    },
    addAddress() {
      if (this.user_name && this.user_phoneNum) {
        this.$store.state.users.push({
          user_name: this.user_name,
          user_address: "秦皇岛市海港区秦海璐84号",
          user_phoneNum: this.user_phoneNum,
          active_address: this.defaultChecked,
          user_id: 899999,
          byid: [1],
          bynum: {
            1: 1
          }
        });
        this.addressShow = false;
      } else {
        alert("请输入正确的信息");
      }
    },
    change() {
      console.log(11);
      this.$store.commit("changeAddress", this.defaultChecked);
      this.defaultChecked = !this.defaultChecked;
    }
  }
};
</script>

<style>
.order .el-input__icon {
  line-height: 0;
}

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
.new-address {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
}
.new-address .address-box {
  background-color: #fff;
  width: 690px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
}
.new-address .address-box h1 {
  margin: 0;
  font-size: 18px;
  border-bottom: 3px solid #000;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.new-address .address-box > .address-info > div {
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  padding-top: 20px;
}
.new-address .address-box > .address-info > div > span {
  display: flex;
  flex-direction: column;
}
.new-address .address-box > .address-info > div > span .form-txt {
  display: flex;
  justify-content: space-between;
}
.new-address .address-box input {
  outline: none;
  height: 26px;
}
.new-address .address-box > .address-info > div > span > input.people {
  width: 210px;
}
.new-address .address-box > .address-info > div > span > input.phone-txt {
  width: 432px;
}
.new-address .address-box > .address-info > div > .other-name {
  width: 210px;
  display: flex;
  /* justify-content: space-between; */
}
.new-address .address-box > .address-info > div > .other-name > span {
  display: flex;
  justify-content: space-between;
}
.new-address
  .address-box
  > .address-info
  > div
  > .other-name
  > span
  > span.btn {
  width: 68px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border: 1px solid #babec9;
}
.new-address .address-box > .address-info > div > span > input.address {
  width: 430px;
}

.new-address .address-box > .address-info > div.width-100,
.new-address .address-box > .address-info > div.width-100 > span {
  width: 100%;
}

.new-address .address-box > .save-address {
  display: flex;
  justify-content: space-between;
  padding-top: 28px;
  align-items: center;
}
.new-address .address-box > .save-address > div {
  font-size: 12px;
  display: flex;
}
.new-address .address-box > .save-address > .save {
  width: 210px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  font-size: 18px;
  background-color: #fdd900;
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
.order .address ul li.active {
  border: 3px solid #fdd900;
}
</style>
