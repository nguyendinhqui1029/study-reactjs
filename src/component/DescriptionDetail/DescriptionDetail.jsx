import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  TwitterIcon,
  TwitterShareButton,
  ViberShareButton,
  ViberIcon,
  InstapaperShareButton,
  InstapaperIcon,
} from "react-share";
import "./DescriptionDetail.scss";
import { useHistory } from "react-router";
import productApi from "../../api/product.api";
import { formatCurrency } from "../../util/util";
DescriptionDetail.propTypes = {};
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
  const { location: { state: { id = "" } = {} } = {} } = history;
  const [product, setProduct] = useState({
    productName: "",
    subContent: "",
    detailContent: "",
    imageUrl: "",
    price: 0,
    discount: 0,
  });
  useEffect(() => {
    productApi.getById(id).then((result) => {
      if (result) {
         setProduct(result);
      }
    });
  }, [id]);
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
            <div className="Size">S</div>
            <div className="Amout">1</div>
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
            <InstapaperShareButton url={urlShare}>
              <InstapaperIcon size={50} round={true} />
            </InstapaperShareButton>
          </div>

          <div className="Action"></div>
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
