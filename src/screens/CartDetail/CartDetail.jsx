import React, { useState, useEffect } from "react";
import Steper from "../../component/Steper/Steper";
import Table from "../../component/Table/Table";
import { ACTION_TYPE_TABLE } from "../../Constant/Constant";
import NavigateQuickly from "../../component/NavigateQuickly/NavigateQuickly";
import Header from "../../component/Header/Header";
import Payment from "../../component/Payment/Payment";
import CompletedOrder from "../../component/CompletedOrder/CompletedOrder";

import { Button } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  Link,
  Redirect,
} from "react-router-dom";
import "./CartDetail.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  calculateIntoMoney,
  calculateTotal,
  formatCurrency,
} from "../../util/util";
import { removeToCart, updateAmountToCart } from "../../actions/cart";
CartDetail.propTypes = {};

function CartDetail() {
  const [listSteper] = useState(dataSourceSteper);
  let { path } = useRouteMatch(); //get root path
  const history = useHistory();
  let cartList = useSelector((carts) => carts.cart.cartList);
  const status = useSelector((carts) => carts.cart.status);
  const disPatch = useDispatch();
  cartList = calculateIntoMoney(cartList);

  

  const removeItemCart = (item, actionName) => {
    if (actionName === ACTION_TYPE_TABLE.DELETE) {
      disPatch(removeToCart(item));
    }
  };

  const hanldeCalculateValue = (newValue, item, propertyName) => {
    item[propertyName] = newValue;
    disPatch(updateAmountToCart(item));
  };

  return !cartList.length && status === "draft" ? (
    <Redirect to="/product" />
  ) : (
    <div className="CartDetail">
      <div className="ContainerBody">
        <div className="NavQuickly">
          <NavigateQuickly />
        </div>
        <div className="Header">
          <Header title="Thanh toán" />
        </div>
        <div className="Steper">
          <Steper listSteper={listSteper} />
        </div>
        <Switch>
          <Route path="/cart-detail" exact={true}>
            <div className="ProductInfo">
              <Table
                dataList={cartList}
                headerList={headerTable}
                hanldeCalculateValue={hanldeCalculateValue}
                hanldeAction={removeItemCart}
              />
              <div className="Total">
                <span className="Label">Tổng thanh toán:</span>
                <span className="Content">
                  {formatCurrency(calculateTotal(cartList))} <sup>đ</sup>
                </span>
              </div>
              <div className="ButtonSend">
                <Button
                  className="ButtonLeft"
                  onClick={() => history.replace("/product")}
                >
                  Tiếp tục mua hàng
                </Button>
                <Button className="ButtonRight">
                  <Link to={`${path}/payment`} className="Link">
                    Tiến hành thanh toán
                  </Link>
                </Button>
              </div>
            </div>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment />
          </Route>
          <Route path={`${path}/completed`}>
            <div className="ProductInfo">
              <CompletedOrder />
              <div className="ButtonSend">
                <Button
                  className="ButtonLeft"
                  onClick={() => history.push("/product")}
                >
                  Tiếp tục mua hàng
                </Button>
                <Button
                  className="ButtonRight"
                  onClick={() => {
                    history.push("/my-order");
                  }}
                >
                  Đơn hàng của tôi
                </Button>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default CartDetail;

let dataSourceSteper = [
  {
    isActive: true,
    iconName: "shopping-cart",
    title: "Giỏ hàng",
  },
  {
    isActive: false,
    iconName: "dollar-sign",
    title: "Thanh toán",
  },
  {
    isActive: false,
    iconName: "check",
    title: "Hoàn tất",
  },
];

const headerTable = [
  {
    flex: 1,
    label: "",
    propertyMapping: "imageUrl",
    type: "IMAGE",
  },
  {
    flex: 5,
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
    formatCurrency: false,
  },
  {
    flex: 2,
    label: "SỐ LƯỢNG",
    propertyMapping: "amount",
    type: "INPUTNUMBER",
    min: 1,
    max: 10,
    formatCurrency: false,
  },
  {
    flex: 2,
    label: "THÀNH TIỀN",
    propertyMapping: "intoMoney",
    type: "LABLE",
    formatCurrency: true,
  },
  {
    flex: 1,
    label: "",
    actionType: ["DELETE"],
    type: "ACTION",
  },
];
