import React from 'react';

const formStyles = {
  padding: 50,
  margin: 20
};

const inputStyle = {
  padding: 3,
  marginRight: 5
};

function NewKegForm(){
  return (
    <div>
      <form style={formStyles}>
        <input 
          style={inputStyle}
          type='text'
          id='name'
          placeholder='Keg Name'/>
        <input
          style={inputStyle}
          type='text'
          id='brand'
          placeholder='Brand Name'/>
        <input
          style={inputStyle}
          type='text'
          id='price'
          placeholder='Price'/>
        <input
          style={inputStyle}
          type='text'
          id='alcoholContent'
          placeholder='Alcohol Content'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  
}

export default NewKegForm;