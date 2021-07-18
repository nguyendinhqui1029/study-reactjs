import React, { useEffect, useState } from "react";
import DeliveryAddress from "../../component/DeliveryAddress/DeliveryAddress";
import PayInfo from "../../component/PayInfo/PayInfo";
import OrderInfo from "../../component/OrderInfo/OrderInfo";

import "./Payment.scss";
import { useSelector, useDispatch } from "react-redux";
import { calculateIntoMoney, calculateTotal } from "../../util/util";
import {
  addDeliveryMethod,
  addPaymentMethod,
  setID,
  setStatus,
} from "../../actions/cart";
import orderDetailApi from "../../api/orderDetail";
import { useHistory } from "react-router-dom";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [isSubmitForm, setIsSubmitForm] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState([]);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const history = useHistory();
  let cartList = useSelector((carts) => carts.cart.cartList);
  // let address = useSelector((carts) => carts.cart.address);
  // let addressOther = useSelector((carts) => carts.cart.addressOther);
  let cartDetail = useSelector((carts) => carts.cart);
  const disPatch = useDispatch();
  cartList = calculateIntoMoney(cartList);

  useEffect(() => {
    setPaymentMethod(payMethod);
    setDeliveryMethod(deliveryMethod);
  }, [payMethod, deliveryMethod]);

  const changeDeliveryMethod = (item) => {
    disPatch(addDeliveryMethod(item));
    setDeliveryFee(item.fee);
  };
  const changePayMethod = (item) => {
    disPatch(addPaymentMethod(item));
  };

  const handleClickOrder = () => {
    setIsSubmitForm(true);
    setTimeout(() => {
      orderDetailApi.addOrderDetail(cartDetail).then((result) => {
        disPatch(setID(result.id));
        disPatch(setStatus("Waiting Approval"));
        history.push("/cart-detail/completed");
      });
      setIsSubmitForm(false);
    }, 3000);
  };

  return (
    <div className="Payment">
      <div className="ContainerDeliveryAddress">
        <DeliveryAddress isSubmitForm={isSubmitForm} />
      </div>
      <div className="ContainerPayInfo">
        <PayInfo
          payMethod={payMethod}
          deliveryMethod={deliveryMethod1}
          changeDeliveryMethod={changeDeliveryMethod}
          changePayMethod={changePayMethod}
        />
      </div>
      <div className="ContainerOrderInfo">
        <OrderInfo
          intoMoney={calculateTotal(cartList)}
          deliveryFee={deliveryFee}
          totalPay={calculateTotal(cartList) + deliveryFee}
          dataList={cartList}
          handleClickOrder={handleClickOrder}
          headerList={headerList}
        />
      </div>
    </div>
  );
}

export default Payment;

const payMethod = [
  {
    id: "P001",
    title: "Thanh toán khi giao hàng (COD)",
  },
  {
    id: "P002",
    title: "Thanh toán online qua cổng OnePay bằng thẻ ATM nội địa",
  },
  {
    id: "P003",
    title: "Chuyển khoản qua ngân hàng",
  },
  {
    id: "P004",
    title: "Thanh toán online qua cổng OnePay bằng thẻ Visa/Master/JCB",
  },
];

const headerList = [
  {
    flex: 1,
    label: "",
    propertyMapping: "imageUrl",
    type: "IMAGE",
    formatCurrency: false,
  },
  {
    flex: 3,
    label: "TÊN SẢN PHẨM",
    propertyMapping: "productName",
    type: "LABLE",
    formatCurrency: false,
  },
  {
    flex: 2,
    label: "GIÁ",
    propertyMapping: "price",
    type: "LABLE",
    formatCurrency: true,
  },
  {
    flex: 2,
    label: "SỐ LƯỢNG",
    propertyMapping: "amount",
    type: "LABLE",
    formatCurrency: false,
  },
];

const deliveryMethod1 = [
  {
    id: "D001",
    title: "Vui lòng chọn cách vận chuyển",
    fee: 0,
  },
  {
    id: "D002",
    title: "Chuyển phát nhanh",
    fee: 30000,
  },
  {
    id: "D003",
    title: "Chuyển phát qua bưu điện",
    fee: 30000,
  },
];
