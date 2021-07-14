import React from "react";
import PropTypes from "prop-types";
import "./VerticalMenu.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
VerticalMenu.propTypes = {
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  title: PropTypes.string.isRequired,
  categoryList: PropTypes.array.isRequired,
  selectedCategory: PropTypes.func.isRequired,
};

VerticalMenu.defaultProps = {
  iconLeft: "",
  iconRight: "",
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
              {iconLeft && (
                <FontAwesomeIcon
                  className="IconLeft"
                  icon={iconLeft}
                />
              )}

              {category.title}
              {iconRight && (
                <FontAwesomeIcon
                  className="IconRight"
                  icon={iconRight}
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
