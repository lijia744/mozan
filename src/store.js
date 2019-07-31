import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    carts: [
      {
        id: 1,
        price: 79.0,
        num: 1,
        src:
          "https://github.com/liu-sir666/mozan/blob/master/src/assets/images/2_03.jpg?raw=true",
        title: "龙之谷六周年限定礼包大Boss冰龙款男士T恤",
        style: "iphone 5",
        size: "XXL",
        show: false
      },
      {
        id: 2,
        price: 79.0,
        num: 1,
        src:
          "https://github.com/liu-sir666/mozan/blob/master/src/assets/images/2_03.jpg?raw=true",
        title: "龙之谷六周年限定礼包大Boss冰龙款男士T恤",
        style: null,
        size: null,
        show: false
      },
      {
        id: 3,
        price: 79.0,
        num: 1,
        src:
          "https://github.com/liu-sir666/mozan/blob/master/src/assets/images/2_03.jpg?raw=true",
        title: "龙之谷六周年限定礼包大Boss冰龙款男士T恤",
        style: "iphone 5",
        size: "XL",
        show: false
      },
      {
        id: 4,
        price: 79.0,
        num: 1,
        src:
          "https://github.com/liu-sir666/mozan/blob/master/src/assets/images/2_03.jpg?raw=true",
        title: "龙之谷六周年限定礼包大Boss冰龙款男士T恤",
        style: "iphone 5",
        size: "XXL",
        show: false
      }
    ]
  },
  mutations: {
    addcart(state, payload) {
      state.carts.push(payload);
    },
    addClick(state, id) {
      state.carts.find(item => item.id === id).num++;
    },
    subClick(state, id) {
      if (state.carts.find(item => item.id === id).num > 1) {
        state.carts.find(item => item.id === id).num--;
      }
    },
    sureDel(state, id) {
      state.carts = state.carts.filter(item => item.id != id);
    }
  }
});

export default store;
