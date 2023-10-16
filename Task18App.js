//App.js:

import React, { useState } from "react";
import List from "./List";

function App() {
  const [items, setItems] = useState([
    { id: "item-1", content: "Item 1" },
    { id: "item-2", content: "Item 2" },
    { id: "item-3", content: "Item 3" },
    { id: "item-4", content: "Item 4" },
    { id: "item-5", content: "Item 5" },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(reorderedItems);
  };

  return (
    <div className="App">
      <h1>Drag and Drop List</h1>
      <List items={items} onDragEnd={onDragEnd} />
    </div>
  );
}

export default App;