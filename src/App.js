import React from "react";

import "./App.css";
import Header from "./components/Header";
import Login from "./views/Login";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container className="body">
          <Switch>
            <Container className="login">
            <Route path="/" component={Login}></Route>
            </Container>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
