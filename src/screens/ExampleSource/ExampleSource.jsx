import React, { useState } from "react";
import PropTypes from "prop-types";
import CardProduct from "../../component/CardProduct/CardProduct";
import FeaturedNews from "../../component/FeaturedNews/FeaturedNews";
import VerticalMenu from "../../component/VerticalMenu/VerticalMenu";
import Steper from "../../component/Steper/Steper";
import Pagination from "../../component/Pagination/Pagination";
import OrderInfo from "../../component/OrderInfo/OrderInfo";
import DeliveryAddress from "../../component/DeliveryAddress/DeliveryAddress";
import PayInfo from "../../component/PayInfo/PayInfo";
import Header from "../../component/Header/Header";
import NavigateQuickly from "../../component/NavigateQuickly/NavigateQuickly";
import OrderDetail from "../../component/OrderDetail/OrderDetail";
import CardNews from "../../component/CardNews/CardNews";
import Contact from "../../component/Contact/Contact";
import ContactForm from "../../component/ContactForm/ContactForm";
import Input from "../../component/Input/Input";
import SelectedInput from "../../component/SelectedInput/SelectedInput";

import {
  TYPE_COLUMN_TABLE,
  ACTION_TYPE_TABLE,
} from "../../constant/Constant.js";
import Table from "../../component/Table/Table";

import { Formik, Form, FastField } from "formik";
import Yup from "../../validation/CustomValidation";
import "./ExampleSource.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);
library.add(...iconList);

ExampleSource.propTypes = {};

