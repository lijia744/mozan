<template>
  <div class="information">
    <div class="inner">
      <div class="help">
        <span>帮助我们</span>
        <div class="list">
          <ul>
            <li>
              <img src="../assets/4_03.jpg" alt />
              <span>购物指南</span>
            </li>
            <li>
              <img src="../assets/4_16.jpg" alt />
              <span>支付方式</span>
            </li>
            <li>
              <img src="../assets/4_22.jpg" alt />
              <span>配送方式</span>
            </li>
            <li>
              <img src="../assets/4_25.jpg" alt />
              <span>售后服务</span>
            </li>
          </ul>
          <ul>
            <li>
              <img src="../assets/4_05.jpg" alt />
              <span>服务中心</span>
            </li>
            <li>
              <img src="../assets/4_17.jpg" alt />
              <span>关于我们</span>
            </li>
            <li>
              <img src="../assets/4_21.jpg" alt />
              <span>免责条款</span>
            </li>
            <li>
              <img src="../assets/4_26.jpg" alt />
              <span>友情链接</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="attention">
        <span>关注我们</span>
        <div class="saoma">
          <div class="pic">
            <img src="../assets/4_08.jpg" alt />
            <br />
            <img src="../assets/4_35.jpg" alt />
          </div>
          <div class="pic">
            <img src="../assets/4_10.jpg" alt />
            <img src="../assets/4_32.jpg" alt />
          </div>
        </div>
      </div>
      <div class="tel">
        <span>客服热线</span>
        <div class="phone">
          <img src="../assets/4_12.jpg" alt />
          <div class="num">
            <p>400 113 5353</p>
            <span>[ 周一至周五 9：00-18：00 ]</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "information"
};
</script>

<style>
.information {
  background: #000;
}
.information .inner {
  width: 1200px;
  margin: 0 auto;
  color: #fff;
  padding: 61px 0 52px;
  display: flex;
  justify-content: space-between;
}
.information .inner .help {
  margin-left: 21px;
}
.information .inner .help .list {
  width: 246px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.information .inner .help .list ul {
  font-size: 14px;
}
.information .inner .help .list ul li {
  display: flex;
  align-items: center;
}
.information .inner .help .list ul li img {
  height: 27px;
  padding-right: 14px;
}
.information .inner .attention {
  width: 242px;
}

.information .inner .attention .saoma {
  display: flex;
  justify-content: space-between;
  margin-top: 26px;
}
.information .inner .attention .saoma .pic {
  text-align: center;
}
.information .inner .tel {
  margin-right: 131px;
}
.information .inner .tel .phone {
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
}
.information .inner .tel .phone img {
  width: 28px;
  height: 38px;
}
.information .inner .tel .phone .num p {
  margin: 0;
}
</style>
