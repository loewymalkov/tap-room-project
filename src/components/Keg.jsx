import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';

const kegStyles = {
  marginLeft: 30,
  marginTop: 4
};

function Keg(props){

  function handleAddQuantity() {
    props.addQuantity(props.index);
  }

  function handleReduceQuantity() {
    props.reduceQuantity(props.index);
  }

  return (
    <div style={kegStyles}>
      <h3>{props.brand} - {props.name}</h3>
      <p style={{fontSize: 17}}><em>Price: {props.price} - Alcohol Content: {props.alcoholContent}</em></p>
      <p style={{fontSize: 25}} ><button onClick={handleAddQuantity} className='material-icons'>arrow_drop_up</button> <button onClick={handleReduceQuantity} className='material-icons'>arrow_drop_down</button> | {props.quantity} Pints</p>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  addQuantity: PropTypes.func,
  reduceQuantity: PropTypes.func,
  index: PropTypes.number
};

export default Keg;