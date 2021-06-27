import React from "react";
import PropTypes from "prop-types";
import {
  TYPE_COLUMN_TABLE,
} from "../../Constant/Constant.js";
import Table from "../../component/Table/Table";
import './OrderInfo.scss';

OrderInfo.propTypes = {};
OrderInfo.defaultProps = {};

// Data Table Example

const headerList = [
  {
    flex: 1,
    label: "",
    propertyMapping: "imageUrl",
    type: TYPE_COLUMN_TABLE.IMAGE,
  },
  {
    flex: 4,
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
    type: TYPE_COLUMN_TABLE.LABLE,
  },
  {
    flex: 1,
    label: "THÀNH TIỀN",
    propertyMapping: "intoMoney",
    type: TYPE_COLUMN_TABLE.LABLE,
  }
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

function OrderInfo(props) {
  return (
    <div className="OrderInfo">
      <div className="HeaderContainer">
        <h3 className="HeaderContent">3. THÔNG TIN ĐƠN HÀNG</h3>
      </div>
      <div className="ContentContainer">
        <div className="ProductInfo">
          <Table dataList={dataList} headerList={headerList} />
        </div>
        <div className="InfoPay">
          <div className="IntoMoney">
            <span>Thành tiền</span>
            <span>
              23,900,00 <sup>đ</sup>
            </span>
          </div>
          <div className="IntoMoney">
            <span>Phí vận chuyển</span>
            <span>
              23,900,00 <sup>đ</sup>
            </span>
          </div>
          <div className="Pay">
            <span>Thanh toán</span>
            <span>
              23,900,00 <sup>đ</sup>
            </span>
          </div>
          <div className="ButtonAdd">
            <span>Đặt hàng</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;
