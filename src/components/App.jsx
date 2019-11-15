import React from 'react';
import Header from './Header';
import KegList from './KegList';
import AboutUs from './AboutUs';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function App(){
  var bodybackground = {
    backgroundColor: 'grey'
  };
  return (
    <div style={bodybackground}>
      <Header/>
      <Switch>
        <Route exact path='/keglist' component={KegList} />
        <Route exact path='/about' component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;