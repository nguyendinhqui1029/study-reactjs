export const calculateDiscount = (price, discount) => {
  return price * ((100 - discount) / 100);
};

export const formatCurrency = (value) => {
  return parseInt(value).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export const calculateTotal = (cartList) => {
  let total = 0;
  cartList.forEach((cart) => {
    total +=
      calculateDiscount(cart.price, cart.discount) * parseInt(cart.amount);
  });
  return total;
};

export const calculateIntoMoney = (cartList) => {
  return cartList.map((item) => {
    const hasDiscount = item.discount;
    const total =
      (hasDiscount
        ? calculateDiscount(item.price, item.discount)
        : parseFloat(item.price)) * parseInt(item.amount);
    item.price = parseFloat(item.price);
    return { ...item, intoMoney: total };
  });
};
export const calculateAmount = (cartList) => {
  let totalAmount = 0;
  cartList.forEach((cart) => {
    totalAmount += parseInt(cart.amount);
  });
  return totalAmount;
};
