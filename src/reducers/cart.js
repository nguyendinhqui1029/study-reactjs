const initialState = {
  idCustomer: "5d1b8222-8241-45dd-ac89-70d1793b6f4a",
  cartList: [],
  address: {},
  addressOther: {},
  deliveryMethod: {},
  paymentMethod: {},
  deliveryFee: 0,
  intoMoney: 0,
  totalPay: 0,
  status: "draf",
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FEE_OTHER": {
      state = { ...state, ...action.payload };
      return state;
    }
    case "ADD_ADDRESS": {
      state.address = { ...action.payload };
      return state;
    }
    case "ADD_ADDRESS_OTHER": {
      state.addressOther = { ...action.payload };
      return state;
    }
    case "ADD_DELIVERY_METHOD": {
      state.deliveryMethod = { ...action.payload };
      return state;
    }
    case "ADD_PAYMENT_METHOD": {
      state.paymentMethod = { ...action.payload };
      return state;
    }
    case "ADD_CART": {
      let product = state.cartList.find((cart) => {
        return cart.id === action.payload.id;
      });

      if (!!product) {
        product.amount += 1;
      } else {
        state.cartList.push({ ...action.payload, amount: 1 });
      }
      const obj = { cartList: [...state.cartList] };
      sessionStorage.setItem("item_cart", JSON.stringify(obj));
      return obj;
    }
    case "UPDATE_AMOUNT_CART": {
      state.cartList[action.payload.index] = action.payload;
      const obj = { cartList: [...state.cartList] };
      sessionStorage.setItem("item_cart", JSON.stringify(obj));
      return obj;
    }
    case "REMOVE_CART": {
      state.cartList.splice(action.payload.index, 1);
      const obj = { cartList: [...state.cartList] };
      sessionStorage.setItem("item_cart", JSON.stringify(obj));
      return obj;
    }

    case "UPDATE_CART": {
      if (action.payload && action.payload.length) {
        state.cartList = [...action.payload];
        sessionStorage.setItem("item_cart", JSON.stringify(action.payload));
      }
      return state;
    }

    default:
      return state;
  }
};

export default cartReducer;
