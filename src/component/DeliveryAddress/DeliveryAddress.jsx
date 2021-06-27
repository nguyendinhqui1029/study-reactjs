import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from "react-router-dom";
import './DeliveryAddress.scss';
DeliveryAddress.propTypes = {
  
};
DeliveryAddress.defaultProps = {};
function DeliveryAddress(props) {
  const [isShowOtherAddress, setShowOtherAddress] = useState(false);
  function changeOtherAddress(event) {
    setShowOtherAddress(event.target.checked);
  }
  return (
    <div className="DeliveryAddress">
      <div className="HeaderContainer">
        <h3 className="HeaderContent">1. ĐỊA CHỈ THANH TOÁN VÀ GIAO HÀNG</h3>
      </div>
      <div className="ContentContainer">
        <h3 className="HeaderContent">THÔNG TIN THANH TOÁN</h3>
        <div className="ContainerLink">
          <Link to="link123" className="RegisterLink">
            Đăng ký tài khoản mua hàng
          </Link>
          <span>|</span>
          <Link to="link124" className="LoginLink">
            Đăng nhập
          </Link>
        </div>
        <div className="MainInfo">
          <h5>Mua hàng không cần tài khoản</h5>
          <form>
            <div className="FormInfo">
              <input type="text" name="name" placeholder="Họ và Tên" />

              <input type="text" name="phone" placeholder="Số điện thoại" />

              <input type="text" name="email" placeholder="Email" />

              <input type="text" name="address" placeholder="Address" />

              <select>
                <option selected value={null}>
                  Vui lòng chọn Tỉnh/Thành Phố
                </option>
                <option value="mango">Mango</option>
              </select>

              <select>
                <option selected value="null">
                  Vui lòng chọn Quận/Huyện
                </option>
                <option value="mango">Mango</option>
              </select>

              <textarea
                value=""
                onChange={() => {}}
                placeholder="Ghi chú đơn hàng"
                rows="5"
              />
            </div>
          </form>
        </div>
        <h3 className="HeaderContent">THÔNG TIN GIAO HÀNG</h3>
        <div className="SubInfo">
          <span>
            <input
              type="checkbox"
              name="otherAddress"
              placeholder="Họ và Tên"
              onChange={(event) => changeOtherAddress(event)}
            />
            <span>Giao hàng địa chỉ khác</span>
          </span>
          <form className={isShowOtherAddress ? "" : "SubForm"}>
            <div className="FormInfo">
              <input type="text" name="name" placeholder="Họ và Tên" />

              <input type="text" name="phone" placeholder="Số điện thoại" />

              <input type="text" name="email" placeholder="Email" />

              <input type="text" name="address" placeholder="Address" />

              <select>
                <option selected value="null">
                  Vui lòng chọn Tỉnh/Thành Phố
                </option>
                <option value="mango">Mango</option>
              </select>

              <select>
                <option selected value="null">
                  Vui lòng chọn Quận/Huyện
                </option>
                <option value="mango">Mango</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAddress;