const productApi = {
  getProductList: async (categoryId = null, _limit = 10, _page = 1) => {
  const uri = "https://api-json-server-290621.herokuapp.com/api/products";
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  let url =`${uri}?_limit=${_limit}&_page=${_page}`;
  if(categoryId){
      url = `${uri}?categoryId=${categoryId}&_limit=${_limit}&_page=${_page}`;
  }
 
  const response = await fetch(url, headers);
  const responseJson = await response.json();
  return responseJson;
},
  getById: async  (idProduct) => {},
};

export default productApi;
