import React from "react";
import "./ContactForm.scss";
import { Formik, FastField, Form } from "formik";
import Input from "../Input/Input";
import Textarea from "./../Textarea/Textarea";

function ContactForm() {
  const initialValues = {
    name: "",
    address: "",
    email: "",
    phone: "",
    title: "",
    description: "",
  };
  return (
    <div className="ContactForm">
      <h3>GỬI THÔNG TIN LIÊN HỆ</h3>
      <span>
        Xin vui lòng điền các yêu cầu vào mẫu dưới đây và gửi cho chúng tôi.
        Chúng tôi sẽ trả lời bạn ngay sau khi nhận được. Xin chân thành cảm ơn!
      </span>
      <Formik initialValues={initialValues}>
        <Form>
          <FastField
          className="ContainerField"
            name="name"
            component={Input}
            iconLeft="user"
            type="text"
            placeholder="Họ tên"
          />
          <FastField
            name="address"
            component={Input}
            iconLeft="map-marker-alt"
            type="text"
            placeholder="Địa chỉ"
          />
          <FastField
            name="email"
            component={Input}
            iconLeft="envelope"
            type="text"
            placeholder="Email"
          />
          <FastField
            name="phone"
            component={Input}
            iconLeft="phone-alt"
            type="text"
            placeholder="Điện thoại"
          />
          <FastField
            name="title"
            component={Input}
            iconLeft="list-alt"
            type="text"
            placeholder="Tiêu đề"
          />
          <FastField
            name="description"
            component={Textarea}
            rows={5}
            placeholder="Nội dung"
          />
          <div className="ButtonSend">
            <button type="submit">
              Gửi
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
