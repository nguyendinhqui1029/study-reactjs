import React from "react";
import PropTypes from "prop-types";
import "./OrderDetailPrint.scss";
import Table from "./../Table/Table";
OrderDetailPrint.propTypes = {
  refPrint: PropTypes.object,
  productList: PropTypes.array,
};

OrderDetailPrint.defaultProps = {
  refPrint: null,
  productList: [],
};

const header = [
  {
    flex: 1,
    label: "TT",
    type: "LABLE",
    propertyMapping: "index",
  },
  {
    flex: 4,
    label: "TÊN SẢN PHẨM",

    type: "LABLE",
  },
  {
    flex: 2,
    label: "GIÁ",
    propertyMapping: "price",
    type: "LABLE",
  },
  {
    flex: 2,
    label: "GIẢM GIÁ",
    propertyMapping: "discount",
    type: "LABLE",
  },
  {
    flex: 2,
    label: "SỐ LƯỢNG",
    propertyMapping: "amount",
    type: "LABLE",
  },
  {
    flex: 2,
    label: "THÀNH TIỀN",
    propertyMapping: "intoMoney",
    type: "LABLE",
  },
];
function OrderDetailPrint(props) {
  const { refPrint, productList } = props;
  const date = new Date();
  const day = `0${date.getDate()}`.substr(-2);
  const month = `0${date.getMonth() + 1}`.substr(-2);
  const year = date.getFullYear();
  const listSmallerThree = [];
  const listBiggerThree = [];
  productList.forEach((item) => {
    if (item.productOrder.length <= 3) {
      listSmallerThree.push(item);
    } else {
      listBiggerThree.push(item);
    }
  });
  return (
    <div className="OrderDetailPrint" ref={refPrint}>
      {listSmallerThree.concat(listBiggerThree).map((item) => {
        return (
          <div className={item.productOrder.length > 3 ? "PageMax" : "PageMin"}>
            <div className="HeaderPrint">
              <h3>Thông tin đơn hàng</h3>
            </div>
            <div className="Date">
              <span className="text-color">
                Ngày(date) {day} Tháng(month) {month} Năm(year) {year}.
              </span>
            </div>

            <div className="Header">
              <div className="LogoCompany">
                <img
                  src={require("../../assets/images/logo.png").default}
                  alt="Logo Company"
                />
              </div>
              <div className="InfoCompany">
                <div className="Group">
                  <span className="Label">Địa chỉ (Address):</span>
                  <span className="Content">
                    50/2 Bình Tân, Bình Mỹ, Châu Phú.
                  </span>
                </div>
                <div className="Group">
                  <span className="Label">Điện thoại (Tel):</span>
                  <span className="Content">0777 203 042</span>
                </div>
                <div className="Group">
                  <span className="Label">Số tài khoản (Account No.):</span>
                  <span className="Content">12345665</span>
                </div>
              </div>
            </div>
            <div className="InfoBuyer">
              <div className="Group">
                <span className="Label">
                  Họ tên người mua hàng (Name of buyer):
                </span>
                <span className="Content">Nguyễn Văn A</span>
              </div>
              <div className="Group">
                <span className="Label">Địa chỉ (Address):</span>
                <span className="Content">
                  50/2 Bình Tân, Bình Mỹ, Châu Phú.
                </span>
              </div>
              <div className="Group">
                <span className="Label">Điện thoại (Tel):</span>
                <span className="Content">0777 203 042</span>
              </div>
              <div className="Group">
                <span className="Label">
                  Hình thức thanh toán (Payment term):
                </span>
                <span className="Content">COD</span>
              </div>
            </div>
            <div className="Order">
              <Table headerList={header} dataList={item.productOrder} />
            </div>
            <div className="Total">
              <div className="Group">
                <span className="Label">Tổng tiền:</span>
                <span className="Content">100000</span>
              </div>
              <div className="Group">
                <span className="Label">Tạm ứng:</span>
                <span className="Content">20000</span>
              </div>
              <div className="Group">
                <span className="Label">Phí VAT:</span>
                <span className="Content">10000</span>
              </div>
              <div className="Group">
                <span className="Label">Tổng thanh toán:</span>
                <span className="Content">80000</span>
              </div>
              <div className="Group">
                <span className="Label">Tổng thanh toán bằng chữ:</span>
                <span className="Content">Tám mươi ngàn.</span>
              </div>
            </div>
            <div className="pagebreak"></div>
          </div>
        );
      })}
    </div>
  );
}

export default OrderDetailPrint;
