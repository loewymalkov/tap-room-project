import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';
// import { useState, useEffect } from 'react';

const kegStyles = {
  marginLeft: 30,
  marginTop: 4
};

var quantityStyle = {
  color: ''
};

function Keg(props) {

  // const [color, setColor] = useState('');
  // const changeColor = () => setColor('red');
  

  function handleAddQuantity() {
    props.addQuantity(props.index);
  }

  function handleReduceQuantity() {
    props.reduceQuantity(props.index);
    if (props.quantity <= 10 ) {
      quantityStyle = {
        color: 'red'
      }; 
    } else {
      quantityStyle = {
        color: ''
      };
    }
  }

  // function useEffect() {
  //   if (props.quantity <= 10 ) {
  //     console.log('change to red');
  //     setColor('red');
  //   } else {
  //     console.log('dont change state');
  //     setColor('');
  //   }
  // }

  return (
    <div style={kegStyles}>
      <h3>{props.brand} - {props.name}</h3>
      <p style={{fontSize: 17}}><em>Price: {props.price} - Alcohol Content: {props.alcoholContent}</em></p>
      <p style={{fontSize: 25}} ><button onClick={handleAddQuantity} className='material-icons'>arrow_drop_up</button> <button disabled={props.quantity <= 0} onClick={handleReduceQuantity} className='material-icons'>arrow_drop_down</button> | <span style={quantityStyle}> {props.quantity} </span> Pints</p>
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