import React from "react";
import PropTypes from "prop-types";
import "./OrderDetail.scss";
import { calculateDiscount, formatCurrency } from "../../util/util";
OrderDetail.propTypes = {
  orderDetail: PropTypes.object.isRequired,
};

function OrderDetail(props) {
  const { orderDetail } = props;
  const { idOrder, orderDate, payMethod, listProduct, intoMoney, deliveryFee } =
    orderDetail;
  return (
    <div className="OrderDetail">
      <h3 className="IdOrder">
        Mã đơn hàng của bạn:<span>{idOrder}</span>
      </h3>
      <div className="ContainerOrder">
        <span className="Label">Ngày đặt:</span>
        <span className="Content">{orderDate}</span>
      </div>
      <div className="ContainerOrder">
        <span className="Label">Phương thức thanh toán:</span>
        <span className="Content">{payMethod}</span>
      </div>
      <h2>THÔNG TIN ĐƠN HÀNG</h2>
      <div className="TableProduct">
        <div className="HeaderTable">
          <div className="HeaderSTT">STT</div>
          <div className="HeaderProduct">Sản phẩm</div>
          <div className="HeaderPrice">Đơn giá</div>
          <div className="HeaderAmount">Số lượng</div>
          <div className="HeaderIntoMoney">Thành tiền</div>
        </div>
        {listProduct.map((product, index) => {
          return (
            <div className="ContentTable" key={product.id}>
              <div className="ContentSTT">{index + 1}</div>
              <div className="ContentProduct">{product.productName}</div>
              <div className="ContentPrice">
                {formatCurrency(product.price)}
              </div>
              <div className="ContentAmount">{product.amount}</div>
              <div className="ContentIntoMoney">
                <span style={{ padding: "5px" }}>
                  {formatCurrency(
                    calculateDiscount(product.price, product.discount) *
                      product.amount
                  )}
                </span>

                <sup>đ</sup>
              </div>
            </div>
          );
        })}
      </div>
      <div className="IntoMoney">
        <span className="Content">
          {formatCurrency(deliveryFee)} <sup>đ</sup>
        </span>
        <span className="Label">Phí vận chuyển:</span>
      </div>
      <div className="IntoMoney">
        <span className="Content">
          {formatCurrency(intoMoney + deliveryFee)} <sup>đ</sup>
        </span>
        <span className="Label">Tổng thanh toán:</span>
      </div>
    </div>
  );
}

export default OrderDetail;
