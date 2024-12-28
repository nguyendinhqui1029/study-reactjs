var uri = "https://api-json-server-290621.herokuapp.com/api/products";
const productApi = {
  getProductList: async (categoryId = null, _limit = 10, _page = 1) => {
    // const headers = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // };
    // let url = `${uri}?_limit=${_limit}&_page=${_page}`;
    // if (categoryId) {
    //   url = `${uri}?categoryId=${categoryId}&_limit=${_limit}&_page=${_page}`;
    // }

    // const response = await fetch(url, headers);
    // const responseJson = await response.json();
    // return responseJson;
    return {
      pagination: {
        totalRow: 20
      },
data: [
  {
    "id": 1,
    "discount": 6,
    "isHot": true,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Nước cam ép",
    "price": "131532"
  },
  {
    "id": 2,
    "discount": 19,
    "isHot": false,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Trà sữa",
    "price": "72684"
  },
  {
    "id": 3,
    "discount": 4,
    "isHot": true,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Bánh mì sandwich",
    "price": "123512"
  },
  {
    "id": 4,
    "discount": 0,
    "isHot": false,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Bánh pizza",
    "price": "80251"
  },
  {
    "id": 5,
    "discount": 20,
    "isHot": true,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Cà phê đen",
    "price": "150250"
  },
  {
    "id": 6,
    "discount": 16,
    "isHot": false,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Sinh tố bơ",
    "price": "110382"
  },
  {
    "id": 7,
    "discount": 3,
    "isHot": true,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Sữa chua trái cây",
    "price": "67825"
  },
  {
    "id": 8,
    "discount": 17,
    "isHot": false,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Mì Ý",
    "price": "134320"
  },
  {
    "id": 9,
    "discount": 15,
    "isHot": true,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Bánh bao",
    "price": "54012"
  },
  {
    "id": 10,
    "discount": 9,
    "isHot": false,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Burger",
    "price": "146658"
  },
  {
    "id": 11,
    "discount": 18,
    "isHot": true,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Phở",
    "price": "98540"
  },
  {
    "id": 12,
    "discount": 1,
    "isHot": false,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Bánh xèo",
    "price": "126920"
  },
  {
    "id": 13,
    "discount": 13,
    "isHot": true,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Nước ép dứa",
    "price": "86875"
  },
  {
    "id": 14,
    "discount": 7,
    "isHot": false,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Nước ép táo",
    "price": "155340"
  },
  {
    "id": 15,
    "discount": 5,
    "isHot": true,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Trà đào",
    "price": "97042"
  },
  {
    "id": 16,
    "discount": 11,
    "isHot": false,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Nước chanh",
    "price": "54828"
  },
  {
    "id": 17,
    "discount": 14,
    "isHot": true,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Nước ép cà rốt",
    "price": "103539"
  },
  {
    "id": 18,
    "discount": 2,
    "isHot": false,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Mì tôm",
    "price": "71763"
  },
  {
    "id": 19,
    "discount": 8,
    "isHot": true,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Cơm tấm",
    "price": "132973"
  },
  {
    "id": 20,
    "discount": 0,
    "isHot": false,
    "imageUrl": "https://glofood.vn/upload/images/nguye%CC%82n%20lie%CC%A3%CC%82u%20pha%20ts-03-01(1).jpg",
    "productName": "Cháo",
    "price": "83264"
  }
]

    }
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
