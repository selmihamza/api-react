import React from "react";
import "./App.css";
import UserList from "./UserList";
import { Route, Switch, Link } from "react-router-dom";
import UserDetails from "./UserDetails";

function App() {
  return (
    <>
      <Link to="/users">list users</Link>

      <Switch>
        <Route exact path="/users" component={UserList} />
        <Route exact path="/users/:id" component={UserDetails} />
      </Switch>
    </>
  );
}

export default App;
