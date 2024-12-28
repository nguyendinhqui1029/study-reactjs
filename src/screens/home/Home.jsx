import React from "react";
import Header from "../../component/Header/Header";
import CarouselImage from "../../component/CarouselImage/CarouselImage";
import BodyProductList from '../product/body-product-list/BodyProductList';
import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <div className="ContainerBody MarginNone">
        {/* <div className="ContainerBodyLeft"></div> */}
        <div className="ContainerBodyRight">
          <CarouselImage dataSource={dataSourceCarousel} />
        </div>
      </div>
      <div className="Header">
        <Header title="Sản phẩm" />
      </div>

      <div className="ProductList">
        <BodyProductList noItemPage={20} />
      </div>
    </div>
  );
}

export default Home;

const dataSourceCarousel = [
  { image: require("assets/images/761x309.png"), content: "" },
  { image: require("assets/images/slider1.jpg"), content: "" },
  { image: require("assets/images/slider2.jpg"), content: "" },
];