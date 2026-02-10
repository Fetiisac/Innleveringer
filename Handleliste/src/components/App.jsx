import { useState } from "react";
import AddForm from "./Addform.jsx";
import ShoppingList from "./ShoppingList.jsx";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Melk", quantity: 2, bought: false },
    { id: 2, name: "Brød", quantity: 1, bought: true },
  ]);

  const addItem = (name, quantity) => {
    const newItem = { id: Date.now(), name, quantity, bought: false };
    setItems([newItem, ...items]);
  };

  const toggleBought = (id) =>
    setItems(items.map(i => i.id === id ? { ...i, bought: !i.bought } : i));

  const updateQuantity = (id, quantity) => {
    if (quantity > 0) {
      setItems(items.map(i => i.id === id ? { ...i, quantity } : i));
    }
  };

  return (
    <main>
      <h1>Handleliste</h1>
      <AddForm addItem={addItem} />
      <ShoppingList
        items={items}
        toggleBought={toggleBought}
        updateQuantity={updateQuantity}
      />
    </main>
  );
}
