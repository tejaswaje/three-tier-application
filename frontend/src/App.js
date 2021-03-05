import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import AddDog from "./components/add-dog.component";
import Dog from "./components/dog.component";
import DogsList from "./components/dogs-list.component";

class App extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/dogs" className="navbar-brand">
          DOGGO BARN
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/dogs"} className="nav-link">
              Dogs
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/dogs"]} component={DogsList} />
          <Route exact path="/add" component={AddDog} />
          <Route path="/dogs/:id" component={Dog} />
        </Switch>
      </div>
    </div>
  );
  }
}

export default App;
