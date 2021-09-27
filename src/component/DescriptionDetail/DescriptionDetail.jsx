import React, { useEffect, useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  TwitterIcon,
  TwitterShareButton,
  ViberShareButton,
  ViberIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import "./DescriptionDetail.scss";
import { useHistory } from "react-router";
import productApi from "../../api/product.api";
import { formatCurrency } from "../../util/util";
import { Formik, Form, Field } from "formik";
import SelectedInput from "./../SelectedInput/SelectedInput";
import Input from "./../Input/Input";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addToCart, setStatus } from "../../actions/cart";
import Yup from "../../validation/CustomValidation";
const listThumnail = [
  {
    id: "1",
    type: "image",
    src: require("../../assets/images/camera.jpg").default,
  },
  {
    id: "2",
    type: "image",
    src: require("../../assets/images/nikon.jpg").default,
  },
  {
    id: "3",
    type: "video",
    src: "https://www.youtube.com/embed/zfhYJbCaIMI",
  },
];
function DescriptionDetail(props) {
  const [selectedThumnail, setSelectedThumnail] = useState({
    id: "1",
    type: "image",
    src: require("../../assets/images/camera.jpg").default,
  });
  const urlShare = window.location.href;
  const history = useHistory();
  const disPatch = useDispatch();
  const { location: { state: { id = "" } = {} } = {} } = history;
  const [product, setProduct] = useState({
    productName: "",
    subContent: "",
    detailContent: "",
    imageUrl: "",
    price: 0,
    discount: 0,
  });

  const [size, setSize] = useState([
    { value: "S", label: "Size S - 30->45 kg" },
    { value: "M", label: "Size M - 45->55 kg" },
    { value: "L", label: "Size L - 55->65 kg" },
  ]);

  const [typeSubmit, setTypeSubmit] = useState("");
  useEffect(() => {
    productApi.getById(id).then((result) => {
      if (result) {
        setProduct(result);
      }
    });
  }, [id]);

  const initialValues = {
    size: "S",
    amount: 1,
  };

  const validations = Yup.object().shape({
    amount: Yup.number().min(1,"Số lượng lớn hơn 0."),
  });
  
  function addItemToCart(value, action) {
    let item = { ...product, size: value.size, amount: value.amount };
    disPatch(addToCart(item));
    if (typeSubmit === "PAY_NOW") {
      disPatch(setStatus("draft"));
      history.push("/cart-detail");
    }
  }
  return (
    <div className="DescriptionDetail">
      <div className="ContainerImage">
        <div className="ContainerLeft">
          <div className="Image">
            {selectedThumnail.type === "image" ? (
              <img
                className="BoxImage"
                src={selectedThumnail.src}
                alt="Loading ..."
              />
            ) : (
              <iframe
                className="Iframe"
                src={selectedThumnail.src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div className="Thumnail">
            {listThumnail.map((item, index) => {
              return (
                <div key={index} onClick={() => setSelectedThumnail(item)}>
                  <img
                    src={
                      item.type === "image"
                        ? item.src
                        : require("../../assets/images/video.jpg").default
                    }
                    alt="loading..."
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="ContainerRight">
          <div className="Title">{product.productName}</div>
          <div className="Price">
            <span className="Label">Giá:</span>
            <span className="Content">
              {formatCurrency(product.price)} <sup>đ</sup>
            </span>
          </div>
          <div className="SizeAndAmout">
            <Formik
              validationSchema={validations}
              initialValues={initialValues}
              onSubmit={(value, action) => {
                addItemToCart(value, action);
              }}
            >
              <Form className="Form">
                <div className="ContainerField">
                  <span className="LabelForm">Kích cỡ:</span>
                  <Field
                    name="size"
                    component={SelectedInput}
                    dataSource={size}
                    className="Field"
                  />
                </div>
                <div className="ContainerField">
                  <span className="LabelForm">Số lượng:</span>
                  <Field
                    name="amount"
                    component={Input}
                    type="number"
                    className="Field"
                    placeholder="Nhập số lượng"
                  />
                </div>
                <div className="ContainerButton">
                  <Button
                    className="Button"
                    type="submit"
                    onClick={() => {
                      setTypeSubmit("Add_TO_CART");
                    }}
                  >
                    Thêm vào giỏ hàng
                  </Button>
                  <Button
                    className="Button"
                    type="submit"
                    onClick={() => {
                      setTypeSubmit("PAY_NOW");
                    }}
                  >
                    Mua ngay
                  </Button>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="SubDesccription">
            <p>{product.subContent}</p>
          </div>
          <div className="Social">
            <FacebookShareButton url={urlShare}>
              <FacebookIcon size={50} round={true} />
            </FacebookShareButton>
            <EmailShareButton url={urlShare}>
              <EmailIcon size={50} round={true} />
            </EmailShareButton>
            <TwitterShareButton url={urlShare}>
              <TwitterIcon size={50} round={true} />
            </TwitterShareButton>
            <ViberShareButton url={urlShare}>
              <ViberIcon size={50} round={true} />
            </ViberShareButton>
            <WhatsappShareButton url={urlShare}>
              <WhatsappIcon size={50} round={true} />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
      <div className="ContentDetail">
        <span className="Title">Chi tiết sản phẩm</span>
        <div className="Content">
          <p>{product.detailContent}</p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionDetail;
