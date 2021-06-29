import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useRouteMatch } from "react-router-dom";
import "./Contact.scss";
Contact.propTypes = {
  contactInfo: PropTypes.object.isRequired,
};

function Contact(props) {
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

export default Contact;
