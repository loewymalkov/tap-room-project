import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';

const kegStyles = {
  marginLeft: 30,
  marginTop: 4
};

class Keg extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      color: ''
    };
    this.changeColor = this.changeColor.bind(this);
    this.handleAddQuantity = this.handleAddQuantity.bind(this);
    this.handleReduceQuantity = this.handleReduceQuantity.bind(this);
  }
  handleAddQuantity(props) {
    props.addQuantity(props.index);
  }

  handleReduceQuantity(props) {
    props.reduceQuantity(props.index);
  }

  changeColor(props) {
    if (props.quantity <= 10 ) {
      console.log('change to red');
      this.setState({color: 'red'});
    } else {
      console.log('dont change state');
      this.setState({color: ''});
    }
  }

  render(props, handleAddQuantity, handleReduceQuantity) {
    const { color } = this.state;
    return (
      <div style={kegStyles}>
        <h3>{props.brand} - {props.name}</h3>
        <p style={{fontSize: 17}}><em>Price: {props.price} - Alcohol Content: {props.alcoholContent}</em></p>
        <p style={{fontSize: 25}} ><button onClick={handleAddQuantity} className='material-icons'>arrow_drop_up</button> <button onClick={handleReduceQuantity} className='material-icons'>arrow_drop_down</button> | <span changeColor={this.state.color} style={{color: color}}>{props.quantity} </span> Pints</p>
        <hr/>
      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  addQuantity: PropTypes.func,
  reduceQuantity: PropTypes.func,
  index: PropTypes.number
};

export default Keg;