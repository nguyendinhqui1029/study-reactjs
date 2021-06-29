import React from "react";
import PropTypes from "prop-types";
import './CardNews.scss';
CardNews.propTypes = {
  news:PropTypes.object.isRequired,
  navigatorClick:PropTypes.func,
};
CardNews.defaultProps = {
  navigatorClick: null,
};
function CardNews(props) {
  const { news, navigatorClick } = props;
  function handleNewsClick(item) {
    if (navigatorClick) {
      navigatorClick(item);
    }
  }
  return (
    <div className="CardNews">
      <div className="CardItem">
        <div className="ImageItem">
          <img className="Image" src={news.urlImage} />
        </div>
        <div className="ContentItem">
          <h4 className="TitleItem" onClick={() => handleNewsClick(news)}>
            {news.tilte}
          </h4>
          <div className="Date">
            <span>{news.date}</span>
          </div>
          <p>{news.subDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default CardNews;
