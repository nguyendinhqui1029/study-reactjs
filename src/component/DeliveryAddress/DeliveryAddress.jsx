import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useRouteMatch } from "react-router-dom";
import "./DeliveryAddress.scss";
DeliveryAddress.propTypes = {};
DeliveryAddress.defaultProps = {};

function DeliveryAddress(props) {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [districtsByCity, setDistrictsByCity] = useState([]);
  const [districtsByCitySubAddress, setDistrictsByCitySubAddress] = useState(
    []
  );
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCitySubAddress, setSelectedCitySubAddress] = useState(null);
  const [selectedDistricts, setSelectedDistricts] = useState(null);
  const [selectedDistrictsSubAddress, setSelectedDistrictsSubAddress] =
    useState(null);
  const [isShowOtherAddress, setShowOtherAddress] = useState(false);

  useEffect(() => {
    async function fetchCities() {
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

        setCities([
          { id: null, label: "Vui lòng chọn Tỉnh/Thành Phố" },
          ...responseJson,
        ]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCities();
  }, []);

  useEffect(() => {
    async function fetchDistricts() {
      try {
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
          setDistricts(responseJson);
          const dis = responseJson.find((district) => {
            return district.idCity === selectedCity;
          });
          dis && setDistrictsByCity(districts.district);

          const disSubAddress = responseJson.find((district) => {
            return district.idCity === selectedCitySubAddress;
          });
          disSubAddress && setDistrictsByCitySubAddress(disSubAddress.district);
        } else {
          const dis = districts.find((district) => {
            return district.idCity === selectedCity;
          });
          dis && setDistrictsByCity(dis.district);

          const disSubAddress = districts.find((district) => {
            return district.idCity === selectedCitySubAddress;
          });
          disSubAddress && setDistrictsByCitySubAddress(disSubAddress.district);
        }
      } catch (error) {
        console.log(error);
      }
    }
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
          <form>
            <div className="FormInfo">
              <input type="text" name="name" placeholder="Họ và Tên" />

              <input type="text" name="phone" placeholder="Số điện thoại" />

              <input type="text" name="email" placeholder="Email" />

              <input type="text" name="address" placeholder="Address" />

              <select onChange={(event) => setSelectedCity(event.target.value)}>
                {cities.map((city) => {
                  return (
                    <option
                      key={city.id}
                      value={city.id}
                      selected={selectedCity === city.id}
                    >
                      {city.label}
                    </option>
                  );
                })}
              </select>

              <select>
                {districtsByCity.map((district) => {
                  return (
                    <option
                      key={district.alias}
                      value={district.alias}
                      selected={selectedDistricts === district.alias}
                    >
                      {district.label}
                    </option>
                  );
                })}
              </select>

              <textarea
                value=""
                onChange={() => {}}
                placeholder="Ghi chú đơn hàng"
                rows="5"
              />
            </div>
          </form>
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
          <form className={isShowOtherAddress ? "" : "SubForm"}>
            <div className="FormInfo">
              <input type="text" name="name" placeholder="Họ và Tên" />

              <input type="text" name="phone" placeholder="Số điện thoại" />

              <input type="text" name="email" placeholder="Email" />

              <input type="text" name="address" placeholder="Address" />

              <select
                onChange={(event) =>
                  setSelectedCitySubAddress(event.target.value)
                }
              >
                {cities.map((city) => {
                  return (
                    <option
                      key={city.id}
                      value={city.id}
                      selected={selectedCitySubAddress === city.id}
                    >
                      {city.label}
                    </option>
                  );
                })}
              </select>

              <select>
                {districtsByCitySubAddress.map((district) => {
                  return (
                    <option
                      key={district.alias}
                      value={district.alias}
                      selected={selectedDistrictsSubAddress === district.alias}
                    >
                      {district.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAddress;
