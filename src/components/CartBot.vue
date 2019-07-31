<template>
  <div class="under">
    <div class="jisuan">
      <div class="left">
        <span class="choose">
          <input type="checkbox" class="checkbox" id="all" />
          <label class="text" for="all">
            <span>√</span>
          </label>全选
        </span>
        <img class="delete" src="../assets/2 (2).jpg" alt />
        <span @click="show=true">删除</span>
        <div class="del" v-show="show">
          <span class="jiantou"></span>
          <div>
            <span class="yes" @click="sureDel">确定删除</span>
            <span class="no" @click="show=false">不删除</span>
          </div>
        </div>
        <img class="star" src="../assets/2 (1).jpg" alt />
        <span class="turn">转到愿望单</span>
        <span class="goodsnum">
          共
          <span class="num">{{this.$store.state.carts.length}}</span>件商品，已选择
          <span class="num"></span>件
        </span>
      </div>
      <div class="right">
        <div class="wenzi">
          <span class="add">合计：</span>
          <br />
          <span>[不含运费]</span>
        </div>
        <span class="price">￥</span>
      </div>
    </div>
    <button @click="$emit('maskTan')">去结算</button>
  </div>
</template>

<script>
export default {
  name: "cartbot",
  props: ["carts"],
  data() {
    return {
      show: false
    };
  },
  methods: {
    sureDel() {
      this.$store.state.carts = [];
      this.show = false;
    }
  }
};
</script>

<style>
.list .under {
  display: flex;
}
.list .jisuan {
  width: 880px;
  display: flex;
  background-color: #2b2e33;
  justify-content: space-between;
  padding: 10px 20px;
}
.list .jisuan .left {
  align-items: center;
  display: flex;
  position: relative;
}
.list .jisuan .left .choose {
  align-items: center;
}
.list .jisuan .left .text {
  width: 26px;
  height: 26px;
  border: 2px solid #fff;
}
.list .jisuan .left span {
  color: #fff;
}
.list .jisuan .left .delete {
  margin: 0 5px 0 14px;
}
.list .jisuan .left .star {
  margin: 0 5px 0 20px;
}
.list .jisuan .left .turn {
  border-right: 2px solid #707378;
  padding-right: 20px;
}
.list .jisuan .left .goodsnum {
  padding-left: 20px;
}
.list .jisuan .left .goodsnum .num {
  color: #fdd900;
  margin-right: 5px;
}
.list .jisuan .left .del {
  position: absolute;
  left: 16%;
  bottom: 0;
  bottom: 54px;
}
.list .jisuan .left .del > div {
  display: flex;
}
.list .jisuan .left .jiantou {
  border: 10px solid #f50000;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  position: absolute;
  top: 32px;
  left: 13%;
}
.list .jisuan .left .yes {
  width: 74px;
  height: 32px;
  background-color: #f50000;
  color: #fff;
  padding: 6px 10px;

  font-size: 12px;
}
.list .jisuan .left .no {
  width: 126px;
  background-color: #2b2e33;
  padding: 6px 10px;
  color: #fff;
  text-align: center;
}
.list .jisuan .right {
  color: #fff;
  align-items: center;
  display: flex;
}
.list .jisuan .right .add {
  margin: 0;
  font-size: 12px;
  padding-left: 32px;
}
.list .jisuan .right .price {
  color: #fdd900;
  font-size: 26px;
  padding-left: 5px;
}
.list button {
  width: 220px;
  height: 60px;
  background-color: #fdd900;
  border: none;
  font-size: 26px;
  outline: none;
}
.list button a {
  color: #000;
}
</style>
