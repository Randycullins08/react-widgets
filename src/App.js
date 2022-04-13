import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FizzBuzz from "./components/FizzBuzz";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Home exact path="/" />
          <Route path="/fizz-buzz" component={FizzBuzz} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
