import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Input from "../../component/Input/Input";
import SelectedInput from "../../component/SelectedInput/SelectedInput";
import { Formik, Form, FastField, Field } from "formik";
import Yup from "../../validation/CustomValidation";
import "./DeliveryAddress.scss";
DeliveryAddress.propTypes = {};
DeliveryAddress.defaultProps = {};

function DeliveryAddress(props) {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [districtsByCity, setDistrictsByCity] = useState([]);
  const [districtsByCitySubAddress, setDistrictsByCitySubAddress] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCitySubAddress, setSelectedCitySubAddress] = useState(null);
  const [isShowOtherAddress, setShowOtherAddress] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    address: "",
    city: "",
    district: "",
  };
  const fetchCities = async () => {
    try {
      const header = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      const urlRequest = "./json/cities.json";
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

  useEffect(() => {
    fetchCities();
  }, []);

  async function fetchDistricts() {
    try {
      const districtsList = [];
      const districtsSubAddress = [];
      if (!districts.length) {
        const header = {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        };
        const urlRequest = "./json/districts.json";
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
          district.idCity === selectedCitySubAddress &&
            districtsSubAddress.push(...district.districts);
        });

        setDistrictsByCity(Object.assign(districtsList));
        setDistrictsByCitySubAddress(Object.assign(districtsSubAddress));
      } else {
        districts.forEach((district) => {
          district.idCity === selectedCity &&
            districtsList.push(...district.districts);
          district.idCity === selectedCitySubAddress &&
            districtsSubAddress.push(...district.districts);
        });
         console.log(districtsList);
        setDistrictsByCity(Object.assign(districtsList));
        setDistrictsByCitySubAddress(Object.assign(districtsSubAddress));
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchDistricts();
  }, [selectedCity, selectedCitySubAddress]);

  function changeOtherAddress(event) {
    setShowOtherAddress(event.target.checked);
  }

  return (
    <div className="DeliveryAddress">
      <div className="HeaderContainer">
        <h3 className="HeaderContent">1. ĐỊA CHỈ THANH TOÁN VÀ GIAO HÀNG</h3>
      </div>
      <div className="ContentContainer">
        <h3 className="HeaderContent">THÔNG TIN THANH TOÁN</h3>
        <div className="ContainerLink">
          <Link to="link123" className="RegisterLink">
            Đăng ký tài khoản mua hàng
          </Link>
          <span>|</span>
          <Link to="link124" className="LoginLink">
            Đăng nhập
          </Link>
        </div>
        <div className="MainInfo">
          <h5>Mua hàng không cần tài khoản</h5>
          <Formik
            initialValues={initialValues}
            render={(formik) => {
              setSelectedCity(formik.values.city);
              return (
                <Form className="FormInfo">
                  <FastField
                    name="name"
                    component={Input}
                    type="text"
                    placeholder="Họ và Tên"
                  />
                  <FastField
                    name="email"
                    component={Input}
                    type="text"
                    placeholder="Email"
                  />
                  <FastField
                    name="address"
                    component={Input}
                    type="text"
                    placeholder="Địa chỉ"
                  />
                  <Field           
                    name="city"
                    component={SelectedInput}
                    dataSource={cities}
                  />

                  <Field
                    as="select"
                    name="district"
                    component={SelectedInput}
                    dataSource={districtsByCity}
                    disabled={!districtsByCity.length}
                  ></Field>
                  <textarea
                    value=""
                    onChange={() => {}}
                    placeholder="Ghi chú đơn hàng"
                    rows="5"
                  />
                </Form>
              );
            }}
          />
        </div>
        <h3 className="HeaderContent">THÔNG TIN GIAO HÀNG</h3>
        <div className="SubInfo">
          <span>
            <input
              type="checkbox"
              name="otherAddress"
              placeholder="Họ và Tên"
              onChange={(event) => changeOtherAddress(event)}
            />
            <span>Giao hàng địa chỉ khác</span>
          </span>

          <Formik
            initialValues={initialValues}
            render={(formik) => {
              return (
                <Form className={isShowOtherAddress ? "FormInfo" : "SubForm"}>
                  <FastField
                    name="nameSubAddress"
                    component={Input}
                    type="text"
                    placeholder="Họ và Tên"
                  />
                  <FastField
                    name="emailSubAddress"
                    component={Input}
                    type="text"
                    placeholder="Email"
                  />
                  <FastField
                    name="addressSubAddress"
                    component={Input}
                    type="text"
                    placeholder="Địa chỉ"
                  />
                  <Field
                    name="citySubAddress"
                    component={SelectedInput}
                    dataSource={cities}
                    placeHolder="Vui lòng chọn thành phố"
                  />
                  <FastField
                    name="districtSubAddress"
                    component={SelectedInput}
                    dataSource={districtsByCitySubAddress}
                  />
                </Form>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DeliveryAddress;
