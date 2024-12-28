import React from "react";
import './Contact.scss';

import NavigateQuickly from "../../component/NavigateQuickly/NavigateQuickly";
import Header from "../../component/Header/Header";
import Info from "../../component/Info/Info";
import ContactForm from "../../component/ContactForm/ContactForm";

function Contact() {
  return (
    <div className="ContainerBody">
      <div className="ContainerBodyLeft">
        <div className="ContainerChild">
          <NavigateQuickly />
        </div>
        <div className="ContainerChild">
          <Header title="Thông tin liên hệ" />
        </div>
        <div className="ContainerChild">
          <div className="Image">
            <img src={require('../../assets/images/logo.png').default} alt="Loading ..."/>
          </div>
          <div className="Info">
            <Info contactInfo={personalInfo} />
          </div>
        </div>
        <hr />
        <div className="ContainerChild">
          <div className="ContactForm">
            <ContactForm />
          </div>
          <div className="Map">Google map we will update later.</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

const personalInfo={
    "name": "CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ",
    "contact": [
        {
            "icon": "map-marker-alt",
            "content": "50A/2 Bình Tân, Bình Mỹ, Châu Phú, An Giang.",
            "label": "",
            "url": ""
        },
        {
            "icon": "envelope",
            "content": "nguyendinhqui1029@gmail.com",
            "label": "Email:",
            "url": "nguyendinhqui1029@gmail.com"
        },
        {
            "icon": "phone-alt",
            "label": "Điện thoại:",
            "content": "0777 203 042",
            "url": ""
        }
    ]
};

