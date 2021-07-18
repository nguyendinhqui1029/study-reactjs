import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import orderDetailApi from "../../api/orderDetail";
import OrderDetail from "../../component/OrderDetail/OrderDetail";
import { calculateTotal } from "../../util/util";
import {
  resetCartList
} from "../../actions/cart";
import "./CompletedOrder.scss";

function CompletedOrder() {
  const id = useSelector((cart) => cart.cart.id);
  const dispatch = useDispatch();
  const [finalInfoMap, setFinalInfoMap] = useState({
    idOrder: "",
    orderDate: "",
    payMethod: "",
    listProduct: [],
    intoMoney: 0,
    deliveryFee: 0,
  });
  useEffect(() => {
    orderDetailApi.getorderDetailById(id).then((result) => {
      const date = new Date();
      const today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
      if (result.hasOwnProperty("id")) {
        const dataMapping = {
          idOrder: result.id,
          orderDate: today,
          payMethod: result.paymentMethod.title,
          listProduct: result.cartList,
          intoMoney: calculateTotal(result.cartList),
          deliveryFee: result.deliveryMethod.fee,
        };
        setFinalInfoMap(dataMapping);
        dispatch(resetCartList([]));
      }
    });
  }, [id]);

  return (
    <div className="ContainerCompletedOrder">
      <OrderDetail orderDetail={finalInfoMap} />
    </div>
  );
}

export default CompletedOrder;
