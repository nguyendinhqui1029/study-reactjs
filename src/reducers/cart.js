const initialState = {
  id: sessionStorage.getItem("ID") || "",
  idCustomer: "",
  cartList:
    (!!sessionStorage.getItem("ITEM_LIST") &&
      JSON.parse(sessionStorage.getItem("ITEM_LIST")).cartList) ||
    [],
  address: JSON.parse(sessionStorage.getItem("ADD_ADDRESS")) || null,
  addressOther: JSON.parse(sessionStorage.getItem("ADD_ADDRESS_OTHER")) || null,
  deliveryMethod:
    JSON.parse(sessionStorage.getItem("ADD_DELIVERY_METHOD")) || null,
  paymentMethod:
    JSON.parse(sessionStorage.getItem("ADD_PAYMENT_METHOD")) || null,
  status:sessionStorage.getItem("STATUS") || "draft",
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ADDRESS": {
      state.address = { ...action.payload };
      sessionStorage.setItem("ADD_ADDRESS", JSON.stringify(action.payload));
      return state;
    }
    case "ADD_ADDRESS_OTHER": {
      state.addressOther = { ...action.payload };
      sessionStorage.setItem(
        "ADD_ADDRESS_OTHER",
        JSON.stringify(action.payload)
      );
      return state;
    }
    case "ADD_DELIVERY_METHOD": {
      state.deliveryMethod = { ...action.payload };
      sessionStorage.setItem(
        "ADD_DELIVERY_METHOD",
        JSON.stringify(action.payload)
      );
      return state;
    }
    case "ADD_PAYMENT_METHOD": {
      state.paymentMethod = { ...action.payload };
      sessionStorage.setItem(
        "ADD_PAYMENT_METHOD",
        JSON.stringify(action.payload)
      );
      return state;
    }
    case "ADD_ITEM_TO_CART": {
      let product = state.cartList.find((cart) => {
        return cart.id === action.payload.id;
      });

      if (!!product) {
        product.amount += action.payload.amount || 1;
      } else {
        state.cartList.push({ ...action.payload, amount: action.payload.amount || 1 });
      }

      const obj = { cartList: [...state.cartList] };
      sessionStorage.setItem("ITEM_LIST", JSON.stringify(obj));
      return obj;
    }

    case "RESET_CART_LIST": {
      const obj = { ...state, cartList: action.payload };
      sessionStorage.setItem("ITEM_LIST", JSON.stringify(obj));
      return obj;
    }

    case "UPDATE_AMOUNT_CART": {
      if (!!action.payload) {
        state.cartList[action.payload.index] = action.payload;
        const obj = { cartList: [...state.cartList] };
        sessionStorage.setItem("ITEM_LIST", JSON.stringify(obj));
        return obj;
      }
    }
    case "REMOVE_CART": {
      if (!!action.payload) {
        state.cartList.splice(action.payload.index, 1);
        state.cartList = [...state.cartList];
        const obj = { ...state, cartList: [...state.cartList] };
        sessionStorage.setItem("ITEM_LIST", JSON.stringify(obj));
      }
      return state;
    }

    case "STATUS": {
      state.status = action.payload;
      sessionStorage.setItem("STATUS", action.payload);
      return state;
    }
    case "ID": {
      state.id = action.payload;
      sessionStorage.setItem("ID", action.payload);
      return state;
    }
    default:
      return state;
  }
};

export default cartReducer;

//https://github.com/sudheerj/javascript-interview-questions
