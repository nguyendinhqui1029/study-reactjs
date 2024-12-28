import React from "react";
import PropTypes from 'prop-types';
import './Steper.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


Steper.propTypes = {
  listSteper:PropTypes.array.isRequired
};

function Steper(props) {
  const { listSteper } = props;
  
  return (
    <div className="Steper">
      {listSteper.map((steper, index) => {
        return (
          <div
            key={index}
            className={steper.isActive ? "ActiveSteperItem" : "SteperItem"}
          >
            <div className="IconItem">
              <FontAwesomeIcon icon={steper.iconName} />
            </div>
            <div className="TitleItem">
              <h3>{steper.title}</h3>
            </div>
            <div className="LineStatus">
              <span className="ItemStatus">{index + 1}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Steper;