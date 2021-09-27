import React from "react";
import PropTypes from "prop-types";
import "./VerticalMenu.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
VerticalMenu.propTypes = {
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  title: PropTypes.string.isRequired,
  categoryList: PropTypes.array.isRequired,
  selectedCategory: PropTypes.func,
};

VerticalMenu.defaultProps = {
  iconLeft: null,
  iconRight: null,
  selectedCategory:null
};
function VerticalMenu(props) {
  const { selectedCategory, title, categoryList,iconLeft,iconRight } = props;
  function handleEventClick(category) {
    if (selectedCategory) {
      selectedCategory(category);
    }
  }
  return (
    <div className="VerticalMenu">
      <h3 className="LabelMenu">{title}</h3>
      <ul className="ItemList">
        {categoryList.map((category) => {
          return (
            <li key={category.id} onClick={() => handleEventClick(category)}>
              {(iconLeft || category.hasOwnProperty("iconLeft")) && (
                <FontAwesomeIcon
                  className="IconLeft"
                  icon={iconLeft || category.iconLeft}
                />
              )}

              {category.title}
              {(iconRight || category.hasOwnProperty("iconRight")) && (
                <FontAwesomeIcon
                  className="IconRight"
                  icon={iconRight || category.iconRight}
                />
              )}
            </li>
          );
        })}
      </ul>
      <div className="BorderLv1"></div>
      <div className="BorderLv2"></div>
    </div>
  );
}

export default VerticalMenu;
