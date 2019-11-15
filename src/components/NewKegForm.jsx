import React from 'react';

function NewKegForm(){
  return (
    <div>
      <form>
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
        <textarea
          id='alcoholContent'
          placeholder='Alcohol Content'/>
        <button type='submit'>Submit Keg Info</button>
      </form>
    </div>
  );
}

export default NewKegForm;