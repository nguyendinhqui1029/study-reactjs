import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faList,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import "./NavigateMenu.scss";

NavigateMenu.propTypes = {
  listCategory: PropTypes.array,
};

function NavigateMenu(props) {
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
          <li>
            Máy ảnh &amp; Máy quay phim
            <FontAwesomeIcon icon={faAngleRight} className="IconRight" />
            <div className="SubMenu">
              <div className="ContentSubMenu">
                <h5>MÁY QUAY PHIM</h5>
                <ul>
                  <li>Máy quy phim sony</li>
                  <li>Máy quay phim panasonic </li>
                  <li>Máy quy phim sony</li>
                </ul>
                <h5>MÁY ẢNH SỐ</h5>
                <ul>
                  <li>Máy quy phim sony</li>
                  <li>Máy quay phim panasonic </li>
                  <li>Máy quy phim sony</li>
                  <li>Máy quy phim sony</li>
                  <li>Máy quay phim panasonic</li>
                  <li>Máy quy phim sony</li>
                </ul>
              </div>
              <div className="ContentSubMenu">
                <h5>BỘ ĐỒ THỂ THAO NAM</h5>
                <ul>
                  <li>Máy quy phim sony</li>
                  <li>Máy quay phim panasonic </li>
                  <li>Máy quy phim sony</li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            Máy để bàn &amp; Laptop
            <FontAwesomeIcon icon={faAngleRight} className="IconRight" />
            <ul className="SubMenu">
              <li> Máy ảnh &amp; Máy quay phim</li>
            </ul>
          </li>
          <li>
            Điện thoại
            <FontAwesomeIcon icon={faAngleRight} className="IconRight" />
          </li>
          <li>
            Máy tính bảng
            <FontAwesomeIcon icon={faAngleRight} className="IconRight" />
          </li>
        </ul>
      </div>
      <div className="Menu">
        <ul>
          <li className="active">Trang chu</li>
          <li>Gioi thieu</li>
          <li>San pham</li>
          <li>Tin tuc</li>
          <li>Lien he</li>
        </ul>
      </div>
    </div>
  );
}

export default NavigateMenu;
