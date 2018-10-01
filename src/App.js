import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import DashBoard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Switch>
            <Route path="/" exact component={DashBoard} />
            <Route path="/project/:id" exact component={ProjectDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
