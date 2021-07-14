import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Table.scss";
import { TYPE_COLUMN_TABLE, ACTION_TYPE_TABLE } from "../../Constant/Constant";
import { formatCurrency } from "../../util/util";
Table.propTypes = {
  dataList: PropTypes.array.isRequired,
  headerList: PropTypes.array.isRequired,
  hanldeCalculateValue: PropTypes.func,
  hanldeEventDelete: PropTypes.func,
};

Table.defaultProps = {
  hanldeCalculateValue: null,
  hanldeAction: null,
};

function Table(props) {
  const { dataList, headerList, hanldeCalculateValue, hanldeAction } = props;

  function handleEventChangeDataRow(newValue, item, propertyName) {
    if (hanldeCalculateValue) {
      hanldeCalculateValue(newValue, item, propertyName);
    }
  }

  function handleActionClick(item, actionName) {
    if (hanldeAction) {
      hanldeAction(item, actionName);
    }
  }

  return (
    <div className="TableProduct">
      <div className="HeaderTable">
        {headerList.map((header, index) => {
          return (
            <div key={index} style={{ flex: header.flex }}>
              {header.label}
            </div>
          );
        })}
      </div>
      {dataList.map((item, index) => {
        return (
          <div className="ContentTable" key={index}>
            {headerList.map((keyHeader, ind) => {
              return (
                <div key={`CT${index}${ind}`} style={{ flex: keyHeader.flex }}>
                  {keyHeader.hasOwnProperty("propertyMapping")
                    ? renderComponentByType(
                        keyHeader,
                        { ...item, ...{ index: index } },
                        handleEventChangeDataRow
                      )
                    : keyHeader.hasOwnProperty("actionType")
                    ? renderComponentByType(
                        keyHeader,
                        { ...item, ...{ index: index } },
                        handleActionClick
                      )
                    : ""}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function renderComponentByType(header, item, eventChange) {
  switch (header.type) {
    case TYPE_COLUMN_TABLE.IMAGE: {
      return <img className="Image" src={item[header.propertyMapping]} alt="Loading ..."/>;
    }
    case TYPE_COLUMN_TABLE.CHECKBOX: {
      return (
        <span>
          <input
            type="checkbox"
            checked={item[header.propertyMapping]}
            name={header.propertyMapping}
            onChange={(event) => {
              eventChange(event.target.checked, item, header.propertyMapping);
            }}
          />
        </span>
      );
    }
    case TYPE_COLUMN_TABLE.DROPDOWN:
      try {
        return (
          <select
            onChange={(event) => {
              eventChange(event.target.value, item, header.propertyMapping);
            }}
          >
            {header.dataSoucre.map((option) => {
              return (
                <option
                  name={header.propertyMapping}
                  value={option.key}
                  key={option.key}
                  selected={option.key === item[header.propertyMapping]}
                >
                  {option.label}
                </option>
              );
            })}
          </select>
        );
      } catch (error) {
        console.log(
          "Error check dataSoucre in headerTable example dataSoucre: [{ key: '', label:''}]:",
          error
        );
      }

    case TYPE_COLUMN_TABLE.INPUTTEXT:
      return (
        <input
          type="text"
          name={header.propertyMapping}
          value={item[header.propertyMapping]}
          placeholder={header.label}
          onChange={(event) => {
            eventChange(event.target.value, item, header.propertyMapping);
          }}
        />
      );
    case TYPE_COLUMN_TABLE.INPUTNUMBER:
      return (
        <input
          max={(header.max = header.max || 9999999999999)}
          min={(header.min = header.min || -9999999999999)}
          type="number"
          name={header.propertyMapping}
          value={item[header.propertyMapping]}
          placeholder={header.label}
          onChange={(event) => {
            eventChange(
              event.target.value > header.max
                ? header.max
                : event.target.value < header.min
                ? header.min
                : event.target.value,
              item,
              header.propertyMapping
            );
          }}
        />
      );
    case TYPE_COLUMN_TABLE.ACTION: {
      try {
        return header.actionType.map((actionType, index) => {
          switch (actionType) {
            case ACTION_TYPE_TABLE.UPDATE:
              return (
                <FontAwesomeIcon
                  key={actionType}
                  icon="pen"
                  className="UpdateAction"
                  onClick={(event) => eventChange(item, actionType)}
                />
              );
            case ACTION_TYPE_TABLE.DELETE:
              return (
                <FontAwesomeIcon
                  key={actionType}
                  icon="trash-alt"
                  className="DeleteAction"
                  onClick={(event) => eventChange(item, actionType)}
                />
              );
            default:
              return "";
          }
        });
      } catch (error) {
        console.log("Error of Table.jsx case Action:", error);
      }
    }
    default:
      return header.hasOwnProperty("formatCurrency") &&
        header.formatCurrency
        ? formatCurrency(item[header.propertyMapping])
        : item[header.propertyMapping];
  }
}
export default Table;
