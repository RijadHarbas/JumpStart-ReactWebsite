import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* Here bulma navbar components */}
          <div>
            <Navigation />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>


      </div>
    );
  }
}
export default App;
