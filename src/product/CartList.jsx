import { useContext } from "react";
import { CartContext } from "../context";
import { removeFromCart } from "../reducers/CartReducer";
import { getImgUrl } from "../utils/img-utility";
import Counter from "./Counter";

export default function CartList({ item }) {
  const { dispatchCart } = useContext(CartContext);

  return (
    <>
      <div className="flex items-start space-x-4 pb-4 px-2 border-b border-gray-200 mb-4">
        <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
          <img
            src={getImgUrl(item.thumbnail)}
            alt={item.title}
            className="h-full w-auto object-cover"
          ></img>
        </div>
        <div className="flex-grow">
          <div className="flex justify-between">
            <h3 className="font-medium">{item.title}</h3>
            <button
              type="button"
              className="text-red-500 text-sm"
              onClick={() => removeFromCart(item, dispatchCart)}
            >
              ×
            </button>
          </div>
          <p className="text-sm text-gray-500">Size: {item.size}</p>
          <p className="text-sm text-gray-500">Color: {item.color}</p>
          <div className="flex justify-between items-center mt-2">
            <p className="font-bold">${item.price}</p>

            <Counter item={item} />
          </div>
        </div>
      </div>
    </>
  );
}
