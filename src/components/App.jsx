import React from 'react';
import Header from './Header';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import AboutUs from './AboutUs';
import { Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleNewKegToList = this.handleNewKegToList.bind(this);
  }

  handleNewKegToList(newKeg) {
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({ masterKegList: newMasterKegList });
  }

  render() {
    return (
      <div>
        <style global jsx>{`
          html {
            background-color: '#EAF2F8';
            fontFamily: 'Red Hat Text';
          }
        `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' component={AboutUs} />
          <Route exact path='/keglist' render={() => <KegList kegList={this.state.masterKegList} /> } /> 
          <Route path='/newkeg' render={() => <NewKegForm onNewKegCreation={this.handleNewKegToList} /> } />
        </Switch>
      </div>
    );
  }
}

export default App;