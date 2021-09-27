import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faList,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import "./NavigateMenu.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  categoriesAction
} from "../../actions/categories";
import { addQuickLink, removeQuickLink } from "../../actions/quicklink";
import categoryApi from "../../api/category.api";
NavigateMenu.propTypes = {
  listMenu: PropTypes.array,
};

NavigateMenu.defaultProps = {
  listMenu: [],
};

function NavigateMenu(props) {
  const { listMenu } = props;
  const categories = useSelector((cate) => cate.categories.categories);
  
  const disPatch = useDispatch();
  const match = useRouteMatch({ path: "/" });
  let history = useHistory();
  useEffect(() => {
    categoryApi.getCategoryByIdSubCategory()
      .then((categoryList) => {
        return Promise.all(
          (categoryList || []).map((cate) => {
            return categoryApi
              .getCategoryByIdSubCategory(cate.id)
              .then((cateLevel2) => {
                return Promise.all(
                  (cateLevel2 || []).map((level2) => {
                    return categoryApi.getCategoryByIdSubCategory(level2.id);
                  })
                ).then((value) => {
                  return (cateLevel2 || []).map((category, index) => {
                    return { ...category, subCategory: value[index] };
                  });
                });
              });
          })
        ).then((value) => {
          return (categoryList || []).map((category, index) => {
            return { ...category, subCategory: value[index] };
          });
        });
      })
      .then((categories) => {
        disPatch(categoriesAction(categories));
      });
  }, []);

  const handleSelectedCategory = (item) => {
    if (!item.hasOwnProperty("subCategory") || !item.subCategory.length) {
      disPatch(removeQuickLink(1));
      disPatch(addQuickLink({ path: `/product`, label: 'Sản phẩm'}));
      disPatch(addQuickLink({ path: `/product/${item.id}`, label: item.name }));
      history.push({
        pathname: `/product/${item.id}`,
        state: { category: item },
      });
    }
  };
  
  return (
    <div className="NavMenu">
      <div className="ContainerCategory">
        <div className="TitleCategory">
          <FontAwesomeIcon icon={faList} className="IconCategory" />
          Danh mục sản phẩm
          <FontAwesomeIcon
            icon={faChevronCircleDown}
            className="IconChevronCircleDown"
            style={{ display: match.isExact ? "block" : "none" }}
          />
        </div>
        <ul style={{ display: match.isExact ? "block" : "none" }}>
          {categories.map((catagory, index) => {
            return (
              <li onClick={() => handleSelectedCategory(catagory)} key={index}>
                {catagory.name}
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className={
                    catagory.subCategory.length > 0
                      ? "IconRight"
                      : "IconRightHidden"
                  }
                />
                {catagory.subCategory.length > 0 && (
                  <div className="SubMenu">
                    {catagory.subCategory.map((parentSubcategory, ind) => {
                      return (
                        <div className="ContentSubMenu" key={ind}>
                          <h4>{parentSubcategory.name}</h4>
                          <ul>
                            {parentSubcategory.subCategory.map(
                              (subItem, index) => {
                                return (
                                  <li
                                    key={`SUBMENU${index}`}
                                    onClick={() =>
                                      handleSelectedCategory(subItem)
                                    }
                                  >
                                    {subItem.name}
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                )}
              </li>
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
  const disPatch = useDispatch();

  const addQuickLinkEvent=(item)=>{
    disPatch(removeQuickLink(1));
    disPatch(addQuickLink(item));
  }
  return (
    <Link
      to={item.path}
      exact={item && item.exact ? item.exact.toString() : "false"}
      className="MenuLink"
      onClick={() => addQuickLinkEvent({ label: item.label, path: item.path })}
    >
      <li className={match && match.isExact ? "Active" : ""}>{item.label}</li>
    </Link>
  );
}

export default NavigateMenu;
