import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dashboar from "./Dashboar/Dashboar";
import Customer from './Customer/Customer';
import Products from './Products/Products';
import "./Admin.scss";

function Admin() {
  const [showIconMenu, setShowIconMenu] = useState(false);
  const [showMenuIconLeft, setShowMenuIconLeft] = useState(false);
  return (
    <div className="Admin">
      <div
        className={
          showIconMenu || showMenuIconLeft ? "LeftSectionIcon" : "LeftSection"
        }
      >
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
            <Link className="Link" to="/admin">
              <FontAwesomeIcon icon="tachometer-alt" className="Icon" />
              <span className="Label">Thống kê</span>
            </Link>
          </div>
          <div className="Item">
            <Link className="Link" to="/admin/customer">
              <FontAwesomeIcon icon="users" className="Icon" />
              <span className="Label">Khách hàng</span>
            </Link>
          </div>
          <div className="Item">
            <Link className="Link" to="/admin/products">
              <FontAwesomeIcon icon="tshirt" className="Icon" />
              <span className="Label">Sản phẩm</span>
            </Link>
          </div>
        </div>
        <div className="Button" onClick={() => {setShowIconMenu(!showIconMenu);setShowMenuIconLeft(false);}}>
          <FontAwesomeIcon icon="angle-left" className="Icon" />
        </div>
      </div>
      <div className="RightSection">
        <div className="NavTop">
          <div
            className="Item"
            onClick={() => {setShowMenuIconLeft(!showMenuIconLeft);setShowIconMenu(false);}}
          >
            <FontAwesomeIcon icon="bars" className="IconHumburger" />
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
        <div className="BodyAdmin">
          <Switch>
            <Route path="/admin" exact>
              <Dashboar />
            </Route>
            <Route path="/admin/customer" exact>
              <Customer />
            </Route>
            <Route path="/admin/products" exact>
              <Products />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Admin;
