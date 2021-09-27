import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link} from "react-router-dom";
import "./Info.scss";
Info.propTypes = {
  contactInfo: PropTypes.object.isRequired,
};

function Info(props) {
  const { contactInfo } = props;
  return (
    <div className="ContactContainer">
      <h3 className="CompanyName">{contactInfo.name}</h3>
      {contactInfo.contact.map((address, index) => {
        return (
          <p key={`CTK${index}`}>
            {address.icon !== "" && (
              <FontAwesomeIcon icon={address.icon} className="Icon" />
            )}
            {address.label !== "" && (
              <label className="Label">{address.label}</label>
            )}
            {address.url !== "" ? (
              <Link to={address.url} className="Link">
                {address.content}
              </Link>
            ) : (
              address.content
            )}
          </p>
        );
      })}
    </div>
  );
}

export default Info;
