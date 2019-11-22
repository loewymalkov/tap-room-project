import React from 'react';
import PropTypes from 'prop-types';

const kegStyles = {
  marginLeft: 30,
  marginTop: 4
};

function Keg(props){
  return (
    <div style={kegStyles}>
      <h3>{props.brand} - {props.name}</h3>
      <p><em>{props.price} - {props.alcoholContent}</em></p>
      <p>{props.quantity}</p>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  quantity: PropTypes.number
};

export default Keg;