import React from "react";

import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import {Container} from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container className="body">
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/" component={Welcome}></Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
