import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div>
      <style global jsx>{`
            div {
              background-color: #111;
            }
          `}</style>
      <h3>{props.brand} - {props.name}</h3>
      <p><em>{props.price} - {props.alcoholContent}</em></p>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.int.isRequired,
  alcoholContent: PropTypes.string.isRequired
};

export default Keg;