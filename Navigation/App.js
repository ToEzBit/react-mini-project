import Navaigation from "./component/navigation";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./component/page/home"
import Shop from "./component/page/shop"
import History from "./component/page/history"

function App() {
  return (
    <div className="App">
      <Router>
        <Navaigation/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/shop" component={Shop}/>
          <Route path="/history" component={History}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
