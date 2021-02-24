import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"


import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" basename={process.env.PUBLIC_URL} component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