function ExampleSource(props) {
  function clickBuyProduct(item) {
    console.log(item);
  }

  function getItemSeleted(item) {
    console.log(item);
  }

  function selectedCategory(item) {
    console.log(item);
  }

  //Paginaion
  function getPagination(item) {
    console.log(item);
  }

  //Table
  function calFieldIntoMoney(newValue, item, propertyName) {
    if (propertyName === "amount") {
      item.intoMoney = newValue * item.price;
      dataList[item.index] = item;
    }
  }

  //Handle order click order
  function clickOrder(orderInfo) {
    console.log("Data after click Order button", orderInfo);
  }

  const validations = Yup.object().shape({
    title: Yup.string().requiredCustome("Require field can't be empty"),
    option: Yup.string().requiredCustome("Require field can't be empty"),
  });

  const initialValues = {
    title: "",
    option: "",
  };

  const dataSource = [
    { value: "", label: "Vui lòng chon options" },
    { value: "1", label: "1" },
    { value: "2", label: "3" },
  ];
  return (
    <div className="Container">
      <div className="SubContainer">
        <div className="Layout">
          <Formik
            initialValues={initialValues}
            validationSchema={validations}
            onSubmit={(values) => console.log(values)}
          >
            {(formikProps) => {
              return (
                <Form style={{ width: "100%" }}>
                  <FastField
                    name="title"
                    component={Input}
                    type="text"
                    placeholder="Title"
                  />
                  <FastField
                    name="option"
                    component={SelectedInput}
                    dataSource={dataSource}
                  />
                  <button type="submit">submit</button>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div className="DataStructure">
          <p>
            import CardProduct from "../../component/CardProduct/CardProduct";
          </p>
          <p>//Khai báo hàm xử lí ở parent function clickBuyProduct(item)</p>
          <pre>{showDataExample(listProduct)}</pre>
        </div>
      </div>

      <div className="SubContainer">
        <div className="Layout">
          {listProduct.map((item, index) => {
            return (
              <CardProduct
                key={index}
                itemProduct={item}
                addCardClick={clickBuyProduct}
              />
            );
          })}
        </div>
        <div className="DataStructure">
          <p>
            import CardProduct from "../../component/CardProduct/CardProduct";
          </p>
          <p>//Khai báo hàm xử lí ở parent function clickBuyProduct(item)</p>
          <pre>{showDataExample(listProduct)}</pre>
        </div>
      </div>

      <div className="SubContainer">
        <div className="Layout">
          <div style={{ width: "350px" }}>
            {/* FeaturedNews */}
            <FeaturedNews
              header="tin tức nổi bật"
              itemList={listDataNews}
              selectedItemEvent={getItemSeleted}
            />
          </div>
          <div style={{ width: "350px" }}>
            {/* VerticalMenu */}
            <VerticalMenu
              categoryList={listVerticalMenu}
              title={"Sản phẩm"}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
        <div className="DataStructure">
          <p>
            import FeaturedNews from
            "../../component/FeaturedNews/FeaturedNews";
          </p>
          <p>//Khai báo hàm xử lí ở parent function getItemSeleted(item)</p>
          <pre>{showDataExample(listDataNews)}</pre>
          <hr />
          <p>
            import VerticalMenu from
            "../../component/VerticalMenu/VerticalMenu";
          </p>
          function selectedCategory(item)
          <pre>{showDataExample(listVerticalMenu)}</pre>
        </div>
      </div>

      <div className="SubContainer">
        <div className="Layout">
          {/* Steper */}
          <Steper listSteper={listSteper} />

          {/* Pagination */}
          <Pagination
            limit={3}
            currentPage={1}
            itemPage={5}
            totalItem={60}
            pageChangeClick={getPagination}
          />
        </div>
        <div className="DataStructure">
          <p>import Steper from "../../component/Steper/Steper";</p>
          <p>//Khai báo hàm xử lí ở parent function getItemSeleted(item)</p>
          <pre>{showDataExample(listSteper)}</pre>
          <hr />
          <p>import Pagination from "../../component/Pagination/Pagination";</p>
          function getPagination(item)
        </div>
      </div>

      <div className="SubContainer">
        <div className="Layout">
          {/* DeliveryAddress */}
          <DeliveryAddress />

          {/* PayInfo */}
          <PayInfo
            deliveryMethod={deliveryDataList}
            payMethod={payMethod}
            changeDeliveryMethod={(item) => {
              console.log(item);
            }}
            changePayMethod={(item) => {
              console.log(item);
            }}
          />

          {/* OrderInfo */}
          <OrderInfo
            intoMoney={100000}
            totalPay={140000}
            deliveryFee={40000}
            dataList={dataListOrderInfo}
            headerList={headerListOrderInfo}
            handleClickOrder={clickOrder}
          />
        </div>
        <div className="DataStructure">
          <p>
            import DeliveryAddress from
            "../../component/DeliveryAddress/DeliveryAddress";
          </p>
          <p>import PayInfo from "../../component/PayInfo/PayInfo";</p>
          <p>import OrderInfo from "../../component/OrderInfo/OrderInfo";</p>
          <h3>PayInfo</h3>
          <p>
            Props : <span style={{ color: "red" }}>payMethod</span>
          </p>
          <pre>{showDataExample(payMethod)}</pre>
          <p>
            Props : <span style={{ color: "red" }}>deliveryMethod</span>
          </p>
          <pre>{showDataExample(headerListOrderInfo)}</pre>
          <p>
            Function Props :
            <span style={{ color: "red" }}>changeDeliveryMethod</span>
          </p>
          <p>
            Function Props :
            <span style={{ color: "red" }}>changePayMethod</span>
          </p>
          <h3>OrderInfo</h3>
          <p>
            Props : <span style={{ color: "red" }}>intoMoney</span>
          </p>
          <p>
            Props : <span style={{ color: "red" }}>totalPay</span>
          </p>
          <p>
            Props : <span style={{ color: "red" }}>deliveryFee</span>
          </p>
          <p>
            Props : <span style={{ color: "red" }}>dataList</span>
          </p>
          <pre>{showDataExample(dataListOrderInfo)}</pre>
          <p>
            Props : <span style={{ color: "red" }}>headerList</span>
          </p>
          <pre>{showDataExample(deliveryDataList)}</pre>
          <p>
            Function Props :
            <span style={{ color: "red" }}>handleClickOrder</span>
          </p>
        </div>
      </div>

      <div className="SubContainer">
        <div className="Layout">
          {/* Header */}
          <Header title="sản phẩm" />
        </div>
        <div className="DataStructure">
          <p>import Header from "../../component/Header/Header";</p>
          <p>
            Props require:<span style={{ color: "red" }}>title</span>
          </p>
        </div>
      </div>

      <div className="SubContainer">
        <div className="Layout">
          {/* NavigateQuickly */}
          <NavigateQuickly listQuickLink={listMenuQuick} />
        </div>
        <div className="DataStructure">
          <p>
            import NavigateQuickly from
            "../../component/NavigateQuickly/NavigateQuickly";
          </p>
          <p>
            Props require:<span style={{ color: "red" }}>listQuickLink</span>
          </p>
          <pre>{showDataExample(listMenuQuick)}</pre>
        </div>
      </div>

      <div className="SubContainer">
        <div className="Layout">
          {/* OrderDetail */}
          <OrderDetail orderDetail={orderDetail}></OrderDetail>
        </div>
        <div className="DataStructure">
          <p>
            import OrderDetail from "../../component/OrderDetail/OrderDetail";
          </p>
          <p>
            Props require:<span style={{ color: "red" }}>orderDetail</span>
          </p>
          <pre>{showDataExample(orderDetail)}</pre>
        </div>
      </div>

      <div className="SubContainer">
        <div className="Layout">
          {/* CardNews */}
          <CardNews
            news={newsCard}
            navigatorClick={(item) => {
              console.log("Item click from CardNews:", item);
            }}
          ></CardNews>
        </div>
        <div className="DataStructure">
          <p>import news= CardNews from "../../component/CardNews/CardNews";</p>
          <p>
            Props require:<span style={{ color: "red" }}>news</span>
          </p>
          <p>
            Function Props require:
            <span style={{ color: "red" }}>navigatorClick</span>
          </p>
          <pre>{showDataExample(newsCard)}</pre>
        </div>
      </div>

      <div className="SubContainer">
        <div className="Layout">
          {/* Table */}
          <Table
            dataList={dataList}
            headerList={headerList}
            hanldeCalculateValue={calFieldIntoMoney}
          />
        </div>
        <div className="DataStructure">
          <p>import Table from "../../component/Table/Table";</p>
          <p>
            Props require:<span style={{ color: "red" }}>dataList</span>
          </p>
          <pre>{showDataExample(dataList)}</pre>
          <p>
            Props require:<span style={{ color: "red" }}>headerList</span>
          </p>
          <pre>{showDataExample(headerList)}</pre>
          <p>
            Function Props require:
            <span style={{ color: "red" }}>hanldeCalculateValue</span>
          </p>
        </div>
      </div>

      <div className="SubContainer">
        <div className="Layout">
          {/* Contact */}
          <Contact contactInfo={contactInfo} />
        </div>
        <div className="DataStructure">
          <p>import Contact from "../../component/Contact/Contact";</p>
          <p>
            Props require:<span style={{ color: "red" }}>contactInfo</span>
          </p>
          <pre>{showDataExample(contactInfo)}</pre>
        </div>
      </div>

      <div className="SubContainer">
        <div className="Layout">
          {/* Contact */}
          <ContactForm />
        </div>
        <div className="DataStructure">
          <p>
            import ContactForm from "../../component/ContactForm/ContactForm";
          </p>
          <p>
            Props require:<span style={{ color: "red" }}>contactInfo</span>
          </p>
          <pre>{showDataExample(contactInfo)}</pre>
        </div>
      </div>

      <div className="SubContainer">
        <div className="Layout">
          {iconList.map((icon, index) => {
            return (
              <div
                key={index}
                style={{ margin: "5px", width: "70px", border: "1px solid" }}
              >
                <FontAwesomeIcon icon={icon.iconName} />
                <p>{icon.iconName}</p>
              </div>
            );
          })}
        </div>
        <div className="DataStructure"></div>
      </div>
    </div>
  );
}

function showDataExample(data) {
  return JSON.stringify(data, null, 4);
}
export default ExampleSource;

//Product
const listProduct = [
  {
    id: 1,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 0,
    isHot: false,
    imageUrl: require("../../assets/images/camera.jpg").default,
  },
  {
    id: 2,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 10,
    isHot: false,
    imageUrl: require("../../assets/images/camera.jpg").default,
  },
  {
    id: 3,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 0,
    isHot: true,
    imageUrl: require("../../assets/images/camera.jpg").default,
  },
];

//End Product

//Feature News
const listDataNews = [
  {
    id: "1",
    urlImage: require("../../assets/images/camera.jpg").default,
    title: "Trên tay Dell XPS 13 (2015): mỏng hơn, mạnh hơn, pin tốt hơn",
  },
  {
    id: "2",
    urlImage: require("../../assets/images/camera.jpg").default,
    title: "Panasonic ra mắt bộ 3 máy ảnh Compact mới",
  },
  {
    id: "3",
    urlImage: require("../../assets/images/camera.jpg").default,
    title: "Trên tay Dell XPS 13 (2015)",
  },
];

//End Feature News

//Feature News
const listVerticalMenu = [
  {
    id: "1",
    title: "Phim ảnh & máy ảnh",
  },
  {
    id: "2",
    title: "Hàng gia dụng",
  },
  {
    id: "3",
    title: "Điện thoại",
  },
];

//End Feature News

// Steper
const listSteper = [
  {
    isActive: true,
    iconName: "angle-double-down",
    title: "Giỏ hàng của tôi",
  },
  {
    isActive: true,
    iconName: "list",
    title: "Thanh toán",
  },
  {
    isActive: false,
    iconName: "list",
    title: "Hoàn tất",
  },
];
//End Steper

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
//End NavigateQuickly

//orderDetail
const orderDetail = {
  idOrder: "#100000326",
  orderDate: "26/06/2021",
  payMethod: "Thanh toán khi giao hàng (COD)",
  listProduct: [
    {
      id: "1",
      name: "Asus TP550LA-CJ040H",
      price: "10.950.000",
      amount: 1,
      intoMoney: "10.950.000",
    },
    {
      id: "2",
      name: "Asus TP550LA-CJ045H",
      price: "10.950.000",
      amount: 1,
      intoMoney: "10.950.000",
    },
  ],
  intoMoney: "10.990.000",
};
//End orderDetail

//newsCard
const newsCard = {
  id: "#100000326",
  date: "26/06/2021",
  tilte: "Thanh toán khi giao hàng (COD)",
  subDescription:
    "Thanh toán khi giao hàng (COD) Thanh toán khi giao hàng (COD)",
  urlImage: require("../../assets/images/camera.jpg").default,
};
//end newsCard

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
    label: "hết hàng",
    propertyMapping: "status",
    type: TYPE_COLUMN_TABLE.CHECKBOX,
  },
  {
    flex: 2,
    label: "Đơn vị",
    propertyMapping: "unit",
    type: TYPE_COLUMN_TABLE.DROPDOWN,
    dataSoucre: [
      { key: "cai", label: "Cái" },
      { key: "tui", label: "Túi" },
      { key: "bo", label: "Bộ" },
    ],
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
    name: "Asus TP550LA-CJ040H",
    price: 10950000,
    amount: 1,
    intoMoney: "10.950.000",
    imageUrl: require("../../assets/images/camera.jpg").default,
    unit: "cai",
    status: true,
  },
  {
    id: "P00002",
    name: "Asus TP550LA-CJ04",
    price: "2",
    amount: 1,
    intoMoney: 10950000,
    imageUrl: require("../../assets/images/camera.jpg").default,
    unit: "tui",
    status: false,
  },
];
// End Data Table Example

// Data Table Example for OrderInfo

const headerListOrderInfo = [
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
    flex: 2,
    label: "SỐ LƯỢNG",
    propertyMapping: "amount",
    type: TYPE_COLUMN_TABLE.LABLE,
  },
  {
    flex: 2,
    label: "THÀNH TIỀN",
    propertyMapping: "intoMoney",
    type: TYPE_COLUMN_TABLE.LABLE,
  },
];

