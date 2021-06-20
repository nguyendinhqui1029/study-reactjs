import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import "./CardProduct.scss";
CardProduct.propTypes = {
  itemProduct: PropTypes.object,
  addCardClick: PropTypes.func,
};

CardProduct.defaultProps = {
  itemProduct: {},
  addCardClick: null,
};

function CardProduct(props) {
  const { itemProduct, addCardClick } = props;
  function handleEventClick(item) {
    if (addCardClick) {
      addCardClick(item);
    }
  }
  return (
    <div className="CardProduct">
      {itemProduct.discount ? (
        <div className="PercentDiscount">{itemProduct.discount}%</div>
      ) : itemProduct.isHot ? (
        <div className="HotProduct">HOT</div>
      ) : (
        ""
      )}
      <div className="ImageProduct">
        <img className="Image" src={itemProduct.imageUrl} />
      </div>
      <div className="ProductDetail">
        <h2 className="ProductName">{itemProduct.productName}</h2>
        <span className="Price">
          {itemProduct.price}
          <span className="Currency">đ</span>
        </span>
        <div className="Discount">
          {itemProduct.discount ? (
            <del>
              {Math.round((itemProduct.price * itemProduct.discount) / 100)}
              <span className="Currency">đ</span>
            </del>
          ) : (
            <span>&nbsp;</span>
          )}
        </div>
        <Button
          className="BtnBuy"
          onClick={() => handleEventClick(itemProduct)}
        >
          Mua
        </Button>
      </div>
    </div>
  );
}

export default CardProduct;
