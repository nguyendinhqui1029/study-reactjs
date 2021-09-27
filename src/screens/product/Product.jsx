import React, { useEffect, useState } from "react";
import VerticalMenu from "../../component/VerticalMenu/VerticalMenu";
import Header from "../../component/Header/Header";
import NavigateQuickly from "../../component/NavigateQuickly/NavigateQuickly";
import { useLocation } from "react-router-dom";
import "./Product.scss";
import BodyProductList from "./BodyProductList/BodyProductList";
import { useDispatch, useSelector } from "react-redux";
import { addQuickLink, removeQuickLink } from "../../actions/quicklink";
import { useHistory } from 'react-router';

function Product() {
  const disPatch = useDispatch();
  const categories = useSelector((category) => category.categories.categories);
  const [categoryMap, setCategoryMap] = useState([]);
  const history = useHistory();
  const { state: { category: { id = "" } = {} } = {} } = useLocation();
  useEffect(() => {
    const list = categories.map((item) => {
      return { title: item.name, ...item };
    });
    setCategoryMap(list);
  }, [categories]);

  function selectedCategory(item) {
    disPatch(removeQuickLink(1));
    disPatch(addQuickLink({ path: `/product`, label: "Sản phẩm" }));
    disPatch(addQuickLink({ path: `/product/${item.id}`, label: item.name }));
    history.push({
      pathname: `/product/${item.id}`,
      state: { category: item },
    });
  }
 
  
  return (
    <div className="Product">
      <div className="Left">
        <VerticalMenu
          title="Sản phẩm"
          categoryList={categoryMap}
          selectedCategory={selectedCategory}
        />
      </div>
      <div className="Right">
        <div className="NavigateQuickly">
          <NavigateQuickly />
        </div>
        <div className="Header">
          <Header title="Sản phẩm" />
        </div>

        <BodyProductList idCategory={id} />
      </div>
    </div>
  );
}

export default Product;
