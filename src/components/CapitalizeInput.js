import { useState } from "react";

export default function CapitalizeInput() {
  const [input_str, setInputStr] = useState("");
  const [somebtn, setSomebtn] = useState(" Your  UPPRECASE name prints here");

  const stringToUpperCase = (e) => {
    e.preventDefault();
    setSomebtn(input_str);
  };

  return (
    <div className="capatilize-input-container">
      <div className="header-wrapper">
        <h1>{somebtn}</h1>
      </div>

      <div className="form-wrapper">
        <form>
          <input
            type="text"
            placeholder="name/lowercase letters"
            onChange={(e) => setInputStr(e.target.value.toUpperCase())}
          />

          <div>
            <button onClick={stringToUpperCase}>Capitalize me</button>
          </div>
        </form>
      </div>
    </div>
  );
}
