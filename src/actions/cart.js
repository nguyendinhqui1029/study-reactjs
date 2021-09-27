export const addToCart= (cart)=>{
  return {
    type: "ADD_ITEM_TO_CART",
    payload: cart,
  };
}

export const resetCartList = () => {
  return {
    type: "RESET_CART_LIST",
    payload: [],
  };
};

export const updateFeeOther = (feeOther) => {
  return {
    type: "UPDATE_FEE_OTHER",
    payload: feeOther,
  };
};
;
export const updateAmountToCart = (cart) => {
  return {
    type: "UPDATE_AMOUNT_CART",
    payload: cart,
  };
};
export const removeToCart = (cart) => {
  return {
    type: "REMOVE_CART",
    payload: cart,
  };
};


export const addAddress= (address)=>{
  return {
    type: "ADD_ADDRESS",
    payload: address,
  };
}
export const addAddressOther= (addressOther)=>{
  return {
    type: "ADD_ADDRESS_OTHER",
    payload: addressOther,
  };
}

export const addDeliveryMethod= (deliveryMethod)=>{
  return {
    type: "ADD_DELIVERY_METHOD",
    payload: deliveryMethod,
  };
}
export const addPaymentMethod= (paymentMethod)=>{
  return {
    type: "ADD_PAYMENT_METHOD",
    payload: paymentMethod,
  };
}

export const setStatus = (status) => {
  return {
    type: "STATUS",
    payload: status,
  };
};

export const setID = (id) => {
  return {
    type: "ID",
    payload: id,
  };
};
