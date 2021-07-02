import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Table.scss";
import {
  TYPE_COLUMN_TABLE,
  ACTION_TYPE_TABLE,
} from "../../constant/Constant.js";
Table.propTypes = {
  dataList: PropTypes.array.isRequired,
  headerList: PropTypes.array.isRequired,
  hanldeCalculateValue: PropTypes.func,
};

Table.defaultProps = {
  hanldeCalculateValue: null,
};

function Table(props) {
  const { dataList, headerList, hanldeCalculateValue } = props;
  const [dataTable, setDataTable] = useState(dataList);

  function handleEventChangeDataRow(newValue, item, propertyName) {
    if (hanldeCalculateValue) {
      hanldeCalculateValue(newValue, item, propertyName);
    }
      item[propertyName] = newValue;
      dataTable[item.index] = item;
      setDataTable([...dataTable]);
  }

  function handleActionClick(item, actionName) {
    if (actionName === ACTION_TYPE_TABLE.UPDATE) {
      dataTable[item.index] = item;
    } else dataTable.splice(item.index, 1);
    setDataTable([...dataTable]);
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
      {dataTable.map((item, index) => {
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
      return <img className="Image" src={item[header.propertyMapping]} />;
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
      return item[header.propertyMapping];
  }
}
export default Table;
