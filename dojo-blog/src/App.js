import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//to generate react component boilerplate in no time, we simply type sfc and press 'tab' key 
//JSX template - Cannot output boolean values and objects
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/> 
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
        </Switch>          
      </div>
    </div>
    </Router>
  );
}

export default App;
