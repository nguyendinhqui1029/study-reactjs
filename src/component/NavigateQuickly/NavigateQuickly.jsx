import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import "./NavigateQuickly.scss";
NavigateQuickly.propTypes = {
  listQuickLink: PropTypes.array.isRequired,
};
NavigateQuickly.defaultProps = {
  listQuickLink: [],
};
function NavigateQuickly(props) {
  const { listQuickLink } = props;
  const [listLink, setListLink] = useState(listQuickLink);
  function handleClickLink(index) {
    const updateListLink = Object.assign(listLink);
    setListLink(updateListLink.splice(0, index + 1));
  }
  return (
    <div className="NavigateQuickly">
      {listLink.map((link, index) => {
        return (
          <Link
            to={link.path}
            className="MenuLink"
            onClick={() => handleClickLink(index)}
            key={index}
          >
            <span
              className={
                listLink.length - 1 === index
                  ? "ContentLink Active"
                  : "ContentLink"
              }
            >
              {link.label}
              {listLink.length > 1 && listLink.length - 1 !== index ? (
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="IconRight"
                />
              ) : (
                ""
              )}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default NavigateQuickly;
