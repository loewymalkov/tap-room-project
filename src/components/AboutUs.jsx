import React from 'react';

const aboutUsStyles = {
  marginTop: 100
};

function AboutUs() {
  return (
    <div style={aboutUsStyles}>
      <h1 className="center" >THE TAP ROOM</h1>
      <p style={{margin: 40}}>Tap Room was built to allow businesses to keep track of their kegs. You can add new kegs with brand name, pint price and alcohol content. It also keeps track of quantity and allows you to substract a pint each time you sell one. Kegs can be sorted by quantity. Navigate to the Keg hub to view inventory, and the New Keg tab to add a new one.  </p>
      <img style={{width: '35%', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: 80}} src="https://i.kym-cdn.com/entries/icons/original/000/029/959/Screen_Shot_2019-06-05_at_1.26.32_PM.jpg" />
      <hr/>
    </div>

  );
}

export default AboutUs;