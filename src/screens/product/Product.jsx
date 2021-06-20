import React from "react";
import PropTypes from "prop-types";
import Header from "../../component/Header/Header";
import CardProduct from "../../component/CardProduct/CardProduct";
import "./Product.scss";

Product.propTypes = {};
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
  {
    id: 4,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 0,
    isHot: false,
    imageUrl: require("../../assets/images/camera.jpg").default,
  },
];
function Product(props) {
  const title = "San pham";
  function clickBuyProduct(item) {
    console.log(item);
  }
  return (
    <div>
      <Header title={title} />
      <div className="Container">
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
    </div>
  );
}

export default Product;
