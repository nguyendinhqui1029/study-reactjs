import React from 'react';
import PropTypes from 'prop-types';
import './ContactForm.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
ContactForm.propTypes = {
  
};

function ContactForm(props) {
  return (
    <div className="ContactForm">
      <h3>GỬI THÔNG TIN LIÊN HỆ</h3>
      <span>
        Xin vui lòng điền các yêu cầu vào mẫu dưới đây và gửi cho chúng tôi.
        Chúng tôi sẽ trả lời bạn ngay sau khi nhận được. Xin chân thành cảm ơn!
      </span>
      <div className="ContainerInput">
        <div className="ContainerIcon">
          <FontAwesomeIcon icon="user" />
        </div>
        <input type="text" placeholder="Họ tên" />
      </div>
      <div className="ContainerInput">
        <div className="ContainerIcon">
          <FontAwesomeIcon icon="map-marker-alt" />
        </div>
        <input type="text" placeholder="Địa chỉ" />
      </div>
      <div className="ContainerInput">
        <div className="ContainerIcon">
          <FontAwesomeIcon icon="envelope" />
        </div>
        <input type="text" placeholder="Email" />
      </div>
      <div className="ContainerInput">
        <div className="ContainerIcon">
          <FontAwesomeIcon icon="phone-alt" />
        </div>
        <input type="text" placeholder="Điện thoại" />
      </div>
      <div className="ContainerInput">
        <div className="ContainerIcon">
          <FontAwesomeIcon icon="list-alt" />
        </div>
        <input type="text" placeholder="Tiêu đề" />
      </div>
      <div className="ContainerInput">
        <textarea rows="5" placeholder="Nội dung"></textarea>
      </div>
      <div className="ButtonSend">
        <span className="ButtonSend">Gửi</span>
      </div>
    </div>
  );
}

export default ContactForm;