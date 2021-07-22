import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Input from "../../component/Input/Input";
import SelectedInput from "../../component/SelectedInput/SelectedInput";
import Textarea from "../../component/Textarea/Textarea";
import { Formik, Form, FastField, Field, useFormikContext } from "formik";
import { useDispatch } from "react-redux";
import { addAddress, addAddressOther } from "../../actions/cart";
import Yup from "../../validation/CustomValidation";
import "./DeliveryAddress.scss";
DeliveryAddress.propTypes = {
  formRef: PropTypes.object,
  formRefOther: PropTypes.object,
};
DeliveryAddress.defaultProps = {
  formRef: null,
  formRefOther: null,
};

function DeliveryAddress(props) {
  const { formRef, formRefOther } = props;
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [districtsByCity, setDistrictsByCity] = useState([]);
  const [districtsByCitySubAddress, setDistrictsByCitySubAddress] = useState(
    []
  );
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCitySubAddress, setSelectedCitySubAddress] = useState(null);
  const [isShowOtherAddress, setShowOtherAddress] = useState(false);
  const dispatch = useDispatch();
  const initialValues = {
    address: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      district: "",
      description: "",
    },
    otherAddress: {
      nameOther: "",
      emailOther: "",
      phoneOther: "",
      addressOther: "",
      cityOther: "",
      districtOther: "",
    },
  };

  const validations = Yup.object().shape({
    name: Yup.string().requiredCustome("Vui lòng nhập họ tên"),
    email: Yup.string().requiredCustome("Vui lòng nhập email").email("Email không hợp vui lòng nhập lại."),
    phone: Yup.string().requiredCustome("Vui lòng nhập số điện thoại"),
    address: Yup.string().requiredCustome("Vui lòng nhập địa chỉ"),
    city: Yup.string().requiredCustome("Vui lòng chọn tỉnh hoặc thành phố"),
    district: Yup.string().requiredCustome("Vui lòng chọn quận hoặc huyện"),
  });

  const validationsAddressOther = Yup.object().shape({
    nameOther: Yup.string().requiredCustome("Vui lòng nhập họ tên"),
    emailOther: "",
    phoneOther: Yup.string().requiredCustome("Vui lòng nhập số điện thoại"),
    addressOther: Yup.string().requiredCustome("Vui lòng nhập địa chỉ"),
    cityOther: Yup.string().requiredCustome(
      "Vui lòng chọn tỉnh hoặc thành phố"
    ),
    districtOther: Yup.string().requiredCustome(
      "Vui lòng chọn quận hoặc huyện"
    ),
  });

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

  useEffect(() => {
    fetchCities();
  }, []);

  useEffect(() => {
    fetchDistricts();
  }, [selectedCity, selectedCitySubAddress]);

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
          <Link to="/account/register" className="RegisterLink">
            Đăng ký tài khoản mua hàng
          </Link>
          <span>|</span>
          <Link to="/account/login" className="LoginLink">
            Đăng nhập
          </Link>
        </div>
        <div className="MainInfo">
          <h5>Mua hàng không cần tài khoản</h5>
          <Formik
            innerRef={formRef}
            initialValues={initialValues.address}
            validationSchema={validations}
            onSubmit={() => {}}
            render={() => {
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
                    name="phone"
                    component={Input}
                    type="text"
                    placeholder="Số điện thoại"
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
                  <FastField
                    name="description"
                    component={Textarea}
                    placeholder="Ghi chú đơn hàng"
                    rows={5}
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
              onChange={(event) => changeOtherAddress(event)}
            />
            <span>Giao hàng địa chỉ khác</span>
          </span>
          <Formik
            innerRef={formRefOther}
            initialValues={initialValues.otherAddress}
            onSubmit={() => {}}
            validationSchema={isShowOtherAddress ? validationsAddressOther : null}
            enableReinitialize={isShowOtherAddress}
            render={() => {
              return (
                <Form className={isShowOtherAddress ? "FormInfo" : "SubForm"}>
                  <FastField
                    name="nameOther"
                    component={Input}
                    type="text"
                    placeholder="Họ và Tên"
                  />
                  <FastField
                    name="emailOther"
                    component={Input}
                    type="text"
                    placeholder="Email"
                  />
                  <FastField
                    name="phoneOther"
                    component={Input}
                    type="text"
                    placeholder="Vui lòng nhập số điện thoại"
                  />

                  <FastField
                    name="addressOther"
                    component={Input}
                    type="text"
                    placeholder="Địa chỉ"
                  />
                  <Field
                    name="cityOther"
                    component={SelectedInput}
                    dataSource={cities}
                    placeHolder="Vui lòng chọn thành phố"
                    optionEventChange={setSelectedCitySubAddress}
                  />
                  <Field
                    name="districtOther"
                    component={SelectedInput}
                    dataSource={districtsByCitySubAddress}
                    placeHolder="Vui lòng chọn quận hoặc huyện"
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
