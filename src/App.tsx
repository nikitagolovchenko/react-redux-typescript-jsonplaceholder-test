import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/Homepage";
import User from "./pages/User";
import Users from "./pages/Users";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/users" exact component={Users} />
          <Route path="/users/:id" exact component={User} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
