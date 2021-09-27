export const addNewProduct= (product)=>{
  return {
    type: "ADD_NEW_PRODUCT",
    payload: product,
  };
}

export const getProduct = (product) => {
  return {
    type: "GET_PRODUCT",
    payload: product,
  };
};