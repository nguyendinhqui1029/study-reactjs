import React from "react";
import PropTypes from "prop-types";
import "./FeaturedNews.scss";

FeaturedNews.propTypes = {
  header: PropTypes.string,
  itemList: PropTypes.array,
  selectedItemEvent: PropTypes.func,
};

FeaturedNews.defaultProps = {
  header: "",
  itemList: [],
  selectedItemEvent: null,
};

function FeaturedNews(props) {
  const { header, itemList, selectedItemEvent } = props;
  function handleEventSelectItem(item) {
    if (selectedItemEvent) {
      selectedItemEvent(item);
    }
  }
  
  return (
    <div className="FeaturedNews">
      <h3 className="TitleFeaturedNews">{header}</h3>
      <ul className="ContentFeaturedNews">
        {itemList.map((item, index) => {
          return (
            <li key={index} onClick={() => handleEventSelectItem(item)}>
              <div className="CardItem">
                <div className="ImageItem">
                  <img className="Image" src={item.urlImage} />
                </div>
                <div className="ContentItem">
                  <h4 className="TitleItem">{item.title}</h4>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FeaturedNews;
