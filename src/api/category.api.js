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
      const urlRequest = `https://api-json-server-290621.herokuapp.com/api/categories?idSubCategory=${idSubCategory}`;
      const response = await fetch(urlRequest, header);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  },
};

export default categoryApi;