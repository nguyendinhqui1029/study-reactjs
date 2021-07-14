import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SelectedInput.scss";
SelectedInput.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  dataSource: PropTypes.array,
  disabled: PropTypes.bool,
  placeHolder: PropTypes.string,
  isShowValidField: PropTypes.bool,
  optionEventChange: PropTypes.func,
};
SelectedInput.defaultProps = {
  placeHolder: "",
  dataSource: [],
  disabled: false,
  isShowValidField: true,
  optionEventChange: null,
};
function SelectedInput(props) {
  const {
    field,
    form,
    dataSource,
    disabled,
    placeHolder,
    isShowValidField,
    optionEventChange,
  } = props;
  const { errors, touched } = form;
  const { name, value } = field;

  const showError = errors[name] && touched[name];
  const showValidField = touched[name] && !errors[name] && isShowValidField;

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (value) setSelected(value);
  }, [value]);

  const handleEventChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;
    const dataChange = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    if (optionEventChange) {
      optionEventChange(selectedValue);
    }
    field.onChange(dataChange);
    setSelected(selectedValue);
  };

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
          <select
            {...field}
            onChange={(event) => handleEventChange(event.target)}
            disabled={disabled}
          >
            {placeHolder && (
              <option key="default" value={null} selected={!selected}>
                {placeHolder}
              </option>
            )}
            {dataSource.map((item, index) => {
              return (
                <option
                  key={index}
                  value={item.value}
                  selected={item.value === selected}
                >
                  {item.label}
                </option>
              );
            })}
          </select>
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

export default SelectedInput;
