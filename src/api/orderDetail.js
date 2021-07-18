const uri = "https://api-json-server-290621.herokuapp.com/api/";
const orderDetailApi = {
  getAllorderDetail: async () => {},
  getorderDetailById: async (id) => {
    const url = `${uri}orderCarts/${id}`;
    const headers = {
      headers: {
        method:"GET",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const response = await fetch(url, headers);
    const responseJson = await response.json();
    return responseJson;
  },
  addOrderDetail: async (orderDetail)=>{
     const url = `${uri}orderCarts`;
     const headers = {
       method: "POST",
       body: JSON.stringify(orderDetail),
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
     };
     const response = await fetch(url, headers);
     const responseJson = await response.json();
     return responseJson;
  }
};

export default orderDetailApi;
