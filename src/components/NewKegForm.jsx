import React from 'react';

const formStyles = {
  padding: 50,
  margin: 20
};

function NewKegForm(){
  return (
    <div>
      <form style={formStyles}>
        <input
          type='text'
          id='name'
          placeholder='Keg Name'/>
        <input
          type='text'
          id='brand'
          placeholder='Brand Name'/>
        <input
          type='text'
          id='price'
          placeholder='Price'/>
        <input
          type='text'
          id='alcoholContent'
          placeholder='Alcohol Content'/>
        <button type='submit'>Submit Keg Info</button>
      </form>
    </div>
  );
}

export default NewKegForm;