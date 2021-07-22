import React from 'react';
import PropTypes from 'prop-types';
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useRouteMatch } from "react-router-dom";
import './Footer.scss';
Footer.propTypes = {
  
};

function Footer(props) {
  return (
    <div className="Footer">
      <div className="ContainerAbout">
        <Header title="Về chúng tôi" />
        <ul>
          <li>
            <Link to="/about" className="Link">
              Giới thiệu
            </Link>
          </li>
          <li>
            <Link to="/delivery" className="Link">
              Giao hàng - Đổi trả
            </Link>
          </li>
          <li>
            <Link to="/security" className="Link">
              Chính sách bảo mật
            </Link>
          </li>
          <li>
            <Link to="/contact" className="Link">
              Liên hệ
            </Link>
          </li>
        </ul>
      </div>
      <div className="ContainerHelp">
        <Header title="Trợ giúp" />
        <ul>
          <li>
            <Link to="/guide-order" className="Link">
              Hướng dẫn mua hàng
            </Link>
          </li>
          <li> <Link to="/guide-payment" className="Link">Hướng dẫn thanh toán</Link></li>
        </ul>
      </div>
      <div className="ContainerCompanyInfo">
        <Header title="Thông tin công ty" />
        <h3>CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ</h3>
        <p>
          <FontAwesomeIcon icon="map-marker-alt" className="Icon" />
          50A/2 Bình Tân, Bình Mỹ, Châu Phú, An Giang.
        </p>
        <p>
          <FontAwesomeIcon icon="envelope" className="Icon" />
          <Link to="updateafter" className="Link">
            nguyendinhqui1029@gmail.com
          </Link>
        </p>
        <p>
          <FontAwesomeIcon icon="phone-alt" className="Icon" />
          Phone: 0777 203 042
        </p>
      </div>
      <div className="ContainerSocial">
        <Header title="Mạng xã hội" />
        <span className="Facebook">
          <Link to="myfacebook" className="Link">
            <img src="/facebook-square-brands.svg" />
          </Link>
        </span>
        <span className="Youtuber">
          <Link to="myyoutube" className="Link">
            <img src="/youtube-brands.svg" />
          </Link>
        </span>
        <span className="Google">
          <Link to="mygoogle" className="Link">
            <img src="/google-plus-square-brands.svg" />
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Footer;