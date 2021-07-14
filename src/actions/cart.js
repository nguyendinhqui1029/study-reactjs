export const addToCart= (cart)=>{
  return {
    type: "ADD_CART",
    payload: cart,
  };
}
export const updateCartList = (cartList) => {
  return {
    type: "UPDATE_CART",
    payload: cartList,
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
