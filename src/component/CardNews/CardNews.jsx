import React from "react";
import PropTypes from "prop-types";
import './CardNews.scss';
CardNews.propTypes = {};

function CardNews(props) {
  return (
    <div className="CardNews">
      <div className="CardItem">
        <div className="ImageItem">
          <img
            className="Image"
            src={require("../../assets/images/camera.jpg").default}
          />
        </div>
        <div className="ContentItem">
          <h4 className="TitleItem">
            Trên tay Dell XPS 13 (2015): mỏng hơn, mạnh hơn, pin tốt hơn
          </h4>
          <div className="Date">
            <span >08/01/2015</span>
          </div>
          <p>
            Dell nhấn mạnh rằng chiếc XPS 13 của họ năm nay còn nhận được nhiều
            cải tiến tốt hơn, vượt trội hơn nhiều so với các phiên bản trước.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardNews;
