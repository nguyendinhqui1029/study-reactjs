import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Field, Formik } from "formik";
import { Form } from "formik";
import { Button } from "@material-ui/core";
import Header from "../Header/Header";
import Input from "./../Input/Input";
import Yup from "../../validation/CustomValidation";
import SelectedInput from "./../SelectedInput/SelectedInput";
import "./RegisterSection.scss";
RegisterSection.propTypes = {};
function RegisterSection(props) {
const [cities, setCities] = useState([]);
const [districtsByCity, setDistrictsByCity] = useState([]);
const [districts, setDistricts] = useState([]);
const [selectedCity, setSelectedCity] = useState(null);

const fetchCities = async () => {
  try {
    const header = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const urlRequest = "/json/cities.json";
    const response = await fetch(urlRequest, header);
    const responseJson = await response.json();
    const responseJsonMap = responseJson.map((item) => {
      return {
        value: item.id,
        label: item.label,
      };
    });
    setCities(responseJsonMap);
  } catch (error) {
    console.log(error);
  }
};

async function fetchDistricts() {
  try {
    const districtsList = [];
    if (!districts.length) {
      const header = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      const urlRequest = "/json/districts.json";
      const response = await fetch(urlRequest, header);
      const responseJson = await response.json();
      const responseJsonMap = responseJson.map((item) => {
        return {
          districts: item.district.map((item) => {
            return { value: item.alias, label: item.label };
          }),
          idCity: item.idCity,
        };
      });

      setDistricts(responseJsonMap);
      responseJsonMap.forEach((district) => {
        district.idCity === selectedCity &&
          districtsList.push(...district.districts);
      });

      setDistrictsByCity(Object.assign(districtsList));
    } else {
      districts.forEach((district) => {
        district.idCity === selectedCity &&
          districtsList.push(...district.districts);
      });
      setDistrictsByCity(Object.assign(districtsList));
    }
  } catch (error) {
    console.log(error);
  }
}


  useEffect(() => {
    fetchCities();
  }, []);

  useEffect(() => {
    fetchDistricts();
  }, [selectedCity]);

  const initialValue = {
    email: "",
    password: "",
    repassword: "",
    name: "",
    gender: "",
    birthdate: "",
    phone: "",
    address: "",
    city: "",
    district: "",
  };
  const validations = Yup.object().shape({
    email: Yup.string().requiredCustome("Vui lòng nhập địa chỉ email"),
    password: Yup.string().requiredCustome("Vui lòng nhập mật khẩu"),
    repassword: Yup.string().requiredCustome("Vui lòng nhập mật khẩu"),
    name: Yup.string().requiredCustome("Vui lòng nhập họ tên"),
    gender: Yup.string().requiredCustome("Vui lòng chọn giới tính"),
    birthdate: Yup.string().requiredCustome("Vui lòng chọn ngày sinh"),
    phone: Yup.string().requiredCustome("Vui lòng nhập số điện thoại"),
    address: Yup.string().requiredCustome("Vui lòng nhập địa chỉ"),
    city: Yup.string().requiredCustome("Vui lòng chọn tỉnh hoặc thành phố"),
    district: Yup.string().requiredCustome("Vui lòng chọn quận hoặc huyện"),
  });
  return (
    <div className="RegisterSection">
      <Formik initialValues={initialValue} validationSchema={validations}>
        <Form className="RegisterForm">
          <div className="Header">
            <Header title="Thông tin tài khoản" />
          </div>

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
          <Field
            name="repassword"
            component={Input}
            type="password"
            placeholder="Nhập lại mật khẩu vào đây"
          />
          <div className="Header">
            <Header title="Thông tin cá nhân" />
          </div>
          <Field
            name="name"
            component={Input}
            type="text"
            placeholder="Nhập lại họ tên"
          />
          <Field
            name="gender"
            component={SelectedInput}
            dataSource={[
              { value: "male", label: "Nam" },
              { value: "female", label: "Nữ" },
            ]}
            placeHolder="Vui lòng chọn giới tính"
          />
          <Field
            name="birthdate"
            component={Input}
            type="date"
            placeholder="Vui lòng chọn ngày sinh"
          />
          <Field
            name="phone"
            component={Input}
            type="text"
            placeholder="Vui lòng nhập số điện thoại"
          />
          <Field
            name="address"
            component={Input}
            type="text"
            placeholder="Vui lòng nhập địa chỉ"
          />
          <Field
            name="city"
            component={SelectedInput}
            dataSource={cities}
            optionEventChange={setSelectedCity}
            placeHolder="Vui lòng chọn thành phố"
          />
          <Field
            name="district"
            component={SelectedInput}
            dataSource={districtsByCity}
            disabled={!districtsByCity.length}
            placeHolder="Vui lòng chọn quận hoặc huyện"
          />
          <div className="ContainerButton">
            <Button className="Button" type="submit">
              Đăng kí
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default RegisterSection;
