import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import NavigateQuickly from "./../../component/NavigateQuickly/NavigateQuickly";
import Header from "./../../component/Header/Header";
import CardProduct from "./../../component/CardProduct/CardProduct";
import Pagination from "./../../component/Pagination/Pagination";
import { useSelector } from "react-redux";
import "./ResultSearch.scss";
import Loading from "../../component/Loading/Loading";

function ResultSearch() {
  const ITEM_PECENT_PAGE = 20;
  const { state: { enter = "", fillter = "" } = {} } = useLocation();
  const categories = useSelector((category) => category.categories.categories);
  const [productFilter, setProductFilter] = useState([]);
  const [productFilterPagination, setProductFilterPagination] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setIsLoading(true);
    const listId = getAllCategorySelected(fillter, categories);
    const listDataSource = [];
    setCurrentPage(1);
    if (fillter === "ALL") {
      try {
        getProductList(fillter).then((result) => {
          if (enter) {
            result.forEach((item) => {
              if (item.productName.includes(enter)) {
                listDataSource.push(item);
              }
            });
          } else {
            listDataSource.push(...result);
          }

          setProductFilter([...listDataSource]);
          setProductFilterPagination(
            listDataSource.splice(0, ITEM_PECENT_PAGE)
          );
          setIsLoading(false);
        });
      } catch (error) {
         console.log("call api fail", error);
      }
      
    } else {
      try {
          Promise.all(
            listId.map((id) => {
              return getProductList(id).then((item) => {
                const arrayFilter = [];
                item.forEach((itemFilter) => {
                  if (itemFilter.productName.includes(enter)) {
                    arrayFilter.push(itemFilter);
                  }
                });
                return arrayFilter;
              });
            })
          ).then((result) => {
            result.forEach((item) => {
              listDataSource.push(...item);
            });
            setProductFilter([...listDataSource]);
            setProductFilterPagination(
              listDataSource.splice(0, ITEM_PECENT_PAGE)
            );
            setIsLoading(false);
          });
      } catch (error) {
        console.log("call api fail", error);
      }
      
    }
  }, [enter, fillter, categories]);

  function getProductListByPagination(pagination) {
    const { currentPage } = pagination;
    const start = currentPage * ITEM_PECENT_PAGE - ITEM_PECENT_PAGE || 0;
    const end = ITEM_PECENT_PAGE;
    const listMap = [...productFilter];
    setProductFilterPagination([...listMap.splice(start, end)]);
  }
  return (
    <div className="ResultSearch">
      <div className="NavigateQuickly">
        <NavigateQuickly />
      </div>
      <div className="Header">
        <Header title="Sản phẩm" />
      </div>
      <div className="BodySearch">
        <div className="ProductList">
          {isLoading ? <Loading isLoading={isLoading} />: productFilterPagination.length === 0 ? (
            <div>Không tìm thất kết quả.</div>
          ) : (
            productFilterPagination.map((product, index) => {
              return <CardProduct key={index} itemProduct={product} />;
            })
          )}
        </div>
        {productFilterPagination.length !== 0 && (
          <div className="Pagination">
            <Pagination
              pageChangeClick={getProductListByPagination}
              itemPage={ITEM_PECENT_PAGE}
              totalItem={productFilter.length}
              currentPage={currentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}

const getAllCategorySelected = (categoriId, categories) => {
  const category = categories.find((item) => {
    return item.id === categoriId;
  });
  const arrayIdCategory = [];
  if (category) {
    category.subCategory.forEach((item) => {
      const itemMap = item.subCategory.map((itemMap) => {
        return itemMap.id;
      });
      arrayIdCategory.push(...itemMap);
    });
  }
  return arrayIdCategory;
};

const getProductList = async (categoryId) => {
  const uri = "https://api-json-server-290621.herokuapp.com/api/products";
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  const url = categoryId !== "ALL" ? `${uri}?categoryId=${categoryId}` : uri;
  const response = await fetch(url, headers);
  const responseJson = await response.json();
  return responseJson;
};
export default ResultSearch;
