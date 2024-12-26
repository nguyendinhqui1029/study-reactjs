const categoryApi = {
  getAllCategory: async () => {},
  getCategoryByIdSubCategory: async (idSubCategory = "null") => {
    try {
      const header = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      // const urlRequest = `https://api-json-server-290621.herokuapp.com/api/categories?idSubCategory=${idSubCategory}`;
      // const response = await fetch(urlRequest, header);
      // const responseJson = await response.json();
      // return responseJson;
      return [
        {
          name: "Sản phẩm 1",
          subCategory: []
        },
        {
          name: "Sản phẩm 2",
          subCategory: [
            {
              name: "Sản phẩm 2-1",
              subCategory: []
            }
          ]
        },
        {
          name: "Sản phẩm 3",
          subCategory: [
            {
              name: "Sản phẩm 3-1",
              subCategory: []
            }
          ]
        }
      ]
    } catch (error) {
      console.log(error);
    }
  },
};

export default categoryApi;