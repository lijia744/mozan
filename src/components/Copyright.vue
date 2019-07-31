<template>
  <div class="copyright">
    <div class="inner">
      <img src="../assets/573705995429784301.png" alt />
      <div class="text">
        <p class="firstline">北京开普乐科技有限公司©版权所有 Copyright 2015-2025 Morethan.cc All rights reserved.</p>
        <p class="lastline">地址：北京市朝阳区建国路93号院4号楼4层505</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "copyright"
};
</script>

<style>
.copyright {
  background-color: #2b2e33;
}
.copyright .inner {
  width: 1200px;
  margin: 0 auto;
  padding: 12px 82px 12px 0;
  display: flex;
  justify-content: space-between;
  color: #707378;
  font-size: 12px;
}
.copyright .inner img {
  width: 190px;
  height: 61px;
}
.copyright .inner p {
  margin: 0;
}
.copyright .inner .firstline {
  margin-bottom: 6px;
  margin-top: 15px;
}
.copyright .inner .lastline {
  float: right;
}
</style>
