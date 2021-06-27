import React from "react";
import PropTypes from "prop-types";
import CardProduct from "../../component/CardProduct/CardProduct";
import FeaturedNews from "../../component/FeaturedNews/FeaturedNews";
import VerticalMenu from "../../component/VerticalMenu/VerticalMenu";
import Steper from "../../component/Steper/Steper";
import Pagination from "../../component/Pagination/Pagination";

import "./ExampleSource.scss";
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
  return (
    <div className="Container">
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
          <div>
            {/* Steper */}
            <Steper listSteper={listSteper} />
          </div>

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