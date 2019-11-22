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
      <h1 >ABOUT US</h1>
      <p>We have a variety of kegs to pick from, and you may add kegs to the list of kegs available on the website. View price and alcohol content. </p>
      <img style={imgStyles} src="https://i.kym-cdn.com/entries/icons/original/000/029/959/Screen_Shot_2019-06-05_at_1.26.32_PM.jpg" />
    </div>
  );
}

export default AboutUs;