import React from "react";
import PropTypes from "prop-types";
import "./VerticalMenu.scss";
VerticalMenu.propTypes = {
  title: PropTypes.string.isRequired,
  categoryList: PropTypes.array.isRequired,
  selectedCategory: PropTypes.func.isRequired,
};

function VerticalMenu(props) {
  const { selectedCategory, title, categoryList } = props;
  function handleEventClick(category) {
    if (selectedCategory) {
      selectedCategory(category);
    }
  }
  return (
    <div className="VerticalMenu">
      <h3 className="LabelMenu">{title}</h3>
      <ul className="ItemList">
        {categoryList.map((category,index) => {
          return (
            <li key={category.id} onClick={() => handleEventClick(category)}>
              {category.title}
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
