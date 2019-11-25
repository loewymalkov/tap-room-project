import React from 'react';

const aboutUsStyles = {
  marginTop: 100
};

const imgStyles = {
  width: 400,
  marginLeft: 300
};

function AboutUs() {
  return (
    <div style={aboutUsStyles}>
      <h1 >THE TAP ROOM</h1>
      <p>Tap Room was built to allow businesses to keep track of their kegs. You can add new kegs with brand name, pint price and alcohol content. It also keeps track of quantity and allows you to substract a pint each time you sell one. Kegs can be sorted by quantity. Navigate to the Keg hub to view inventory, and the New Keg tab to add a new one.  </p>
      <img style={imgStyles} src="https://i.kym-cdn.com/entries/icons/original/000/029/959/Screen_Shot_2019-06-05_at_1.26.32_PM.jpg" />
    </div>
  );
}

export default AboutUs;