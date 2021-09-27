import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Input.scss";

Input.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  disable: PropTypes.bool,
  iconLeft: PropTypes.string,
  isShowValidField: PropTypes.bool
};

Input.defaultProps = {
  disable: false,
  iconLeft: "",
  isShowValidField: true
};
function Input(props) {
  const {
    field,
    form,
    type,
    placeholder,
    disable,
    iconLeft,
    isShowValidField,
    min,
    max,
  } = props;
  const { errors, touched } = form;
  const { name } = field;
  const showError = errors[name] && touched[name];
  const showValidField = touched[name] && !errors[name] && isShowValidField;
  return (
    <div className="Input">
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
          {iconLeft && (
            <div className="ContainerIcon">
              <FontAwesomeIcon icon={iconLeft} />
            </div>
          )}

          <input
            className={iconLeft ? "NoneBorderLeft" : ""}
            type={type}
            placeholder={placeholder}
            {...field}
            readOnly={disable}
          />
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

export default Input;