const dataListOrderInfo = [
  {
    id: "P00001",
    name: "Asus TP550LA-CJ040",
    price: "10.950.000",
    amount: 1,
    intoMoney: "10.950.000",
    imageUrl: require("../../assets/images/camera.jpg").default,
  },
  {
    id: "P00002",
    name: "Asus TP550LA-CJ040H",
    price: "2",
    amount: 1,
    intoMoney: "10.950.000",
    imageUrl: require("../../assets/images/camera.jpg").default,
  },
];
// End Data Table Example for OrderInfo

//Data for payInfo
const payMethod = [
  { id: "P001", title: "Thanh toán khi giao hàng (COD)" },
  {
    id: "P002",
    title: "Thanh toán online qua cổng OnePay bằng thẻ ATM nội địa",
  },
  { id: "P003", title: "Chuyển khoản qua ngân hàng" },
  {
    id: "P004",
    title: "Thanh toán online qua cổng OnePay bằng thẻ Visa/Master/JCB",
  },
];

const deliveryDataList = [
  {
    id: "D001",
    title: "Vui lòng chọn cách vận chuyển",
  },
  {
    id: "D002",
    title: "Chuyển phát nhanh",
  },
  {
    id: "D003",
    title: "Chuyển phát qua bưu điện",
  },
];
//End Data for payInfo

//Contact info
const contactInfo = {
  name: "CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ",
  contact: [
    {
      icon: "map-marker-alt",
      content: "50A/2 Bình Tân, Bình Mỹ, Châu Phú, An Giang.",
      label: "",
      url: "",
    },
    {
      icon: "envelope",
      content: "nguyendinhqui1029@gmail.com",
      label: "Email",
      url: "nguyendinhqui1029@gmail.com",
    },
    {
      icon: "phone-alt",
      label: "Điện thoại",
      content: "0777 203 042",
      url: "",
    },
  ],
};
//End Contact info
