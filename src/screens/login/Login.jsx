import React, { useState } from "react";
import VerticalMenu from "../../component/VerticalMenu/VerticalMenu";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavigateQuickly from "../../component/NavigateQuickly/NavigateQuickly";
import Header from "../../component/Header/Header";
import LoginSection from "../../component/LoginSection/LoginSection";
import RegisterSection from "../../component/RegisterSection/RegisterSection";
import ForgetPasswordSection from "../../component/ForgetPasswordSection/ForgetPasswordSection";
import "./Login.scss";
Login.propTypes = {};

function Login(props) {
  const navigate = useNavigate();
  const [header, setHeader] = useState("Đăng nhập");
  navigate.listen((location) => {
    const item = dataList.find((item) => {
      return item.path.includes(location.pathname);
    });
    if (item && item.hasOwnProperty("title")) setHeader(item.title);
  });
  
  function navigatePage(item) {
    setHeader(item.title);
    navigate(item.path[0]);
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
        <Routes>
          <Route path={["/account", "/account/login"]} exact>
            <LoginSection />
          </Route>
          <Route path="/account/register" exact>
            <RegisterSection />
          </Route>
          <Route path="/account/forget-password" exact>
            <ForgetPasswordSection />
          </Route>
        </Routes>
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
