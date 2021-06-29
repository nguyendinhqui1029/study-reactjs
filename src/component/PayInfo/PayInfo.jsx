import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PayInfo.scss";
PayInfo.propTypes = {
  deliveryMethod: PropTypes.array.isRequired,
  payMethod: PropTypes.array.isRequired,
  changeDeliveryMethod: PropTypes.func,
  changePayMethod: PropTypes.func,
};
PayInfo.defaultProps = {
  changeDeliveryMethod: null,
  changePayMethod: null,
};
function PayInfo(props) {
  const { deliveryMethod, payMethod, changeDeliveryMethod, changePayMethod } =
    props;
  const [deliverySelected, setDeliverySelected] = useState(deliveryMethod[0]);
  const [payMethodSelected, setPayMethodSelected] = useState(payMethod[0]);

  function handleChangeDeliveryMethod(valueSelected) {
    if (changeDeliveryMethod) {
      const item = deliveryMethod.find((item) => {
        return item.id === valueSelected;
      });
      changeDeliveryMethod(item);
      setDeliverySelected(item);
    }
  }

  function handleChangePayMethod(valueSelected) {
    if (changePayMethod) {
      const item = payMethod.find((item) => {
        return item.id === valueSelected;
      });
      changePayMethod(item);
      setPayMethodSelected(item);
    }
  }
  return (
    <div className="PayInfo">
      <div className="HeaderContainer">
        <h3 className="HeaderContent">2. Thanh toán và vận chuyển</h3>
      </div>
      <div className="ContentContainer">
        <h3 className="HeaderContent">Thông tin thanh toán</h3>
        <div className="DeliveryContainer">
          <select
            onChange={(event) => handleChangeDeliveryMethod(event.target.value)}
          >
            {deliveryMethod.map((delivery) => {
              return (
                <option
                  key={delivery.id}
                  value={delivery.id}
                  selected={delivery.id === deliverySelected.id}
                >
                  {delivery.title}
                </option>
              );
            })}
          </select>
        </div>
        <h3 className="HeaderContent">Thanh toán</h3>
        <div className="DeliveryContainer">
          {payMethod.map((pay, index) => {
            return (
              <span key={pay.id}>
                <input
                  type="radio"
                  id={pay.id}
                  name="deliveryPay"
                  value={payMethodSelected.id}
                  checked={pay.id === payMethodSelected.id}
                  onChange={() => handleChangePayMethod(pay.id)}
                />
                <span>
                  <label htmlFor={pay.id}>{pay.title}</label>
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PayInfo;
