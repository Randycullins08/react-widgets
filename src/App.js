import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FizzBuzz from "./components/FizzBuzz";
import Magic8Ball from "./components/Magic8Ball";
import DisplayText from "./components/DisplayText";
import AddTwoNumbers from "./components/AddTwoNumbers";
import CapitalizeInput from "./components/CapitalizeInput";
import LowercaseInput from "./components/LowercaseInput";

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
          <Route path="/capatilize-input" component={CapitalizeInput} />
          <Route path="/lowercase-input" component={LowercaseInput} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
