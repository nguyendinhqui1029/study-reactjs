import React from "react";
import PropTypes from "prop-types";
import "./PayInfo.scss";
PayInfo.propTypes = {};
PayInfo.defaultProps = {};
function PayInfo(props) {
  return (
    <div className="PayInfo">
      <div className="HeaderContainer">
        <h3 className="HeaderContent">2. Thanh toán và vận chuyển</h3>
      </div>
      <div className="ContentContainer">
        <h3 className="HeaderContent">Thông tin thanh toán</h3>
        <div className="DeliveryContainer">
          <select>
            <option selected value={null}>
              Vui lòng chọn loại vận chuyển
            </option>
            <option value="mango">Mango</option>
          </select>
        </div>
        <h3 className="HeaderContent">Thanh toán</h3>
        <div className="DeliveryContainer">
          <span>
            <input type="radio" name="deliveryPay" />
            <span>Thanh toán online qua cổng OnePay bằng thẻ ATM nội địa</span>
          </span>
          <span>
            <input type="radio" name="deliveryPay" />
            <span>Thanh toán khi giao hàng (COD)</span>
          </span>
          <span>
            <input type="radio" name="deliveryPay" />
            <span>Chuyển khoản qua ngân hàng</span>
          </span>
          <span>
            <input type="radio" name="deliveryPay" />
            <span>
              Thanh toán online qua cổng OnePay bằng thẻ Visa/Master/JCB
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default PayInfo;
