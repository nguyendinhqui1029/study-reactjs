import React from "react";
import PropTypes from "prop-types";
import './Loading.scss';
Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

function Loading(props) {
  const { isLoading } = props;
  return (
    <div className={isLoading ? "ShowLoading" : "HiddenLoading"}>
        <div className="Loading"></div>
        <img
          className="ImgLoading"
          src={require("../../assets/images/loading.gif").default}
          alt="loading ..."
        />
    </div>
  );
}

export default Loading;
