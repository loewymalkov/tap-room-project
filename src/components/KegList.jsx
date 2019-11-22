import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

const kegListStyles = {
  marginTop: 50,
  marginLeft: 15,
  marginBottom: 40
};

const kegHubStyles = {
  marginTop: 80,
  marginLeft: 15,
  marginBottom: 20
};

const kegStyles = {
  marginLeft: 30,
  marginTop: 4
};

function KegList(props) {

  props.kegList.sort((a, b) => b.quantity - a.quantity);

  return (
    <div>
      <hr/>
      <h1 style={kegHubStyles} >KEG HUB</h1>
      <p style={kegStyles}>View and manage stock of available kegs</p>
      <h3 style={kegListStyles} >Available Kegs</h3>
      {props.kegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          quantity={keg.quantity}
          addQuantity={props.addQuantity}
          reduceQuantity={props.reduceQuantity}
          index={index}
          key={keg.id}/>
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  addQuantity: PropTypes.func,
  reduceQuantity: PropTypes.func,
  index: PropTypes.number
};

export default KegList;