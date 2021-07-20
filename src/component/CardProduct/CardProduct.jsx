import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cart";
import { useHistory } from "react-router-dom";
import "./CardProduct.scss";
import { calculateDiscount, formatCurrency } from "../../util/util";

CardProduct.propTypes = {
  itemProduct: PropTypes.object,
  addCardClick: PropTypes.func,
};

CardProduct.defaultProps = {
  itemProduct: {},
  addCardClick: null,
};

function CardProduct(props) {
  const { itemProduct } = props;
  const disPatch = useDispatch();
  const history = useHistory();
  function addItemToCart(item) {
    disPatch(addToCart(item));
    history.push("/cart-detail");
  }

  function navigateDetail(itemProduct){
    history.push({ pathname: `/product/${itemProduct.id}` ,state:{id:itemProduct.id}});
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
        <img className="Image" src={itemProduct.imageUrl} alt={itemProduct.imageUrl}/>
      </div>
      <div className="ProductDetail">
        <h2 className="ProductName" onClick={()=>{navigateDetail(itemProduct);}}>{itemProduct.productName}</h2>
        <span className="Price">
          {itemProduct.discount ? (
            formatCurrency(
              calculateDiscount(itemProduct.price, itemProduct.discount)
            )
          ) : (
            <span>&nbsp;</span>
          )}

          <span className="Currency">đ</span>
        </span>
        <div className="Discount">
          <del>
            {formatCurrency(itemProduct.price)}
            <span className="Currency">đ</span>
          </del>
        </div>
        <Button className="BtnBuy" onClick={() => addItemToCart(itemProduct)}>
          Mua
        </Button>
      </div>
    </div>
  );
}

export default CardProduct;
