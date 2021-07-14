import React,{ useEffect, useState } from 'react';
import NavigateMenu from "../../component/NavigateMenu/NavigateMenu";
import HeaderPage from "../../component/HeaderPage/HeaderPage";
import Search from './../Search/Search';
import Cart from "../Cart/Cart";
import './HeaderMain.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { addMenu } from '../../actions/menu';


function HeaderMain() {
  const [listMenu, setListMenu] = useState([]);
  const disPatch =useDispatch();
  useEffect(() => {
    getAllMenu().then((value) => {
      setListMenu(value);
      disPatch(addMenu(value));
    });
  }, []);
  return (
    <div className="HeaderMain">
      <div className="ContainerHeader">
        <HeaderPage />
      </div>
      <div className="ContainerCart">
        <div className="ContainerHeaderLeft">
          <img src={require("../../assets/images/logo.png").default} />
        </div>
        <div className="ContainerHeaderRight">
          <div className="ContainerSlogan">
            <div className="ContainerIcon">
              <FontAwesomeIcon icon="shipping-fast" className="Icon" />
              <span>GIAO HÀNG MIỄN PHÍ</span>
            </div>
            <div className="ContainerIcon">
              <FontAwesomeIcon icon="money-bill-alt" className="Icon" />
              <span>THANH TOÁN LINH HOẠT</span>
            </div>
            <div className="ContainerIcon">
              <FontAwesomeIcon icon="sync-alt" className="Icon" />
              <span>TRẢ HÀNG TRONG 30 NGÀY</span>
            </div>
          </div>
          <div className="ContainerSearchAndCart">
            <div className="ContainerSearch">
              <Search />
            </div>
            <div className="ContainerCart">
              <Cart />
            </div>
          </div>
        </div>
      </div>
      <div className="ContainerNavigate">
        <NavigateMenu listMenu={listMenu} />
      </div>
    </div>
  );
}

const getAllMenu = async () => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const urlRequest = "/json/menu.json";
    const response = await fetch(urlRequest, header);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

export default HeaderMain;