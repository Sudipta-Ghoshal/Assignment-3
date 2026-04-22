import { useContext } from "react";
import { CartContext } from "../context";
import { getAvailableStock, updateQuantity } from "../reducers/CartReducer";

export default function Counter({ item }) {
  const { cartData, dispatchCart } = useContext(CartContext);
  const canDecrease = item.quantity > 1;
  const canIncrease = getAvailableStock(item, cartData) > 0;

  return (
    <div className="flex items-center space-x-2">
      <button
        className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed"
        disabled={!canDecrease}
        onClick={() => updateQuantity(item, -1, dispatchCart)}
      >
        −
      </button>
      <span className="text-sm">{item.quantity}</span>
      <button
        className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed"
        disabled={!canIncrease}
        onClick={() => updateQuantity(item, +1, dispatchCart)}
      >
        +
      </button>
    </div>
  );
}
