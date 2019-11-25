import React from 'react';
import Header from './Header';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import AboutUs from './AboutUs';
import { Switch, Route } from 'react-router-dom';

const globalStyles = {
  backgroundColor: '#EAF2F8',
  background: 'fill',
  fontFamily: 'Ubuntu'
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleNewKegToList = this.handleNewKegToList.bind(this);
    this.handleAddQuantity = this.handleAddQuantity.bind(this);
    this.handleReduceQuantity = this.handleReduceQuantity.bind(this);
  }

  handleNewKegToList(newKeg) {
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({ masterKegList: newMasterKegList });
  }

  handleAddQuantity(index) {
    var newMasterKegList = this.state.masterKegList;
    newMasterKegList[index].quantity ++;
    this.setState({ masterKegList: newMasterKegList });
  }

  handleReduceQuantity(index) {
    var newMasterKegList = this.state.masterKegList;
    newMasterKegList[index].quantity --;
    this.setState({ masterKegList: newMasterKegList });
  }

  render() {
    return (
      <div style={globalStyles} > 
      <style global jsx>{`
        .body {
          backgroundColor: '#EAF2F8'
        }
      `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' component={AboutUs} />
          <Route exact path='/keglist' render={() => <KegList kegList={this.state.masterKegList} addQuantity={this.handleAddQuantity} reduceQuantity={this.handleReduceQuantity} /> } /> 
          <Route path='/newkeg' render={() => <NewKegForm onNewKegCreation={this.handleNewKegToList} /> } />
        </Switch>
      </div>
    );
  }
}

export default App;