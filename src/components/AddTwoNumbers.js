import { useState } from "react";

export default function AddTwoNumbers() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [total, setTotal] = useState(0);

  function calculateNumbers() {
    setTotal(firstNumber + secondNumber);
    setFirstNumber("");
    setSecondNumber("");
  }

  return (
    <div className="add-two-numbers-container">
      <div className="add-two-numbers-header">
        <h1>Hello From Add Two Numbers</h1>
      </div>

      <div className="input-wrapper">
        <input
          placeholder="First Number"
          type="number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(+e.target.value)}
        />

        <input
          placeholder="Second Number"
          type="number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(+e.target.value)}
        />
      </div>

      <div className="btn-wrapper">
        <button onClick={calculateNumbers}>Add Two Numbers</button>
      </div>

      <div className="total-wrapper">{`Total: ${total}` || ""}</div>
    </div>
  );
}
