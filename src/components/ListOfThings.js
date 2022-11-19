import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ListOfThings() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      {
        id: items.length,
        name: itemName,
      },
    ]);
    setItemName("");
  };

  const deleteItems = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };

  return (
    <div className="list-of-things-container">
      <div className="header-wrapper">
        <h1>Welcome To List of Things</h1>
      </div>

      <div className="form-wrapper">
        <form onSubmit={addItem}>
          <input
            name="item"
            type="text"
            placeholder="Enter text to add to list"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </form>
      </div>

      <div className="list-wrapper">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}{" "}
              <button onClick={() => deleteItems(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
