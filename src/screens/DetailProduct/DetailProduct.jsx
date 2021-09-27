import React from 'react';
import PropTypes from 'prop-types';
import './DetailProduct.scss';
import DescriptionDetail from './../../component/DescriptionDetail/DescriptionDetail';
DetailProduct.propTypes = {
  
};

function DetailProduct(props) {
  return (
    <div>
      <DescriptionDetail/>
    </div>
  );
}

export default DetailProduct;