import React from 'react';
import Header from './Header';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import AboutUs from './AboutUs';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function App(){
  return (
    <div>
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