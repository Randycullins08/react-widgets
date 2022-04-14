import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FizzBuzz from "./components/FizzBuzz";
import Magic8Ball from "./components/Magic8Ball";
import DisplayText from "./components/DisplayText";
import AddTwoNumbers from "./components/AddTwoNumbers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Home exact path="/" />
          <Route path="/fizz-buzz" component={FizzBuzz} />
          <Route path="/magic-8-ball" component={Magic8Ball} />
          <Route path="/display-text" component={DisplayText} />
          <Route path="/add-two-numbers" component={AddTwoNumbers} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
