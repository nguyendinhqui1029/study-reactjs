import React from "react";
import OrderDetail from "../../component/OrderDetail/OrderDetail";
import "./CompletedOrder.scss";

function CompletedOrder() {
  return (
    <div className="ContainerCompletedOrder">
      <OrderDetail orderDetail={orderDetail} />
    </div>
  );
}

export default CompletedOrder;
const orderDetail = {
  idOrder: "#100000326",
  orderDate: "26/06/2021",
  payMethod: "Thanh toán khi giao hàng (COD)",
  listProduct: [
    {
      id: "1",
      name: "Asus TP550LA-CJ040H",
      price: "10.950.000",
      amount: 1,
      intoMoney: "10.950.000",
    },
    {
      id: "2",
      name: "Asus TP550LA-CJ045H",
      price: "10.950.000",
      amount: 1,
      intoMoney: "10.950.000",
    },
  ],
  intoMoney: "10.990.000",
};
