import React from "react";
import PropTypes from "prop-types";
import VerticalMenu from "../../component/VerticalMenu/VerticalMenu";
import FeaturedNews from "../../component/FeaturedNews/FeaturedNews";
import NavigateQuickly from "../../component/NavigateQuickly/NavigateQuickly";
import Header from "../../component/Header/Header";
import CardNews from "../../component/CardNews/CardNews";

import "./News.scss";
News.propTypes = {};

function News(props) {
  function selectedCategory(item) {}

  function selectedNews(item) {}

  function getPagination(paginationInfo) {}

  function navigatorDetailNews(news) {}
  return (
    <div className="ContainerNews">
      <div className="ContainerLeft">
        <div className="News">
          <VerticalMenu
            title="Tin tức"
            categoryList={categoryList}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="NewsHighlight">
          <FeaturedNews
            selectedItemEvent={selectedNews}
            header="Tin tức nổi bật"
            itemList={newsHighlightList}
          />
        </div>
      </div>
      <div className="ContainerRight">
        <div className="NavigateQuickly">
          <NavigateQuickly listQuickLink={listQuickLink} />
        </div>
        <div className="Header">
          <Header title="Tin tức" />
        </div>
        <div className="NewsList">
          {newsList.map((news, index) => {
            return (
              <CardNews
                key={index}
                navigatorClick={navigatorDetailNews}
                news={news}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default News;
const newsList = [
  {
    id: "#100000326",
    date: "08/01/2015",
    tilte: "Trên tay Dell XPS 13 (2015): mỏng hơn, mạnh hơn, pin tốt hơn",
    subDescription:
      "Dell nhấn mạnh rằng chiếc XPS 13 của họ năm nay còn nhận được nhiều cải tiến tốt hơn, vượt trội hơn nhiều so với các phiên bản trước.",
    urlImage: require("../../assets/images/camera.jpg").default,
  },
  {
    id: "#100000327",
    date: "08/01/2015",
    tilte: "Panasonic ra mắt bộ 3 máy ảnh Compact mới",
    subDescription:
      "Panasonic đã gây ấn tượng mạnh tại CES 2015 với bộ 3 máy ảnh Compact siêu zoom mới có khả năng kết nối Wi-Fi.",
    urlImage: require("../../assets/images/camera.jpg").default,
  },
  {
    id: "#100000328",
    date: "27/06/2014",
    tilte: "4 lý do để đầu tư một chiếc áo khoác đắt tiền",
    subDescription:
      "Đâu là lý do mà phái đẹp nên sở hữu và cần đầu tư cho những chiếc áo khoác đẹp?",
    urlImage: require("../../assets/images/camera.jpg").default,
  },
  {
    id: "#100000329",
    date: "09/08/2013",
    tilte: 'Tại sao “thượng đế” ngày càng "ngán" hội chợ giảm giá',
    subDescription:"Những hội chợ garage sale hoặc sự kiện xả hàng hiệu đang trở nên vô cùng quen thuộc. Nếu như nhiều năm trước, các hội chợ giảm giá chỉ thường có vào dịp cuối năm thì hiện nay những “đại tiệc thời trang giá rẻ” này diễn ra quanh năm.",
    urlImage: require("../../assets/images/camera.jpg").default,
  },
];
const categoryList = [
  {
    id: "C001",
    title: "XU HƯỚNG THỜI TRANG",
  },
  {
    id: "C002",
    title: "MẶC ĐẸP",
  },
  {
    id: "C003",
    title: "khuyến mãi",
  },
];

const newsHighlightList = [
  {
    id: "N001",
    urlImage: require("../../assets/images/asus-3505-372622-1-zoom.jpg")
      .default,
    title: "Trên tay Dell XPS 13 (2015): mỏng hơn, mạnh hơn, pin tốt hơn",
  },
  {
    id: "N002",
    urlImage: require("../../assets/images/camera.jpg").default,
    title: "Panasonic ra mắt bộ 3 máy ảnh Compact mới",
  },
  {
    id: "N003",
    urlImage: require("../../assets/images/sony-7155-751762-1-product.jpg")
      .default,
    title: "4 lý do để đầu tư một chiếc áo khoác đắt tiền",
  },
  {
    id: "N004",
    urlImage: require("../../assets/images/may-quay-phim-sony-hdr-cx240e.jpg")
      .default,
    title: "“Bật mí” mẫu smartphone màn hình cong bí mật của LG",
  },
  {
    id: "N005",
    urlImage: require("../../assets/images/sony-7155-751762-1-product.jpg")
      .default,
    title: 'Tại sao “thượng đế” ngày càng "ngán" hội chợ giảm giá',
  },
];
const listQuickLink = [
  {
    id: "NQ01",
    label: "Trang chủ",
    path: "/",
  },
  {
    id: "NQ02",
    label: "Tin tức",
    path: "news",
  },
];
