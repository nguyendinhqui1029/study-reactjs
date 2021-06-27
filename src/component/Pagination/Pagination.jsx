import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Pagination.scss";
Pagination.propTypes = {
  currentPage: PropTypes.number,
  itemPage: PropTypes.number,
  totalItem: PropTypes.number,
  limit: PropTypes.number,
  pageChangeClick: PropTypes.func,
};
Pagination.defaultProps = {
  currentPage: 0,
  itemPage: 0,
  totalItem: 0,
  limit: 5,
  pageChangeClick: null,
};

function getTotalPage(totalPage, limitPage) {
  return limitPage >= totalPage ? totalPage : limitPage;
}
function Pagination(props) {
  const FIRST_PAGE = 1;
  const { currentPage, itemPage, totalItem, limit, pageChangeClick } = props;
  const totalPage = Math.floor(totalItem / itemPage);

  const [startPage, setStartPage] = useState(FIRST_PAGE);
  const [endPage, setEndPage] = useState(() => {
    return getTotalPage(totalPage, limit);
  });
  const [current, setCurrent] = useState(currentPage);

  function updateStartEndPage(indexPage, limit) {
    switch (indexPage) {
      case endPage:
        {
          const startPage =
            indexPage >= totalPage
              ? Math.max(totalPage - limit, FIRST_PAGE)
              : indexPage;
          const endPage =
            indexPage + limit >= totalPage
              ? totalPage
              : indexPage + limit - FIRST_PAGE;
          setStartPage(startPage);
          setEndPage(endPage);
          setCurrent(indexPage);
        }
        break;
      case startPage:
        {
          const startPage =
            indexPage <= FIRST_PAGE
              ? FIRST_PAGE
              : indexPage - limit + FIRST_PAGE;
          const endPage = indexPage <= FIRST_PAGE ? limit : indexPage;
          setStartPage(startPage);
          setEndPage(endPage);
          setCurrent(indexPage);
        }
        break;
      default:
        setCurrent(indexPage);
    }
  }

  function changePagination(indexPage) {
    if (pageChangeClick) {
      updateStartEndPage(indexPage, limit);
      pageChangeClick({ ...{ currentPage: indexPage }, itemPage, totalItem });
    }
  }

  function nextClick() {
    const pageSelected = current + 1;
    updateStartEndPage(pageSelected, limit);
    pageChangeClick({
      ...{ currentPage: pageSelected },
      itemPage,
      totalItem,
    });
  }

  function prevClick() {
    const pageSelected = current - 1;
    updateStartEndPage(pageSelected, limit);
    pageChangeClick({
      ...{ currentPage: pageSelected },
      itemPage,
      totalItem,
    });
  }

  const paginationRender = [
    <span
      className={current <= 1 ? "NextIndex IsDisable" : "NextIndex"}
      onClick={() => prevClick()}
      key={"next"}
    >
      <FontAwesomeIcon icon={faAngleDoubleLeft} className="IconPagination" />
    </span>,
  ];
  for (let ind = startPage; ind <= endPage; ind++) {
    paginationRender.push(
      <span
        key={ind}
        className={ind === current ? "PageIndex Active" : "PageIndex"}
        onClick={() => changePagination(ind)}
      >
        {ind}
      </span>
    );
  }
  paginationRender.push(
    <span
      className={current >= totalPage ? "PrevIndex IsDisable" : "PrevIndex"}
      onClick={() => nextClick()}
      key={"prev"}
    >
      <FontAwesomeIcon icon={faAngleDoubleRight} className="IconPagination" />
    </span>
  );

  return <div className="Pagination">{paginationRender}</div>;
}

export default Pagination;
