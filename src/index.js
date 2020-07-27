import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NoMatch from "./components/nomatch.js";
import StorePicker from "./components/storepicker.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={StorePicker} />
        <Route exact path='/store/:storeId' component={App} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
