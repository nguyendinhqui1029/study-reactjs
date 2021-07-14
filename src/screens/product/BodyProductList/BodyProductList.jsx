import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardProduct from "./../../../component/CardProduct/CardProduct";
import Pagination from "./../../../component/Pagination/Pagination";
import "./BodyProductList.scss";
import productApi from "../../../api/product.api";

BodyProductList.propTypes = {
  noItemPage: PropTypes.number,
  idCategory: PropTypes.string,
};
BodyProductList.defaultProps = {
  noItemPage: 12,
  idCategory:'',
};

function BodyProductList(props) {
  const { noItemPage, idCategory } = props;
  const [productList, setProductList] = useState([]);
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [totalRow, setTotalRow] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  
  function getProductListByPagination(pagination) {
    const { currentPage } = pagination;
    setCurrentPage(currentPage);
  }

  useEffect(() => {
    setIsShowLoading(true);
    productApi
      .getProductList(idCategory, noItemPage, currentPage)
      .then((response) => {
        setProductList([...response.data]);
        setTotalRow(response.pagination.totalRow);
        setIsShowLoading(false);
      });
  }, [idCategory, currentPage, noItemPage]);
  return (
    <div className="BodyProductList">
      <div className="ProductList">
        {isShowLoading && (
          <div className="ContainerLoading">
            <div className="Loading"></div>
            <img
              className="ImgLoading"
              src={require("../../../assets/images/loading.gif").default}
              alt="loading ..."
            />
          </div>
        )}
        {productList.map((product, index) => {
          return (
            <CardProduct
              key={index}
              itemProduct={product}
            />
          );
        })}
      </div>
      <div className="Pagination">
        <Pagination
          pageChangeClick={getProductListByPagination}
          itemPage={noItemPage}
          totalItem={totalRow}
        />
      </div>
    </div>
  );
}

export default BodyProductList;
