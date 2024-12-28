import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Textarea.scss';
Textarea.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  rows: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  disable: PropTypes.bool,
};

Textarea.defaultProps = {
  rows: 5,
  disable: false,
};

function Textarea(props) {
  const { field, form, rows, placeholder, disable } = props;
  const { errors, touched } = form;
   const { name } = field;
   const showError = errors[name] && touched[name];
   const showValidField = touched[name] && !errors[name];
  return (
    <div className="ContainerMain">
      <div
        className={
          showValidField
            ? "ContainerInput InputValid"
            : showError
            ? "ContainerInput InputInvalid"
            : "ContainerInput"
        }
      >
        <div className="Input">
          <textarea
            {...field}
            rows={rows}
            placeholder={placeholder}
            readOnly={disable}
          ></textarea>
          <FontAwesomeIcon className="IconValid" icon="check" />
        </div>
        <div className="Error">
          <FontAwesomeIcon className="IconInvalid" icon="exclamation-circle" />
          <span>{showError && errors[name]}</span>
        </div>
      </div>
    </div>
  );
}

export default Textarea;