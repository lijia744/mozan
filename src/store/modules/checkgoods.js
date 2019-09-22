const checkGoods = {
  state: {
    delMainF: false,
    isLogin: false,
    shopCarts: [
      {
        id: "a11",
        isCheck: true,
        src:
          "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/lunbo1.jpg",
        text: "龙之谷六周年限定礼包大Boss冰龙款男士T恤",
        type: "iPhone 7",
        size: "S",
        price: 700,
        num: 1,
        status: "on",
        isDel: false
      },
      {
        id: "a12",
        isCheck: true,
        src:
          "https://dev.tencent.com/u/lijia1102/p/images/git/raw/master/lunbo1.jpg",
        text: "龙之谷六周年限定礼包大Boss冰龙款男士T恤",
        type: "iPhone 5",
        size: "XXL",
        price: 700,
        num: 1,
        status: "on",
        isDel: false
      }
    ]
  },
  mutations: {
    login(state) {
      state.isLogin = true;
    },
    close(state) {
      state.isLogin = false;
    },
    delMain(state, payload) {
      const nowChange = state.shopCarts.find(item => item.id === payload.id);
      nowChange.isDel = !nowChange.isDel;
    },
    changeCheck(state, payload) {
      const nowChange = state.shopCarts.find(item => item.id === payload.id);
      if (nowChange.status === "on") {
        nowChange.isCheck = !nowChange.isCheck;
      }
    },
    changeAll(state) {
      const newOn = state.shopCarts.filter(item => item.status === "on");
      const nowTimeiOver = state.shopCarts.filter(item => item.status != "on");
      if (!newOn.find(item => item.isCheck === false)) {
        state.shopCarts = state.shopCarts.map(item => {
          return {
            id: item.id,
            isCheck: false,
            src: item.src,
            text: item.text,
            type: item.type,
            size: item.size,
            price: item.price,
            num: item.num,
            status: item.status
          };
        });
      } else {
        const newOn = state.shopCarts.filter(item => item.status === "on");
        const nowTimeiOver = state.shopCarts.filter(
          item => item.status != "on"
        );
        state.shopCarts = state.shopCarts.map(item => {
          if (item.status === "on") {
            return {
              id: item.id,
              isCheck: true,
              src: item.src,
              text: item.text,
              type: item.type,
              size: item.size,
              price: item.price,
              num: item.num,
              status: item.status
            };
          } else {
            return {
              id: item.id,
              isCheck: false,
              src: item.src,
              text: item.text,
              type: item.type,
              size: item.size,
              price: item.price,
              num: item.num,
              status: item.status
            };
          }
        });
      }
    },
    addCartNum(state, payload) {
      const nowChange = state.shopCarts.find(item => item.id === payload.id);
      if (nowChange.status === "on") {
        nowChange.num++;
        nowChange.isCheck = true;
      }
    },
    loseCartNum(state, payload) {
      const nowChange = state.shopCarts.find(item => item.id === payload.id);
      if (nowChange.num > 1 && nowChange.status === "on") {
        nowChange.num--;
      }
    },
    delCartLists(state, payload) {
      state.shopCarts = state.shopCarts.filter(item => item.id != payload.id);
    },
    delMainFooter(state) {
      state.delMainF = !state.delMainF;
    },
    noDel(state) {
      state.delMainF = !state.delMainF;
    },
    delAll(state) {
      state.shopCarts = [];
    }
  },
  actions: {},
  getters: {
    checkType(state) {
      const newOn = state.shopCarts.filter(item => item.status === "on");
      return !newOn.find(item => item.isCheck === false);
    },
    checkNum(state) {
      return state.shopCarts.filter(item => item.isCheck === true).length;
    },
    totals(state) {
      const nowCheck = state.shopCarts.filter(item => item.isCheck === true);
      return nowCheck
        .reduce((res, item) => {
          return (res = item.price * item.num + res);
        }, 0)
        .toFixed(2);
    }
  }
};
export default checkGoods;
