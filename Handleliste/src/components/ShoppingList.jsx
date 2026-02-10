import ShoppingItem from "./ShoppingItem.jsx";

export default function ShoppingList({ items, toggleBought, updateQuantity }) {
  return (
    <ul>
      {items.map(item => (
        <ShoppingItem
          key={item.id}
          item={item}
          toggleBought={toggleBought}
          updateQuantity={updateQuantity}
        />
      ))}
    </ul>
  );
}
