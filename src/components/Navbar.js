import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-wrapper">
        <Link exact to="/">
          <h1>React Widgets</h1>
        </Link>
      </div>

      <div className="links-wrapper">
        <Link to="/fizz-buzz">FizzBuzz</Link>
        <Link to="/magic-8-ball">Magic 8 Ball</Link>
        <Link to="/display-text">Display Text</Link>
        <Link to="/add-two-numbers">Add Two Numbers</Link>
        <Link to="/capatilize-input">Capitalize Input</Link>
        <Link to="/lowercase-input">Lowercase Input</Link>
        <Link to="/list-of-things">List Of Things</Link>
      </div>
    </div>
  );
}
