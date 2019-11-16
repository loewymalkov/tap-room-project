import React from 'react';
import Header from './Header';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import AboutUs from './AboutUs';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const globalStyles = {
  backgroundColor: '#EAF2F8',
  fontFamily: 'Red Hat Text'
};


function App(){
  return (
    <div style={globalStyles}>
      <Header/>
      <Switch>
        <Route exact path='/keglist' component={KegList} />
        <Route exact path='/about' component={AboutUs} />
        <Route path='/newkeg' component={NewKegForm} />
      </Switch>
    </div>
  );
}

export default App;