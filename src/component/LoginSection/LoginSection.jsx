import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from "formik";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Yup from "../../validation/CustomValidation";
import Input from './../Input/Input';
import "./LoginSection.scss";
LoginSection.propTypes = {
  
};

function LoginSection(props) {
  const initialValue = {
    email: "",
    password:"",
  };
  const validations = Yup.object().shape({
    email: Yup.string().requiredCustome("Vui lòng nhập địa chỉ email"),
    password: Yup.string().requiredCustome("Vui lòng nhập mật khẩu"),
  });
  return (
    <div className="Login">
      <Formik initialValues={initialValue} validationSchema={validations}>
        <Form className="LoginForm">
          <Field
            name="email"
            component={Input}
            type="text"
            placeholder="Nhập email vào đây"
          />
          <Field
            name="password"
            component={Input}
            type="password"
            placeholder="Nhập mật khẩu vào đây"
          />
          <div className="ContainerButton">
            <Button className="Button" type="submit">Đăng nhập</Button>
            <Link to={"account/forget-password"} className="Link">
              Quên mật khẩu
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginSection;