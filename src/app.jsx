import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardApp from "./components/card-maker/card-maker";
import Login from "./components/login/login";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>
        <Route exact path="/app">
          <CardApp></CardApp>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
