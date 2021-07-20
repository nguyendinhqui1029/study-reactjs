import React, { useState, useEffect } from "react";
import NavigateQuickly from "./../../component/NavigateQuickly/NavigateQuickly";
import Header from "./../../component/Header/Header";
import Input from "./../../component/Input/Input";
import { Field, Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import Table from "./../../component/Table/Table";
import orderDetailApi from "../../api/orderDetail";
import Yup from "../../validation/CustomValidation";
import { useSelector } from "react-redux";
import Loading from "./../../component/Loading/Loading";
import "./MyOrder.scss";
import {
  calculateIntoMoney,
  calculateTotal,
  formatCurrency,
} from "../../util/util";
const cartModel = {
  cartList: [],
  deliveryMethod: { fee: 0 },
  paymentMethod: null,
  address: {
    name: "",
    email: "",
    address: "",
    city: "",
    district: "",
    description: "",
  },
  addressOther: {
    nameOther: "",
    emailOther: "",
    addressOther: "",
    cityOther: "",
    districtOther: "",
    descriptionOther: "",
  },
  createdAt: 0,
  id: "",
};
function MyOrder() {
  const [orderDetail, setOrderDetail] = useState(cartModel);
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [dataList, setDataList] = useState([]);
  const id = useSelector((cart) => cart.cart.id);
  useEffect(() => {
    if (id !== "") {
      orderDetailApi.getorderDetailById(id).then((result) => {
        if (result.hasOwnProperty("id")) {
          setShowOrderDetail(true);
          setOrderDetail(result);
          setDataList(calculateIntoMoney(result.cartList));
        } else {
          setShowOrderDetail(false);
          setIsShowLoading(false);
        }
      });
    }
  }, []);
  const submitSearch = (value) => {
    setShowOrderDetail(false);
    setIsShowLoading(true);
    orderDetailApi.getorderDetailById(value.idOrder).then((result) => {
      if (result.hasOwnProperty("id")) {
        setShowOrderDetail(true);
        setOrderDetail(result);
        setDataList(calculateIntoMoney(result.cartList));
        setIsShowLoading(false);
      } else {
        setShowOrderDetail(false);
        setIsShowLoading(false);
      }
    });
  };
  const initialValue = {
    idOrder: id,
  };
  const validations = Yup.object().shape({
    idOrder: Yup.string().requiredCustome("Vui lòng nhập mã đơn hàng của bạn."),
  });
  return (
    <div className="MyOrder">
      <div className="ContainerBody">
        <div className="ContainerBodyLeft"></div>
        <div className="ContainerBodyRight">
          <div className="NavQuickly">
            <NavigateQuickly />
          </div>
          <div className="Header">
            <Header title="Kiểm tra đơn hàng" />
          </div>
          <div className="ContainerSearchOrder">
            <Formik
              initialValues={initialValue}
              validationSchema={validations}
              onSubmit={(value) => submitSearch(value)}
            >
              <Form className="FormInfo">
                <label htmlFor="idOrder">Nhập mã đơn hàng</label>
                <Field
                  name="idOrder"
                  placeholder="VD: 1231212"
                  component={Input}
                  type="text"
                />
                <Button className="Button" type="submit">
                  Xem ngay
                </Button>
              </Form>
            </Formik>
          </div>
          <div className="ContainerOrderDetail">
            <Loading isLoading={isShowLoading} />
            {showOrderDetail ? (
              <div className="ContainerHeader">
                <Header title="Thông tin đơn hàng" />
                <div className="ContainerContent">
                  <span>
                    Đơn hàng của
                    <span className="CustomerName">
                      {orderDetail.address.name}
                    </span>
                    <span className="IdOrder">({orderDetail.id})</span>
                    lúc
                    {new Date(orderDetail.createdAt).toLocaleDateString(
                      "en-GB"
                    )}
                  </span>
                  <Table dataList={dataList} headerList={headerList} />
                  <div className="ContainerFooterInfo">
                    <div className="ContainerFooterInfoLeft">
                      <Header title="Địa chỉ nhận hàng" />
                      <div className="ContainerContent">
                        <span className="Label">Người nhận hàng:</span>
                        <span className="Content">
                          {orderDetail.address.name}
                        </span>
                      </div>
                      <div className="ContainerContent">
                        <span className="Label">Số điện thoại:</span>
                        <span className="Content">011123443</span>
                      </div>
                      <div className="ContainerContent MarginBottom20">
                        <span className="Label">Địa chỉ:</span>
                        <span className="Content">
                          {orderDetail.address.address}
                        </span>
                      </div>
                      <Header title="Thông tin thanh toán" />
                      <div className="ContainerContent">
                        <span className="Label">Người thanh toán:</span>
                        <span className="Content">
                          {orderDetail.address.name ||
                            orderDetail.addressOther.nameOther}
                        </span>
                      </div>
                      <div className="ContainerContent">
                        <span className="Label">Số tiền đã thanh toán:</span>
                        <span className="Content">Chị A</span>
                      </div>
                      <div className="ContainerContent">
                        <span className="Label">Số tiền chưa thanh toán:</span>
                        <span className="Content">Chị A</span>
                      </div>
                    </div>
                    <div className="ContainerFooterInfoRight">
                      <div className="ContainerBox">
                        <div className="ContainerContent">
                          <span className="Label">Phí giao hàng</span>
                          <span className="Content">
                            {formatCurrency(orderDetail.deliveryMethod.fee)}
                            <sup>đ</sup>
                          </span>
                        </div>
                        <div className="ContainerContent">
                          <span className="Label">Tổng thanh toán</span>
                          <span className="Content">
                            {formatCurrency(
                              calculateTotal(orderDetail.cartList) +
                                orderDetail.deliveryMethod.fee
                            )}
                            <sup>đ</sup>
                          </span>
                        </div>
                        <div className="ContainerContent">
                          <div className="Status">Trạng thái đơn hàng</div>
                          <div className="StatusName">Chưa thanh toán</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : !isShowLoading ? (
              <span className="NotFound">
                Không tìm thấy đơn hàng của bạn. Vui lòng kiểm tra lại thông
                tin.
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrder;

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
    label: "GIẢM GIÁ (%)",
    propertyMapping: "discount",
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
  {
    flex: 2,
    label: "THÀNH TIỀN",
    propertyMapping: "intoMoney",
    type: "LABLE",
    formatCurrency: true,
  },
];
