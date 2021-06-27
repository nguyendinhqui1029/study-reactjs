import React from "react";
import PropTypes from "prop-types";
import Header from "../../component/Header/Header";
import NavigateQuickly from "../../component/NavigateQuickly/NavigateQuickly";
import CardNews from "../../component/CardNews/CardNews";
import DeliveryAddress from "../../component/DeliveryAddress/DeliveryAddress";
import PayInfo from "../../component/PayInfo/PayInfo";
import OrderInfo from "../../component/OrderInfo/OrderInfo";
import OrderDetail from "../../component/OrderDetail/OrderDetail";
import Table from "../../component/Table/Table";

import "./Product.scss";
import {TYPE_COLUMN_TABLE,ACTION_TYPE_TABLE} from "../../Constant/Constant.js";
Product.propTypes = {};


//NavigateQuickly
const listMenuQuick = [
  {
    id: "1",
    label: "Trang chu",
    path: "#",
  },
  {
    id: "2",
    label: "San pham",
    path: "#",
  },
  {
    id: "3",
    label: "Chi tiet san pham",
    path: "#",
  },
];


//orderDetail
const orderDetail = {
  idOrder: "#100000326",
  orderDate: "26/06/2021",
  payMethod: "Thanh toán khi giao hàng (COD)",
  listProduct: [
    {
      id: "1",
      name: 'Asus TP550LA-CJ040H - Core i3 4030U / 15.6" Touch / 4GB (Đen)',
      price: "10.950.000",
      amount: 1,
      intoMoney: "10.950.000",
    },
    {
      id: "2",
      name: 'Asus TP550LA-CJ040H - Core i3 4030U / 15.6" Touch / 4GB (Đen)',
      price: "10.950.000",
      amount: 1,
      intoMoney: "10.950.000",
    },
  ],
  intoMoney: "10.990.000",
};

// Data Table Example

const headerList = [
  {
    flex: 1,
    label: "",
    propertyMapping: "imageUrl",
    type: TYPE_COLUMN_TABLE.IMAGE,
  },
  {
    flex: 6,
    label: "TÊN SẢN PHẨM",
    propertyMapping: "name",
    type: TYPE_COLUMN_TABLE.LABLE,
  },
  {
    flex: 2,
    label: "GIÁ",
    propertyMapping: "price",
    type: TYPE_COLUMN_TABLE.LABLE,
  },
  {
    flex: 1,
    label: "SỐ LƯỢNG",
    propertyMapping: "amount",
    type: TYPE_COLUMN_TABLE.INPUTTEXT,
  },
  {
    flex: 2,
    label: "THÀNH TIỀN",
    propertyMapping: "intoMoney",
    type: TYPE_COLUMN_TABLE.LABLE,
  },
  {
    flex: 1,
    label: "",
    actionType: [ACTION_TYPE_TABLE.DELETE, ACTION_TYPE_TABLE.UPDATE],
    type: TYPE_COLUMN_TABLE.ACTION,
  },
];

const dataList = [
  {
    id: "P00001",
    name: 'Asus TP550LA-CJ040H - Core i3 4030U / 15.6" Touch / 4GB (Đen)',
    price: "10.950.000",
    amount: 1,
    intoMoney: "10.950.000",
    imageUrl: require("../../assets/images/camera.jpg").default,
  },
  {
    id: "P00002",
    name: 'Asus TP550LA-CJ040H - Core i3 4030U / 15.6" Touch / 4GB (Đen)',
    price: "2",
    amount: 1,
    intoMoney: "10.950.000",
    imageUrl: require("../../assets/images/camera.jpg").default,
  },
];
// End Data Table Example
function Product(props) {


  return (
    <div>
      {/* Table */}
      <Table dataList={dataList} headerList={headerList} />

      {/* Header */}
      <Header title="San pham" />

      {/* NavigateQuickly */}
      <NavigateQuickly listQuickLink={listMenuQuick} />

      {/* OrderDetail */}
      <OrderDetail orderDetail={orderDetail}></OrderDetail>

      {/* DeliveryAddress */}
      <DeliveryAddress />

      {/* PayInfo */}
      <PayInfo />

      {/* OrderInfo */}
      <OrderInfo />

      

      {/* CardNews */}
      <CardNews></CardNews>

      {/* Product */}
      <div className="Container">
        
      </div>

      
    </div>
  );
}

export default Product;
