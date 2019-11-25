import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const formStyles = {
  padding: 50,
  margin: 20
};

const inputStyle = {
  padding: 3,
  marginRight: 5
};

function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _quantity = 20;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value, quantity: _quantity, id: v4()});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
  }
  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission} style={formStyles}>
        <input 
          style={inputStyle}
          type='text'
          id='name'
          placeholder='Keg Name'
          ref={(input) => {_name = input;}}
        />
        <input
          style={inputStyle}
          type='text'
          id='brand'
          placeholder='Brand Name'
          ref={(input) => {_brand = input;}}
        />
        <input
          style={inputStyle}
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}
        />
        <input
          style={inputStyle}
          type='text'
          id='alcoholContent'
          placeholder='Alcohol Content'
          ref={(input) => {_alcoholContent = input;}}
        />
        <button type='submit'>Submit</button>
      </form>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;