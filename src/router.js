import Vue from "vue";
import VueRouter from "vue-router";
import FirstPage from "./components/FirstPage.vue";
import AddCart from "./components/AddCart.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import WriteOrder from "./components/WriteOrder.vue";
import ShouYin from "./components/ShouYin.vue";
import WeiXin from "./components/WeiXin.vue";
Vue.use(VueRouter);
const routes = [
  {
    component: FirstPage,
    path: "/mozan"
  },
  {
    component: AddCart,
    path: "/mozan/addcart"
  },
  {
    component: ShoppingCart,
    path: "/mozan/shoppingcart"
  },
  {
    component: WriteOrder,
    path: "/mozan/writeorder"
  },
  {
    component: ShouYin,
    path: "/mozan/shouyin"
  },
  {
    component: WeiXin,
    path: "/mozan/weixin"
  }
];
const router = new VueRouter({
  routes,
  mode: "history"
});
export default router;
