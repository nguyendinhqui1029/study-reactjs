import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import SelectedInput from "./../SelectedInput/SelectedInput";
import { Formik, FastField, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.scss";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addQuickLink, removeQuickLink } from "../../actions/quicklink";

function Search() {
  const initialValues = {
    enter: "",
    fillter: "ALL",
  };
  const [categoriesDataSource, setCategoriesDataSource] = useState([]);
  const categories = useSelector((category) => category.categories.categories);
  const disPatch =useDispatch();
  const history = useHistory()
  
  useEffect(() => {
    const itemDefault = { value: "ALL", label: "Tất cả" };
    const categoriesMap = categories.map((item) => {
      return { value: item.id, label: item.name };
    });
    setCategoriesDataSource([itemDefault, ...categoriesMap]);
  }, [categories]);

  const onclickSearch = (value)=>{
    const selectedCategory = categories.find((item) => {
      return item.id === value.fillter;
    });
    disPatch(removeQuickLink(1));
    disPatch(addQuickLink({ path: `/product`, label: "Sản phẩm" }));
    disPatch(
      addQuickLink({
        path: `/search-result`,
        label: selectedCategory ? selectedCategory.name :"All",
      })
    );
    value.enter&&disPatch(addQuickLink({ path: `#`, label: value.enter }));
    history.push({ pathname: "/search-result", state: value });
  }
  return (
    <div className="Search">
      <Formik initialValues={initialValues} onSubmit={(value) => onclickSearch(value)}>
        <Form className="Form">
          <FastField
            name="enter"
            component={Input}
            placeholder="Tìm kiếm ..."
            type="text"
            isShowValidField={false}
          />
          <Field
            name="fillter"
            component={SelectedInput}
            dataSource={categoriesDataSource}
            isShowValidField={false}
          />
          <Button type="submit" className="ButtonSearch">
            <FontAwesomeIcon icon="search" className="Icon" />
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default Search;
