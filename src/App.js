import HomePage from "./pages/HomePage";
import Paragone from "./pages/Paragone";
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

const App = () => {

  return(
    <Router basename="/">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/paragone" component={Paragone} />
    </Router>
  )

}

export default App;
