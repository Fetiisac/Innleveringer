import { useState } from 'react';

function AddForm({ onAdd, error }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(name, parseInt(quantity));
    setName('');
    setQuantity('');
  };

  return (
    <section>
      <h2>Legg til vare</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Varenavn:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Antall:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </label>
        <button type="submit">Legg til</button>
      </form>
      {error && <p role="alert">{error}</p>}
    </section>
  );
}

export default AddForm;