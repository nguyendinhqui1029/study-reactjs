import React from "react";
import PropTypes from "prop-types";
import Table from "../../component/Table/Table";
import './OrderInfo.scss';

OrderInfo.propTypes = {
  intoMoney: PropTypes.number.isRequired,
  totalPay: PropTypes.number.isRequired,
  deliveryFee: PropTypes.number.isRequired,
  handleClickOrder: PropTypes.func.isRequired,
  dataList: PropTypes.array,
  headerList: PropTypes.array.isRequired,
};
OrderInfo.defaultProps = {
  dataList:[]
};
function OrderInfo(props) {
  const {
    intoMoney,
    totalPay,
    deliveryFee,
    handleClickOrder,
    dataList,
    headerList,
  } = props;
  function handleEventClickOrder(item) {
    if(handleClickOrder){
      handleClickOrder(item);
    }
  }
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
              {intoMoney} <sup>đ</sup>
            </span>
          </div>
          <div className="IntoMoney">
            <span>Phí vận chuyển</span>
            <span>
              {deliveryFee} <sup>đ</sup>
            </span>
          </div>
          <div className="Pay">
            <span>Thanh toán</span>
            <span>
              {totalPay} <sup>đ</sup>
            </span>
          </div>
          <div className="ButtonAdd">
            <span
              onClick={() =>
                handleEventClickOrder({
                  intoMoney,
                  totalPay,
                  deliveryFee,
                  dataList,
                })
              }
            >
              Đặt hàng
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;
