import React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./Dashboard"
import PendingTaskList from "./PendingTaskList"
import {Nav,NavItem,NavLink} from "reactstrap"
const App = () =>{
  return (
    <div>
      <Dashboard/>
    </div>
  )
};
render(<App />, document.getElementById("app"));