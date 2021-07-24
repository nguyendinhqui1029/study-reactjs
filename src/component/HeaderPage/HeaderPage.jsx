import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HeaderPage.scss";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function HeaderPage() {
  const menuList = useSelector((menu) => menu.menu.menuList);
  const account = {
    label: "Tài khoản",
    path: "/account",
    subMenu: [
      {
        label: "Kiểm tra đơn hàng",
        path: "/my-order",
        icon: "pen-square",
      },
      { label: "Đăng nhập", path: "/account/login", icon: "share-square" },
      { label: "Đăng kí", path: "/account/register", icon: "key" },
    ],
  };
  const [dataSourceMenu, setDataSourceMenu] = useState([]);
  useEffect(() => {
    setDataSourceMenu([...menuList, account]);
  }, [menuList]);
  const { pathname } = useLocation();
  const [isCloseMenu, setIsCloseMenu] = useState(false);
  function navigateClick(item) {
    if(item.hasOwnProperty("subMenu")) return;
    setIsCloseMenu(true);
  }
  return (
    <div className="HeaderPage">
      <div className="Hotline">
        <div>
          <FontAwesomeIcon className="IconPhone" icon="phone" />
          <span>Hotline: 0777 20 30 42</span>
        </div>
      </div>
      <div className="NavigateInfo">
        {account.subMenu.map((item,index)=>{
          return (
            <div className="ContainerNav" key={index}>
              <Link
                className={item.path === pathname ? "Link Active" : "Link"}
                to={item.path}
              >
                <FontAwesomeIcon className="IconPhoneNav" icon={item.icon} />
                {item.label}
              </Link>
            </div>
          );
        })}
        
      </div>
      <div className="MenuMobile">
        <FontAwesomeIcon
          className="IconBars"
          icon="bars"
          onMouseOver={() => setIsCloseMenu(false)}
        />
      </div>
      <div
        className={isCloseMenu ? "MenuMobileDetail Hidden" : "MenuMobileDetail"}
      >
        {dataSourceMenu.map((item, index) => {
          return (
            <div className="ContainerNav" key={index}>
              <Link
                className="Link"
                to={item.path}
                className={item.path === pathname ? "Link Active" : "Link"}
                onClick={() => navigateClick(item)}
              >
                {item.hasOwnProperty("icon") && (
                  <FontAwesomeIcon className="IconPhoneNav" icon={item.icon} />
                )}
                {item.label}
              </Link>
              {item.hasOwnProperty("subMenu")
                ? item.subMenu.map((subMenu, index) => {
                    return (
                      <div className="subMenu" key={`sub${index}`}>
                        <Link
                          className="LinkSub"
                          to={subMenu.path}
                          onClick={() => navigateClick(subMenu)}
                        >
                          {subMenu.hasOwnProperty("icon") && (
                            <FontAwesomeIcon
                              className="IconPhoneNav"
                              icon={subMenu.icon}
                            />
                          )}
                          {subMenu.label}
                        </Link>
                      </div>
                    );
                  })
                : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeaderPage;
