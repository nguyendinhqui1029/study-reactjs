import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";
Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = { title: "" };
function Header(props) {
  const { title } = props;
  return (
    <div className="ProductContent">
      <h1 className="Title">{title}</h1>
    </div>
  );
}

export default Header;
