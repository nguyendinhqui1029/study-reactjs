import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import VerticalMenu from "../../component/VerticalMenu/VerticalMenu";
import { Switch, Route, useHistory } from "react-router-dom";
import NavigateQuickly from "./../../component/NavigateQuickly/NavigateQuickly";
import Header from "./../../component/Header/Header";
import LoginSection from "../../component/LoginSection/LoginSection";
import RegisterSection from "./../../component/RegisterSection/RegisterSection";
import ForgetPasswordSection from "./../../component/ForgetPasswordSection/ForgetPasswordSection";
import "./Login.scss";
Login.propTypes = {};

function Login(props) {
  const history = useHistory();
  const [header, setHeader] = useState("Đăng nhập");
  history.listen((location) => {
    const item = dataList.find((item) => {
      return item.path.includes(location.pathname);
    });
    if (item && item.hasOwnProperty("title")) setHeader(item.title);
  });
  
  function navigatePage(item) {
    setHeader(item.title);
    history.push(item.path[0]);
  }

  return (
    <div className="ContainerBody">
      <div className="ContainerBodyLeft">
        <VerticalMenu
          categoryList={dataList}
          title="Tài khoản"
          selectedCategory={navigatePage}
        />
      </div>
      <div className="ContainerBodyRight">
        <div className="NavigateQuickly">
          <NavigateQuickly />
        </div>
        <div className="Header">
          <Header title={header} />
        </div>
        {/* <Router> */}
        <Switch>
          <Route path={["/account", "/account/login"]} exact>
            <LoginSection />
          </Route>
          <Route path="/account/register" exact>
            <RegisterSection />
          </Route>
          <Route path="/account/forget-password" exact>
            <ForgetPasswordSection />
          </Route>
        </Switch>
        {/* </Router> */}
      </div>
    </div>
  );
}

const dataList = [
  {
    id: "1",
    title: "Đăng nhập",
    iconLeft: "share-square",
    path: ["/account", "/account/login"],
  },
  {
    id: "2",
    title: "Đăng kí",
    iconLeft: "key",
    path: ["/account/register"],
  },
  {
    id: "3",
    title: "Quên mật khẩu",
    iconLeft: "key",
    path: ["/account/forget-password"],
  },
];
export default Login;
