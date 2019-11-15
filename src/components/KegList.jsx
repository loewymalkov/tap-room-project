import React from 'react';
import Keg from './Keg';

const kegListStyles = {
  marginTop: 100
};

var masterKegList = [
  {
    name: 'the stonkiest brew',
    brand: 'stonks',
    price: '3$',
    alcoholContent: '5%'
  },
  {
    name: 'second stonkiest brew',
    brand: 'stonks',
    price: '5$',
    alcoholContent: '10%'
  },
  {
    name: 'the stonkiest brew',
    brand: 'stonks',
    price: '8$',
    alcoholContent: '15%'
  }
];

function KegList() {
  return (
    <div>
      <hr/>
      <h1 style={kegListStyles} >LIST OF ALL THEM KEGS</h1>
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          key={index}/>
      )}
    </div>
  );
}

export default KegList;