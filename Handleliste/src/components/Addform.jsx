import { useState } from "react";

export default function AddForm({ addItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !quantity || quantity <= 0) {
      setError("Fyll ut både navn og antall (større enn 0).");
      return;
    }
    addItem(name, Number(quantity));
    setName("");
    setQuantity("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <label>
        Vare:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Antall:
        <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <button type="submit">Legg til</button>
    </form>
  );
}
