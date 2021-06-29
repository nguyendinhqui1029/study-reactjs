import React from "react";
import PropTypes from "prop-types";
import Header from "../../component/Header/Header";
import CardProduct from "../../component/CardProduct/CardProduct";
import Pagination from "../../component/Pagination/Pagination";
import './Home.scss';
Home.propTypes = {};

function Home(props) {
  function selectedProduct(product) {
    console.log("product selected",product)
  }
  return (
    <div className="Home">
      <div className="Header">
        <Header title="Sản phẩm" />
      </div>

      <div className="ProductList">
        {listProduct.map((product, index) => {
          return (
            <CardProduct
              key={index}
              addCardClick={selectedProduct}
              itemProduct={product}
            />
          );
        })}
      </div>
      <div className="Pagination">
        <Pagination />
      </div>
    </div>
  );
}

export default Home;

const listProduct = [
  {
    id: 1,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 0,
    isHot: false,
    imageUrl: "/static/media/camera.b97b375b.jpg",
  },
  {
    id: 2,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 10,
    isHot: false,
    imageUrl: "/static/media/camera.b97b375b.jpg",
  },
  {
    id: 3,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 0,
    isHot: true,
    imageUrl: "/static/media/camera.b97b375b.jpg",
  },
  {
    id: 4,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 0,
    isHot: false,
    imageUrl: "/static/media/camera.b97b375b.jpg",
  },
  {
    id: 5,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 10,
    isHot: false,
    imageUrl: "/static/media/camera.b97b375b.jpg",
  },
  {
    id: 6,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 0,
    isHot: true,
    imageUrl: "/static/media/camera.b97b375b.jpg",
  },
  {
    id: 7,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 0,
    isHot: false,
    imageUrl: "/static/media/camera.b97b375b.jpg",
  },
  {
    id: 8,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 10,
    isHot: false,
    imageUrl: "/static/media/camera.b97b375b.jpg",
  },
  {
    id: 9,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 0,
    isHot: true,
    imageUrl: "/static/media/camera.b97b375b.jpg",
  },
  {
    id: 10,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 0,
    isHot: false,
    imageUrl: "/static/media/camera.b97b375b.jpg",
  },
  {
    id: 11,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 10,
    isHot: false,
    imageUrl: "/static/media/camera.b97b375b.jpg",
  },
  {
    id: 12,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 0,
    isHot: true,
    imageUrl: "/static/media/camera.b97b375b.jpg",
  },
  {
    id: 13,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 0,
    isHot: false,
    imageUrl: "/static/media/camera.b97b375b.jpg",
  },
  {
    id: 14,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 10,
    isHot: false,
    imageUrl: "/static/media/camera.b97b375b.jpg",
  },
  {
    id: 15,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 0,
    isHot: true,
    imageUrl: "/static/media/camera.b97b375b.jpg",
  },
  {
    id: 16,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 0,
    isHot: false,
    imageUrl: "/static/media/camera.b97b375b.jpg",
  },
  {
    id: 17,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 10,
    isHot: false,
    imageUrl: "/static/media/camera.b97b375b.jpg",
  },
  {
    id: 18,
    productName: "ASUS TP550LA-CJ04",
    price: 25000000,
    discount: 0,
    isHot: true,
    imageUrl: "/static/media/camera.b97b375b.jpg",
  },
];
