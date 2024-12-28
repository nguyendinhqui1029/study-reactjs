const categoryApi = {
  getAllCategory: async () => {},
  getCategoryByIdSubCategory: async (idSubCategory = "null") => {
    try {
      // const header = {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      // };
      // const urlRequest = `https://api-json-server-290621.herokuapp.com/api/categories?idSubCategory=${idSubCategory}`;
      // const response = await fetch(urlRequest, header);
      // const responseJson = await response.json();
      // return responseJson;
      return [
        {
          id: '1',
          name: "Sản phẩm 1",
          subCategory: []
        },
        {
          id: '2',
          name: "Sản phẩm 2",
          subCategory: [
            {
               id: '21',
              name: "Sản phẩm 2-1",
              subCategory: []
            }
          ]
        },
        {
          id: '3',
          name: "Sản phẩm 3",
          subCategory: [
            {
              id: '31',
              name: "Sản phẩm 3-1",
              subCategory: []
            }
          ]
        }
      ]
    // eslint-disable-next-line no-unreachable
    } catch (error) {
      console.log(error);
    }
  },
};

export default categoryApi;