import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import "./NavigateQuickly.scss";
import { removeQuickLink } from "../../actions/quicklink";
function NavigateQuickly() {
  const quickLinks = useSelector((quickLink) => quickLink.quickLink.quickLinks);
  const disPatch = useDispatch();
  function handleClickLink(index) {
   disPatch(removeQuickLink(index+1));
  }
  return (
    <div className="NavigateQuickly">
      {quickLinks.map((link, index) => {
        return (
          <Link to={link.path} className="MenuLink" key={index}>
            <span
              className={
                quickLinks.length - 1 === index
                  ? "ContentLink Active"
                  : "ContentLink"
              }
              onClick={() => handleClickLink(index)}
            >
              {link.label}
              {quickLinks.length > 1 && quickLinks.length - 1 !== index ? (
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
