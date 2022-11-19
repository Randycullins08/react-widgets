import { useState } from "react";

export default function LowercaseInput() {
  const [inputStr, setInputStr] = useState("");
  const [headerText, setHeaderText] = useState(
    "Your lowercase name prints here"
  );

  function strToLowercase(e) {
    e.preventDefault();

    setHeaderText(inputStr.toLowerCase());
    setInputStr("");
  }

  return (
    <div className="lowercase-input-container">
      <div className="header-wrapper">
        <h1>{headerText}</h1>
      </div>

      <div className="form-wrapper">
        <form>
          <input
            type="text"
            placeholder="Name/Uppercase Letters"
            value={inputStr}
            onChange={(e) => setInputStr(e.target.value)}
          />

          <div>
            <button onClick={strToLowercase}>Lowercase Me</button>
          </div>
        </form>
      </div>
    </div>
  );
}
