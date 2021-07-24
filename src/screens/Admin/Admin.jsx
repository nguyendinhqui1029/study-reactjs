import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Admin.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
Admin.propTypes = {};

function Admin(props) {
  const [showIconMenu, setShowIconMenu] = useState(false);
  return (
    <div className="Admin">
      <div className={showIconMenu ? "LeftSectionIcon" : "LeftSection"}>
        <div className="Menu">
          <div className="Logo">
            <Link className="Link" to="/">
              <img
                src={require("../../assets/images/logo.png").default}
                alt="Loading..."
              />
            </Link>
          </div>
          <div className="Item">
            <Link className="Link" to="/">
              <FontAwesomeIcon icon="tachometer-alt" className="Icon" />
              <span className="Label">Trang chủ</span>
            </Link>
          </div>
          <div className="Item">
            <Link className="Link">
              <FontAwesomeIcon icon="arrow-right" className="Icon" />
              <span className="Label">Khách hàng</span>
            </Link>
          </div>
          <div className="Item">
            <Link className="Link">
              <FontAwesomeIcon icon="arrow-right" className="Icon" />
              <span className="Label">Sản phẩm</span>
            </Link>
          </div>
        </div>
        <div className="Button" onClick={() => setShowIconMenu(!showIconMenu)}>
          <FontAwesomeIcon icon="angle-left" className="Icon" />
        </div>
      </div>
      <div className="RightSection">
        <div className="NavTop">
          <div className="Item">
            <FontAwesomeIcon icon="bars" className="Icon" />
          </div>
          <div className="MenuGroup">
            <div className="Item">
              <FontAwesomeIcon icon="bell" className="Icon" />
              <span>10</span>
            </div>
            <div className="Item">
              <FontAwesomeIcon icon="envelope-open" className="Icon" />
              <span>10</span>
            </div>
            <div className="Avatar">
              <img
                src={require("../../assets/images/logo.png").default}
                alt="Loading avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
