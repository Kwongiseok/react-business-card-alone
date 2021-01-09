import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardApp from "./components/card-maker/card-maker";
import Login from "./components/login/login";
function App() {
  const [userEmail, setEmail] = useState(null);
  const [userList, setList] = useState([]);
  const handleEmail = (email) => {
    setEmail(email);
  };
  const handleList = (list) => {
    setList(list);
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login onHandleEmail={handleEmail}></Login>
        </Route>
        <Route exact path="/app">
          <CardApp userEmail={userEmail} onHandleList={handleList}></CardApp>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
