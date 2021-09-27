import React from "react";
import Table from "../Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.scss";
import {
  calculateAmount,
  calculateIntoMoney,
  calculateTotal,
  formatCurrency,
} from "../../util/util";
import { ACTION_TYPE_TABLE } from "../../Constant/Constant";
import { removeToCart } from "../../actions/cart";
import { useHistory } from "react-router-dom";
function Cart() {
  let cartList = useSelector((cart) => cart.cart.cartList);
  const disPatch = useDispatch();
  const history = useHistory();
  cartList = calculateIntoMoney(cartList);

  const removeItemCart = (item, actionName) => {
    if (actionName === ACTION_TYPE_TABLE.DELETE) {
      disPatch(removeToCart(item));
    }
  };
  return (
    <div className="Cart">
      <div className="Image">
        <img
          src={require("../../assets/images/cart.png").default}
          alt="cart.png"
        />
        <span className="InfoCart">
          {calculateAmount(cartList)} sp -
          {formatCurrency(calculateTotal(cartList))} <sup>đ</sup>
        </span>
        <FontAwesomeIcon icon="arrow-right" className="Icon" />
      </div>

      {cartList.length ? (
        <div className="InfoDetail">
          <div>
            <Table
              dataList={cartList}
              headerList={headerList}
              hanldeAction={removeItemCart}
            />
          </div>

          <div className="Total">
            <span className="Label">Tổng tiền:</span>
            <span className="Content">
              {formatCurrency(calculateTotal(cartList))}
              <sup>đ</sup>
            </span>
          </div>
          <div className="ContainerButton">
            <Button
              className="ButtonPayment"
              onClick={() => history.push("/cart-detail")}
            >
              Thanh toán
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cart;

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
  {
    flex: 1,
    label: "",
    actionType: ["DELETE"],
    type: "ACTION",
  },
];
