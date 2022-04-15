import { useState } from "react";

export default function CapitalizeInput() {
  const [inputStr, setInputStr] = useState("");
  const [headerText, setHeaderText] = useState(
    " Your  UPPRECASE name prints here"
  );

  const stringToUpperCase = (e) => {
    e.preventDefault();
    setHeaderText(inputStr.toUpperCase());

    setInputStr("");
  };

  return (
    <div className="capatilize-input-container">
      <div className="header-wrapper">
        <h1>{headerText}</h1>
      </div>

      <div className="form-wrapper">
        <form>
          <input
            type="text"
            placeholder="name/lowercase letters"
            value={inputStr}
            onChange={(e) => setInputStr(e.target.value)}
          />

          <div>
            <button onClick={stringToUpperCase}>Capitalize Me</button>
          </div>
        </form>
      </div>
    </div>
  );
}
