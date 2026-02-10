export default function ShoppingItem({ item, toggleBought, updateQuantity }) {
  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    if (value > 0) updateQuantity(item.id, value);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={item.bought}
        onChange={() => toggleBought(item.id)}
      />
      <span style={{ textDecoration: item.bought ? "line-through" : "none" }}>
        {item.name}
      </span>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={handleQuantityChange}
      />
    </li>
  );
}
