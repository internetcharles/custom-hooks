import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Details from '../details/Details';
import Header from '../../list/Header';
import CharacterPage from '../../pages/CharacterPage';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Header />
          <Route 
            path="/" 
            exact
            component={CharacterPage} />
          <Route 
            path="/characters/:characterName" 
            exact
            component={Details}
          />
        </Switch>
      </Router>
    </div>
  );
}
