import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faList,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useRouteMatch } from "react-router-dom";
import "./NavigateMenu.scss";

NavigateMenu.propTypes = {
  listCategory: PropTypes.array,
  listMenu: PropTypes.array,
  selectedCategory: PropTypes.func,
};

NavigateMenu.defaultProps = {
  listCategory: [],
  listMenu: [],
  selectedCategory: null,
};

function NavigateMenu(props) {
  const { listMenu, listCategory } = props;
  return (
    <div className="NavMenu">
      <div className="ContainerCategory">
        <div className="TitleCategory">
          <FontAwesomeIcon icon={faList} className="IconCategory" />
          DANH MUC SAN PHAM
          <FontAwesomeIcon
            icon={faChevronCircleDown}
            className="IconChevronCircleDown"
          />
        </div>
        <ul>
          {listCategory.map((catagory, index) => {
            return (
              <CategoryItem item={{ ...catagory, ...props }} key={index} />
            );
          })}
        </ul>
      </div>

      <div className="Menu">
        <ul>
          {listMenu.map((item, index) => {
            return <MenuItem item={item} key={index} />;
          })}
        </ul>
      </div>
    </div>
  );
}

function MenuItem({ item }) {
  const match = useRouteMatch({ path: item.path });
  return (
    <Link
      to={item.path}
      exact={item && item.exact ? item.exact.toString() : "false"}
      className="MenuLink"
    >
      <li className={match && match.isExact ? "Active" : ""}>{item.label}</li>
    </Link>
  );
}

function CategoryItem({ item }) {
  const { label, subCategory, selectedCategory } = item;
  function handlSelectedItem(categorySeleted) {
    if (selectedCategory && subCategory.length <= 0) {
      selectedCategory(categorySeleted);
    }
  }
  return (
    <li onClick={() => handlSelectedItem(item)}>
      {label}
      <FontAwesomeIcon icon={faAngleRight} className="IconRight" />

      {subCategory.map((subCategory, index) => {
        return (
          <SubCategoryItem
            item={{ ...subCategory, selectedCategory }}
            key={index}
          />
        );
      })}
    </li>
  );
}

function SubCategoryItem({ item }) {
  const { label, subCategory, selectedCategory } = item;
  return (
    <div className="SubMenu">
      <div className="ContentSubMenu">
        <h5>{label}</h5>
        <ul>
          {subCategory.map((subItem, index) => {
            return (
              <li key={index} onClick={() => selectedCategory(subItem)}>
                {subItem.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default NavigateMenu;
