import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Practice from "./components/Practice";
import { createBrowserHistory } from "history";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <HashRouter basename="/" history={createBrowserHistory()}>
        <Layout />
        <Switch>
          <Route exact path="/practice" component={Practice} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
