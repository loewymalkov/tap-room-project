import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

const kegListStyles = {
  marginTop: 100,
  marginLeft: 15,
  marginBottom: 40
};

function KegList(props) {
  return (
    <div>
      <hr/>
      <h1 style={kegListStyles} >Available Kegs</h1>
      {props.kegList.map((keg) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          quantity={keg.quantity}
          key={keg.id}/>
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;