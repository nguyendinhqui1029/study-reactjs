import React from 'react';
import { Field, Formik, Form } from "formik";
import { Button } from '@material-ui/core';
import Yup from '../../validation/CustomValidation';
import Input from './../Input/Input';
import './ForgetPasswordSection.scss';
function ForgetPasswordSection() {
  const initialValue = {
    email: ""
  };
  const validations = Yup.object().shape({
    email: Yup.string().requiredCustome("Vui lòng nhập địa chỉ email")
  });
  return (
    <div className="ForgetPasswordSection">
      <Formik initialValues={initialValue} validationSchema={validations}>
        <Form className="ForgetPasswordForm">
          <Field
            name="email"
            component={Input}
            type="text"
            placeholder="Nhập email vào đây"
          />
          <div className="ContainerButton">
            <Button className="Button" type="submit">
              Lấy lại mật khẩu
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ForgetPasswordSection;