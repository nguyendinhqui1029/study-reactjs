var uri = "https://api-json-server-290621.herokuapp.com/api/products";
const productApi = {
  getProductList: async (categoryId = null, _limit = 10, _page = 1) => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    let url = `${uri}?_limit=${_limit}&_page=${_page}`;
    if (categoryId) {
      url = `${uri}?categoryId=${categoryId}&_limit=${_limit}&_page=${_page}`;
    }

    const response = await fetch(url, headers);
    const responseJson = await response.json();
    return responseJson;
  },
  getById: async (id) => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const url = `${uri}/${id}`;
    const response = await fetch(url, headers);
    const responseJson = await response.json();
    return responseJson;
  },
};

export default productApi;
