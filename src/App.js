import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FizzBuzz from "./components/FizzBuzz";
import Magic8Ball from "./components/Magic8Ball";
import DisplayText from "./components/DisplayText";
import AddTwoNumbers from "./components/AddTwoNumbers";
import CapitalizeInput from "./components/CapitalizeInput";
import LowercaseInput from "./components/LowercaseInput";
import ListOfThings from "./components/ListOfThings";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/fizz-buzz" element={<FizzBuzz />} />
          <Route path="/magic-8-ball" element={<Magic8Ball />} />
          <Route path="/display-text" element={<DisplayText />} />
          <Route path="/add-two-numbers" element={<AddTwoNumbers />} />
          <Route path="/capatilize-input" element={<CapitalizeInput />} />
          <Route path="/lowercase-input" element={<LowercaseInput />} />
          <Route path="/list-of-things" element={<ListOfThings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
